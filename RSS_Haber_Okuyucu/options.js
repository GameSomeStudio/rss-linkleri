
const MAX_RSS_COUNT = 20;

const categorizedFeeds = {
"GÜNDEM": [
    "https://www.trthaber.com/manset_articles.rss",
	"https://www.trthaber.com/sondakika_articles.rss",
    "https://www.trthaber.com/guncel_articles.rss",
	"https://www.trthaber.com/turkiye_articles.rss",
    "https://www.ahaber.com.tr/rss/gundem.xml",
    "https://www.ahaber.com.tr/rss/son24saat.xml",
    "https://www.ahaber.com.tr/rss/anasayfa.xml",
    "https://www.ahaber.com.tr/rss/tum-mansetler.xml",
    "https://www.sozcu.com.tr/feeds-rss-category-gundem",
    "https://www.sabah.com.tr/rss/gundem.xml",
    "https://www.milliyet.com.tr/rss/rssnew/gundem.xml",
    "https://www.cnnturk.com/feed/rss/turkiye/news",
    "https://www.haberturk.com/rss",
    "https://www.ntv.com.tr/gundem.rss",
    "https://www.ntv.com.tr/turkiye.rss",
    "https://www.sonpostagazetesi.com/rss/gundem-1",
    "https://www.takvim.com.tr/rss/guncel",
    "https://www.mynet.com/haber/rss/gununozeti/"
  ],
"SİYASET": [
    "https://www.sabah.com.tr/rss/siyaset.xml",
    "https://www.haberturk.com/rss/kategori/siyaset.xml",
    "https://www.milliyet.com.tr/rss/rssnew/siyasetrss.xml",
    "https://www.mynet.com/haber/rss/kategori/politika/"
  ],
"EKONOMİ": [
    "https://www.trthaber.com/ekonomi_articles.rss",
    "https://www.ahaber.com.tr/rss/ekonomi.xml",
    "https://www.ahaber.com.tr/rss/galeri/ekonomi.xml",
    "https://www.ahaber.com.tr/rss/video/ekonomi.xml",
    "https://www.sozcu.com.tr/feeds-rss-category-ekonomi",
    "https://www.sozcu.com.tr/feeds-rss-category-kripto",
    "https://www.sozcu.com.tr/feeds-rss-category-finans",
    "https://www.sabah.com.tr/rss/ekonomi.xml",
    "https://www.sabah.com.tr/rss/economy.xml",
    "https://www.milliyet.com.tr/rss/rssnew/ekonomi.xml",
    "https://www.cnnturk.com/feed/rss/ekonomi/news",
    "https://www.cnnturk.com/feed/rss/ekonomi/gallery",
    "https://www.haberturk.com/rss/ekonomi.xml",
    "https://www.ntv.com.tr/ekonomi.rss",
    "https://www.takvim.com.tr/rss/ekonomi"
  ],
"YAZARLAR": [
"https://www.ahaber.com.tr/rss/yazarlar.xml",
"https://www.ahaber.com.tr/rss/analiz.xml",
"https://www.sozcu.com.tr/feeds-rss-category-yazar",
"https://www.haberturk.com/rss/kategori/yazarlar.xml",
"https://www.milliyet.com.tr/rss/rssnew/yazarlarrss.xml",
"https://www.takvim.com.tr/rss/yazarlar"
],
"SPOR": [
"https://www.trthaber.com/spor_articles.rss",
"http://www.fotomac.com.tr/rss/anasayfa.xml", 
"http://www.fotomac.com.tr/rss/galatasaray.xml",
"http://www.fotomac.com.tr/rss/fenerbahce.xml",
"http://www.fotomac.com.tr/rss/besiktas.xml",
"http://www.fotomac.com.tr/rss/trabzonspor.xml",
"http://www.fotomac.com.tr/rss/superlig.xml",
"http://www.fotomac.com.tr/rss/aktuel.xml",
"http://www.fotomac.com.tr/rss/ikincilig.xml",
"http://www.fotomac.com.tr/rss/yazarlar.xml",
"https://www.ahaber.com.tr/rss/spor.xml",
"https://www.ahaber.com.tr/rss/galeri/spor.xml",
"https://www.ahaber.com.tr/rss/video/spor.xml",
"https://www.ahaber.com.tr/rss/turkiye-kupasi.xml",
"https://www.ahaber.com.tr/rss/video/ziraatturkiyekupasi.xml",
"https://www.sozcu.com.tr/feeds-rss-category-spor",
"https://www.sozcu.com.tr/feeds-rss-category-voleybol",
"https://www.sozcu.com.tr/feeds-rss-category-euro-2024",
"https://www.sozcu.com.tr/feeds-rss-category-diger-sporlar",
"https://www.sozcu.com.tr/feeds-rss-category-dunyadan-spor",
"https://www.sozcu.com.tr/feeds-rss-category-futbol",
"https://www.sozcu.com.tr/feeds-rss-category-basketbol",
"https://www.sabah.com.tr/rss/spor.xml",
"https://www.sabah.com.tr/rss/sport.xml",
"https://www.milliyet.com.tr/rss/rssnew/sporrss.xml",
"https://www.cnnturk.com/feed/rss/spor/news",
"https://www.cnnturk.com/feed/rss/spor/gallery",
"https://www.haberturk.com/rss/kategori/spor.xml",
"https://www.ntv.com.tr/spor.rss",
"https://www.sonpostagazetesi.com/rss/spor-4",
"https://spor.mynet.com/rss"
],
"MAGAZİN": [
"https://www.cumhuriyet.com.tr/rss/magazin",
"https://www.ahaber.com.tr/rss/magazin.xml",
"https://www.ahaber.com.tr/rss/galeri/magazin.xml",
"https://www.sozcu.com.tr/feeds-rss-category-magazin",
"https://www.sabah.com.tr/rss/magazin.xml",
"https://www.milliyet.com.tr/rss/rssnew/magazinrss.xml",
"https://www.cnnturk.com/feed/rss/magazin/news",
"https://www.cnnturk.com/feed/rss/magazin/gallery",
"https://www.haberturk.com/rss/magazin.xml",
"https://www.mynet.com/magazin/rss",
"https://www.mynet.com/haber/rss/kategori/magazin/"
],
"DÜNYA": [
"https://www.trthaber.com/dunya_articles.rss",
"https://www.ahaber.com.tr/rss/dunya.xml",
"https://www.ahaber.com.tr/rss/galeri/dunya.xml",
"https://www.ahaber.com.tr/rss/video/dunya.xml",
"https://www.sozcu.com.tr/feeds-rss-category-dunya",
"https://www.sabah.com.tr/rss/dunya.xml",
"https://www.milliyet.com.tr/rss/rssnew/dunyarss.xml",
"https://www.cnnturk.com/feed/rss/dunya/news",
"https://www.haberturk.com/rss/kategori/dunya.xml",
"https://www.ntv.com.tr/dunya.rss",
"https://www.sonpostagazetesi.com/rss/dunya-2",
"https://www.mynet.com/haber/rss/kategori/dunya/"
],
"TEKNOLOJİ": [
"https://www.trthaber.com/bilim_teknoloji_articles.rss",
"https://www.cumhuriyet.com.tr/rss/bilim-teknoloji",
"https://www.ahaber.com.tr/rss/teknoloji.xml",
"https://www.ahaber.com.tr/rss/galeri/teknoloji.xml",
"https://www.ahaber.com.tr/rss/video/teknoloji.xml",
"https://www.sozcu.com.tr/feeds-rss-category-bilim-teknoloji",
"https://www.sabah.com.tr/rss/teknoloji.xml",
"https://www.milliyet.com.tr/rss/rssnew/teknolojirss.xml",
"https://www.cnnturk.com/feed/rss/bilim-teknoloji/news",
"https://www.cnnturk.com/feed/rss/bilim-teknoloji/gallery",
"https://www.haberturk.com/rss/kategori/teknoloji.xml",
"https://www.ntv.com.tr/teknoloji.rss",
"https://www.mynet.com/haber/rss/kategori/teknoloji/"
],
"ASTROLOJİ": [
"https://www.sozcu.com.tr/feeds-rss-category-astroloji",
"https://www.milliyet.com.tr/rss/rssnew/astrolojirss.xml",
"https://www.takvim.com.tr/rss/astroloji"
],
"OTOMOBİL": [
"https://www.ahaber.com.tr/rss/otomobil.xml",
"https://www.ahaber.com.tr/rss/galeri/otomobil.xml",
"https://www.ahaber.com.tr/rss/video/otomobil.xml",
"https://www.sozcu.com.tr/feeds-rss-category-otomotiv",
"https://www.sabah.com.tr/rss/otomobil.xml",
"https://www.milliyet.com.tr/rss/rssnew/otomobilrss.xml",
"https://www.cnnturk.com/feed/rss/otomobil/news",
"https://www.cnnturk.com/feed/rss/otomobil/gallery",
"https://www.haberturk.com/rss/kategori/otomobil.xml",
"https://www.ntv.com.tr/otomobil.rss",
"https://www.takvim.com.tr/rss/otomobil"
],
"SAĞLIK": [
"https://www.trthaber.com/saglik_articles.rss",
"https://www.cumhuriyet.com.tr/rss/saglik",
"https://www.ahaber.com.tr/rss/saglik.xml",
"https://www.sozcu.com.tr/feeds-rss-category-saglik",
"https://www.sabah.com.tr/rss/saglik.xml",
"https://www.milliyet.com.tr/rss/rssnew/saglik.xml",
"https://www.cnnturk.com/feed/rss/saglik/gallery",
"https://www.haberturk.com/rss/kategori/saglik.xml",
"https://www.ntv.com.tr/saglik.rss",
"https://www.mynet.com/haber/rss/kategori/saglik/"
],
"YAŞAM": [
"https://www.trthaber.com/yasam_articles.rss",
"https://www.trthaber.com/kultur_sanat_articles.rss",
"https://www.trthaber.com/egitim_articles.rss",
"https://www.cumhuriyet.com.tr/rss/yasam",
"https://www.ahaber.com.tr/rss/yasam.xml",
"https://www.ahaber.com.tr/rss/galeri/yasam.xml",
"https://www.ahaber.com.tr/rss/video/yasam.xml",
"https://www.sozcu.com.tr/feeds-rss-category-yasam",
"https://www.sabah.com.tr/rss/gununicinden.xml",
"https://www.milliyet.com.tr/rss/rssnew/yasamrss.xml",
"https://www.cnnturk.com/feed/rss/yasam/news",
"https://www.cnnturk.com/feed/rss/yasam/gallery",
"https://www.haberturk.com/rss/kategori/yasam.xml",
"https://www.ntv.com.tr/yasam.rss",
"https://www.sonpostagazetesi.com/rss/yasam-8",
"https://www.mynet.com/haber/rss/kategori/yasam/"
],

"BORSA/YATIRIM": [
"https://tr.investing.com/rss/market_overview_Technical.rss",
"https://tr.investing.com/rss/market_overview_Fundamental.rss",
"https://tr.investing.com/rss/market_overview_Opinion.rss",
"https://tr.investing.com/rss/market_overview_investing_ideas.rss",
"https://tr.investing.com/rss/forex_Technical.rss",
"https://tr.investing.com/rss/forex_Fundamental.rss",
"https://tr.investing.com/rss/forex_Opinion.rss",
"https://tr.investing.com/rss/forex_Signals.rss",
"https://tr.investing.com/rss/286.rss",
"https://tr.investing.com/rss/290.rss",
"https://tr.investing.com/rss/stock_Technical.rss",
"https://tr.investing.com/rss/stock_Fundamental.rss",
"https://tr.investing.com/rss/stock_Opinion.rss",
"https://tr.investing.com/rss/stock_stock_picks.rss",
"https://tr.investing.com/rss/stock_Stocks.rss",
"https://tr.investing.com/rss/stock_Indices.rss",
"https://tr.investing.com/rss/stock_Futures.rss",
"https://tr.investing.com/rss/stock_Options.rss",
"https://tr.investing.com/rss/commodities_Technical.rss",
"https://tr.investing.com/rss/news_1061.rss",
"https://tr.investing.com/rss/news_356.rss",
"https://tr.investing.com/rss/news_301.rss",
"https://tr.investing.com/rss/news_25.rss",
]
 
};

const categorySelect = document.getElementById("categorySelect");
const rssSelect = document.getElementById("rssSelect");
const addRssBtn = document.getElementById("addRssBtn");
const rssStatus = document.getElementById("rssStatus");
const intervalSelect = document.getElementById("intervalSelect");
const intervalStatus = document.getElementById("intervalStatus");
const rssListContainer = document.getElementById("rssListContainer");

function populateCategories() {
  for (const category in categorizedFeeds) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  }
}

function populateFeeds(category) {
  rssSelect.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "-- RSS seçin --";
  rssSelect.appendChild(defaultOption);

  if (!categorizedFeeds[category]) return;

  categorizedFeeds[category].forEach(feed => {
    const option = document.createElement("option");
    option.value = feed;
    option.textContent = feed;
    rssSelect.appendChild(option);
  });

  rssSelect.disabled = false;
  addRssBtn.disabled = true;
}

function renderRssList() {
  chrome.storage.local.get({ rssFeeds: [] }, (data) => {
    const feeds = data.rssFeeds;
    rssListContainer.innerHTML = "";

    if (feeds.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Hiçbir RSS eklenmemiş.";
      rssListContainer.appendChild(li);
      return;
    }

    feeds.forEach((feed) => {
      const li = document.createElement("li");
      
      // Etkinleştirme/durdurma anahtarı ekle
      const toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.checked = feed.enabled;
      toggle.style.marginRight = "10px";
      toggle.addEventListener('change', () => toggleRss(feed.url, toggle.checked));
      
      li.appendChild(toggle);
      li.appendChild(document.createTextNode(feed.url));
      
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌Sil";
      removeBtn.style.marginLeft = "10px";
      removeBtn.onclick = () => removeRss(feed.url);
      
      li.appendChild(removeBtn);
      rssListContainer.appendChild(li);
    });
  });
}

function toggleRss(url, enabled) {
  chrome.storage.local.get({ rssFeeds: [] }, (data) => {
    const updatedFeeds = data.rssFeeds.map(feed => {
      if (feed.url === url) {
        return { ...feed, enabled };
      }
      return feed;
    });
    
    chrome.storage.local.set({ rssFeeds: updatedFeeds });
  });
}

function removeRss(urlToRemove) {
  chrome.storage.local.get({ rssFeeds: [] }, (data) => {
    const updatedFeeds = data.rssFeeds.filter(feed => feed.url !== urlToRemove);
    chrome.storage.local.set({ rssFeeds: updatedFeeds }, () => {
      renderRssList();
      rssStatus.textContent = "RSS kaldırıldı.";
      setTimeout(() => { rssStatus.textContent = ""; }, 2000);
    });
  });
}

function handleCategoryChange() {
  const selectedCategory = categorySelect.value;
  if (selectedCategory) {
    populateFeeds(selectedCategory);
  } else {
    rssSelect.innerHTML = "<option>-- Önce kategori seçin --</option>";
    rssSelect.disabled = true;
    addRssBtn.disabled = true;
  }
  rssStatus.textContent = "";
}

function handleRssChange() {
  addRssBtn.disabled = !rssSelect.value;
  rssStatus.textContent = "";
}

function handleAddRss() {
  const selectedRss = rssSelect.value;
  if (!selectedRss) return;

  chrome.storage.local.get({ rssFeeds: [] }, (data) => {
    const rssFeeds = data.rssFeeds;

    // URL zaten ekli mi kontrol et
    if (rssFeeds.some(feed => feed.url === selectedRss)) {
      rssStatus.textContent = "Bu RSS zaten eklenmiş.";
      return;
    }

    if (rssFeeds.length >= MAX_RSS_COUNT) {
      rssStatus.textContent = "Maksimum RSS sayısına ulaşıldı.";
      return;
    }

    // Yeni RSS'yi varsayılan olarak etkinleştir
    rssFeeds.push({ url: selectedRss, enabled: true });
    chrome.storage.local.set({ rssFeeds }, () => {
      rssStatus.textContent = "RSS başarıyla eklendi.";
      renderRssList();
    });
  });
}

function handleIntervalChange() {
  const selected = parseInt(intervalSelect.value);
  chrome.storage.local.set({ refreshInterval: selected }, () => {
    intervalStatus.textContent = "Güncelleme aralığı kaydedildi.";
    setTimeout(() => {
      intervalStatus.textContent = "";
    }, 2000);
    
    // Aralık değiştiğini background'a bildir
    chrome.runtime.sendMessage({
      action: "updateInterval",
      interval: selected
    });
  });
}

// DÜZELTME: Eski rssList'i rssFeeds'e dönüştür
function migrateOldData() {
  chrome.storage.local.get(['rssList'], (result) => {
    if (result.rssList && result.rssList.length > 0) {
      const rssFeeds = result.rssList.map(url => ({ url, enabled: true }));
      chrome.storage.local.set({ rssFeeds }, () => {
        chrome.storage.local.remove('rssList');
        renderRssList();
      });
    }
  });
}

// DOM hazır olduğunda tüm olayları bağla
document.addEventListener("DOMContentLoaded", () => {
  populateCategories();
  migrateOldData();

  // Varsayılan RSS'leri sadece ilk açılışta yükle
  chrome.storage.local.get(['rssFeeds'], (result) => {
    if (!result.rssFeeds || result.rssFeeds.length === 0) {
      const defaultFeeds = [
        { url: "https://www.trthaber.com/guncel_articles.rss", enabled: true },
        { url: "https://www.trthaber.com/ekonomi_articles.rss", enabled: true },      
	    { url: "https://www.trthaber.com/spor_articles.rss", enabled: true }
      ];
      chrome.storage.local.set({ rssFeeds: defaultFeeds }, () => {
        console.log("✅ Varsayılan RSS'ler yüklendi");
        renderRssList(); // listeyi hemen göster
      });
    } else {
      renderRssList(); // zaten varsa göster
    }
  });

  // Önceki ayarı yükle
  chrome.storage.local.get(["refreshInterval"], (data) => {
    if (data.refreshInterval) {
      intervalSelect.value = data.refreshInterval.toString();
    }
  });

  categorySelect.addEventListener("change", handleCategoryChange);
  rssSelect.addEventListener("change", handleRssChange);
  addRssBtn.addEventListener("click", handleAddRss);
  intervalSelect.addEventListener("change", handleIntervalChange);
  
  // Kapatma butonu
  document.getElementById('closeBtn')?.addEventListener('click', () => {
    window.close();
  });
});