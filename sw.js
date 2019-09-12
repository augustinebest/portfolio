self.addEventListener('install', function(event) {
    console.log('SW Installed');
    event.waitUntil(
        caches.open('static')
        .then(function(cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/uzoedit2.jpg',
                '/img/aafast2.jpg',
                '/img/project.png',
                '/js/jquery-min.js',
                '/js/typed.js',
                '/js/common.js',
                '/js/main.js',
            ])
        })
    );
})

self.addEventListener('activate', function() {
    console.log('SW activated')
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if(res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    )
})