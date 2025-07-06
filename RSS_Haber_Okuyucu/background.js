const notificationLinks = {};

function cleanCDATA(str) {
  return str
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .trim();
}

function getHostname(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace('www.', '');
  } catch {
    return '';
  }
}

function parseRSS(text) {
  const itemMatch = text.match(/<item>([\s\S]*?)<\/item>/i);
  if (!itemMatch) return null;

  const itemContent = itemMatch[1];
  const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/i);
  const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/i);

  const title = titleMatch ? cleanCDATA(titleMatch[1]) : null;
  const link = linkMatch ? cleanCDATA(linkMatch[1]) : null;

  return { title, link };
}


function checkNewsForUrl(rssUrl) {
  return fetch(rssUrl)
    .then(res => res.text())
    .then(text => {
      const item = parseRSS(text);
      if (!item || !item.title) return null;
      return item;
    })
    .then(item => {
      if (!item || !item.title) return;

      chrome.storage.local.get(['latestTitles'], (result) => {
        const latestTitles = result.latestTitles || {};
        if (latestTitles[rssUrl] !== item.title) {
          latestTitles[rssUrl] = item.title;

          const notificationId = "haberBildirim_" + Date.now();
          notificationLinks[notificationId] = item.link;

          const source = getHostname(item.link) || getHostname(rssUrl);
          chrome.notifications.create(notificationId, {
            type: "basic",			
            iconUrl: "icons/icon48.png",
            title: "Yeni Haber!",
            message: `${item.title}\nKaynak: ${source}`,
            priority: 2
          });

          chrome.storage.local.set({ latestTitles });
        }
      });
    })
    .catch(err => console.error("Haber çekme hatası:", err));
}

// ... (kalan kodlar aynı) ...

function checkAllNews() {
  chrome.storage.local.get(['rssFeeds'], (result) => {
    const feeds = result.rssFeeds || [];
    // Sadece etkinleştirilmiş RSS kaynaklarını filtrele
    const enabledFeeds = feeds.filter(feed => feed.enabled).map(feed => feed.url);
    
    enabledFeeds.forEach(url => {
      checkNewsForUrl(url);
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['refreshInterval'], (result) => {
    let interval = parseInt(result.refreshInterval) || 1;
    chrome.alarms.create("checkNews", { periodInMinutes: interval });
  });
  checkAllNews();
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkNews") {
    checkAllNews();
  }
});

chrome.notifications.onClicked.addListener((notificationId) => {
  if (notificationLinks[notificationId]) {
    chrome.tabs.create({ url: notificationLinks[notificationId] });
    delete notificationLinks[notificationId];
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "updateInterval") {
    chrome.alarms.clear("checkNews");
    chrome.alarms.create("checkNews", { 
      periodInMinutes: message.interval 
    });
    checkAllNews();
  }
});