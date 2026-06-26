self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './assets/css/style.css',
          './assets/js/script.js',
          './assets/js/bouton_installer.js',
          './assets/image/favicon.png',
          './assets/image/calculator.png',
          './assets/image/retour_blanc.png',
          './assets/image/calculator.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  