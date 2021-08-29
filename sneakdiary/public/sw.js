const staticCacheName = 'site-static'
const assets = [
    '/',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/static/media/homewallpaper.ddbb4951.jpg',
    '/logo.png',
    'https://fonts.gstatic.com/s/materialicons/v98/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]

self.addEventListener('install', event => {
    //console.log('service worker has been installed')
    event.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets')
        cache.addAll(assets)
    }))
    
    //asset to cache that don't change alot
})

//activate service worker
self.addEventListener('activate', event => {
    //console.log('service worker has been activated')
})

//fetch event
self.addEventListener('fetch', event => {
    //console.log('fetch event', event)
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request)
        })
    )
})