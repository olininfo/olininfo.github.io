var staticCacheName = 'info-static-v1';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                '',
                'index.html',
                'js/info.js',
                'css/olin-info.css',
                'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                'images/adastra.jpg',
                'images/babsonhealth.jpg',
                'images/background.png',
                'images/bowshuttle.jpg',
                'images/calendar.jpg',
                'images/clubs.jpg',
                'images/constitution.jpg',
                'images/coursebrowser.jpg',
                'images/degree.jpg',
                'images/email.jpg',
                'images/flyolinfly.jpg',
                'images/forms.jpg',
                'images/getoffcampus.jpg',
                'images/greatlawn.jpg',
                'images/ITwiki.jpg',
                'images/laundry.jpg',
                'images/library.jpg',
                'images/olinahead.jpg',
                'images/olindining.jpg',
                'images/olintools.jpg',
                'images/onecard.jpg',
                'images/printers.jpg',
                'images/reimbursement.jpg',
                'images/student-sos.jpg',
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('info-') &&
                        cacheName !== staticCacheName;
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
    // https://github.com/paulirish/caltrainschedule.io/issues/49
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
    console.log(event.request);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // console.log(response);
            return response || fetch(event.request);
        }).catch(function (error) {
            console.log(error);
        })
    );
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});