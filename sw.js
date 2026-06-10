const CACHE_ADI = 'mem-takvim-v1';
const CACHE_DOSYALAR = [
  '/fethiye-mem-takvim/',
  '/fethiye-mem-takvim/index.html',
  '/fethiye-mem-takvim/manifest.json',
  '/fethiye-mem-takvim/ikon.png'
];

// Kurulum — dosyaları önbelleğe al
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_ADI).then(function(cache) {
      return cache.addAll(CACHE_DOSYALAR);
    })
  );
});

// Fetch — önce önbellekten dene
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
