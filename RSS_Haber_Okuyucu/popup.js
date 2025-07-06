function createNewsElement(item) {
  const div = document.createElement("div");
  div.className = "haber";
  div.style.marginBottom = "15px";

  if (item.thumbnail) {
    const img = document.createElement("img");
    img.src = item.thumbnail;
    img.alt = "thumbnail";
    img.style.width = "100%";
    img.style.maxHeight = "150px";
    img.style.objectFit = "cover";
    img.style.marginBottom = "5px";
    div.appendChild(img);
  }

  const a = document.createElement("a");
  a.href = item.link;
  a.textContent = item.title;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.style.fontWeight = "bold";
  a.style.display = "block";
  a.style.marginBottom = "5px";

  div.appendChild(a);
  return div;
}

function extractThumbnail(item) {
  // 1. <media:content url="...">
  const media = item.querySelector("media\\:content, content");
  if (media && media.getAttribute("url")) {
    return media.getAttribute("url");
  }

  // 2. <enclosure url="...">
  const enclosure = item.querySelector("enclosure");
  if (enclosure && enclosure.getAttribute("url")) {
    return enclosure.getAttribute("url");
  }

  // 3. <description> içindeki <img>
  const desc = item.querySelector("description")?.textContent;
  if (desc) {
    const imgMatch = desc.match(/<img.*?src=["'](.*?)["']/i);
    if (imgMatch) return imgMatch[1];
  }

  return null;
}

function fetchFeedNews(feedUrl) {
  return fetch(feedUrl)
    .then(res => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.text();
    })
    .then(str => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(str, "text/xml");
      const items = xmlDoc.querySelectorAll("item");
      const newsItems = [];

      items.forEach(item => {
        const title = item.querySelector("title")?.textContent.trim();
        const link = item.querySelector("link")?.textContent.trim();
        const thumbnail = extractThumbnail(item);

        if (title && link) {
          newsItems.push({ title, link, source: feedUrl, thumbnail });
        }
      });

      return newsItems;
    })
    .catch(err => {
      console.error(`"${feedUrl}" çekme hatası:`, err);
      return [];
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const area = document.getElementById("haberAlani");
  area.textContent = "Yükleniyor...";

  chrome.storage.local.get(['rssFeeds'], (result) => {
    const feeds = result.rssFeeds || [];
    const enabledFeeds = feeds.filter(feed => feed.enabled).map(feed => feed.url);

    if (enabledFeeds.length === 0) {
      area.textContent = "Etkin RSS kaynağı bulunamadı. Lütfen ayarlardan ekleyin.";
      return;
    }

    Promise.all(enabledFeeds.map(url => fetchFeedNews(url)))
      .then(results => {
        area.innerHTML = "";
        const allNews = results.flat();

        if (allNews.length === 0) {
          area.textContent = "Haber bulunamadı.";
          return;
        }

        allNews.forEach(item => {
          area.appendChild(createNewsElement(item));
        });
      })
      .catch(err => {
        console.error("Haber çekme hatası:", err);
        area.textContent = "Haberler yüklenirken hata oluştu. Daha sonra tekrar deneyin.";
      });
  });

  const openOptionsBtn = document.getElementById('openOptions');
  if (openOptionsBtn) {
    openOptionsBtn.addEventListener('click', () => {
      if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
      } else {
        window.open(chrome.runtime.getURL('options.html'));
      }
    });
  }
});


