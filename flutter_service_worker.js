'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "93639c0ae2337d9e80124f60402ae032",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/header.png": "71c55e8a87dc1cdefb410c6f2ebb4675",
"assets/assets/people-1.png": "d31512601a90bc0aa80205886506eddb",
"assets/assets/people-2.png": "b4d169b44e647327d95cc340ebc56755",
"assets/assets/people-3.png": "2939ca357680f3599f54b16a7bbdebb0",
"assets/assets/people-4.png": "867850d3388e46cf1f209cd41adb8289",
"assets/FontManifest.json": "9f44dd58395a200258f987680eda3f92",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "157b027d7b2d0f43027d1996220910ff",
"/": "157b027d7b2d0f43027d1996220910ff",
"main.dart.js": "b6b8cd7cca5dccae838ed0cb4d2a4b80",
"manifest.json": "a4ebababa47a3214f4566603fd72e6ba"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
