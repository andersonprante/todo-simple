if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(function () { console.log('Service Worker Registered'); });
}

var cacheName = 'todo-app';
var filesToCache = [
  'imagens/edit.png',
  'imagens/remove.png',
  'imagens/icons/icon-128x128.png',
  'imagens/icons/icon-144x144.png',
  'imagens/icons/icon-152x152.png',
  'imagens/icons/icon-192x192.png',
  'imagens/icons/icon-256x256.png',
  'lib/bulma.css',
  'app.css',
  'index.html',
  'store.js',
  'todo_e6.js',
  'service-worker.js',
  'manifest.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
