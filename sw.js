const CACHE_NAME = 'atlas-oea-shell-v44';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/styles-v18.css',
  './assets/organizacion-mapa.css',
  './assets/app-v23.js',
  './assets/glosario.js',
  './assets/jurisprudencia.js',
  './assets/opiniones.js',
  './assets/organos.js',
  './assets/estados-oea.js',
  './assets/mapa-americas.svg',
  './assets/brand/dejavu-sans-regular.woff2',
  './assets/brand/dejavu-sans-bold.woff2',
  './assets/brand/isotipo_color.svg',
  './assets/brand/isotipo_white.svg',
  './assets/brand/manifest-icon.svg',
  './assets/brand/favicon_32.png',
  './assets/brand/favicon_16.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => (key.startsWith('ruta-interamericana-') || key.startsWith('atlas-oea-shell-')) && key !== CACHE_NAME)
      .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request, {ignoreSearch: true}).then(cached => {
    if (cached) return cached;
    return fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
      return response;
    });
  }));
});
