self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hitesh-portfolio-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/sections/about.html',
        '/sections/projects.html',
        '/sections/specialities.html',
        '/sections/certifications.html',
        '/sections/contact.html',
        '/assets/style.css',
        '/assets/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
