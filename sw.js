const CACHE_NAME = 'atlas-oea-shell-v109';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/styles-v26.css',
  './assets/organizacion-mapa.css?v=atlas-oea-9',
  './assets/arquitectura-atlas-v25.css',
  './assets/app-v41.js',
  './assets/competencia-v1.js',
  './assets/audiencia-lab-v1.js',
  './assets/razonamiento-v1.js',
  './assets/map-connections-v6.js',
  './assets/plazos-comparador-v1.js',
  './assets/datos-atlas-v1.js',
  './assets/relatorias-v1.js',
  './assets/glosario.js?v=editorial-9',
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
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL.map(url => new Request(url, {cache:'reload'})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => (key.startsWith('ruta-interamericana-') || key.startsWith('atlas-oea-shell-')) && key !== CACHE_NAME)
      .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const {request} = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (request.mode === 'navigate') {
      try {
        return await fetch(request, {cache:'no-cache'});
      } catch {
        return (await cache.match('./index.html')) || Response.error();
      }
    }
    const cached = await cache.match(request);
    if (cached) return cached;
    return fetch(request);
  })());
});
