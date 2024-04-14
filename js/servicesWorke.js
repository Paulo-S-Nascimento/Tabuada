export const registerServiceWorker = () => {

const CACHE_NAME = 'tabuada';
const assetsToCache = [
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/js/servicesWorker.js',
    '/image/seta.png',
    '/manifest.json',
];


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
        return Promise.all(keys.map(key => {
            if (key !== CACHE_NAME) {
            return caches.delete(key);
            }
        }));
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request);
        })
    );
});


 }