'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9d6efc1ac8456c51f496687efb380af8",
"index.html": "0a38b8e5dab07dde92fa3efb7edca125",
"/": "0a38b8e5dab07dde92fa3efb7edca125",
"main.dart.js": "ecebbeb5d98e0475fd4d946449e612bb",
"icons/logo_only.png": "06fc944c97d1abf5504b6e6f3c01db75",
"manifest.json": "11019e1d71ef8769dedfe8179b4c1e00",
"assets/AssetManifest.json": "176073f2fd648d39ecd7899030e9bbc8",
"assets/NOTICES": "381b12cfc15edf5fddd49c3e205773fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/email.png": "6f455defa7def5ef88cfbf7bfa5570e7",
"assets/assets/images/down_arrow.png": "ea0f38ce6525a231aef0d4399282314d",
"assets/assets/images/secure_icon.png": "4c05227db3b34f84fe9a99fe52460f4c",
"assets/assets/images/preverf.png": "3f3515548d27b431c74e92368f6319bd",
"assets/assets/images/roof_reasons.png": "cc86bcbb245e8c98aee4af9c61fb9b07",
"assets/assets/images/awards_view.png": "499264a86071043f2daa6773288774f8",
"assets/assets/images/homead.png": "991f3e31f8118b13761b81bec214b066",
"assets/assets/images/dolly.png": "9238f35272e11d3dc15f7d6ce2d6ec5e",
"assets/assets/images/roofer.png": "b54bf2945636d97e41e13c1a7a544dbd",
"assets/assets/images/roofer_reasons.png": "ed99452d88ce1c997f9b5ad154a55437",
"assets/assets/images/dewalt.png": "53f8ea11905209a4cb9dd80e676ac956",
"assets/assets/images/certified.png": "85e42d5ebe9a136ddf4185d2e3ca54ea",
"assets/assets/images/image1.jpeg": "9f710a2478533a982d181288556ed586",
"assets/assets/images/instagram.png": "dd6e217c75d072f2b0bb0c02c6b9364a",
"assets/assets/images/homeadvis.png": "24dbcf66686891c15be0876c90a73e24",
"assets/assets/images/roof_icon.png": "7e27bb811df5fe5bb32ff95bbc452b5d",
"assets/assets/images/f1.png": "8fb11380af6f5112bf46e6d67b60ef3a",
"assets/assets/images/f2.png": "a56e82edba418f329fd03d9f7c1caaa7",
"assets/assets/images/angi.png": "c6c592dfe46a9adad16a6788ebf2f343",
"assets/assets/images/staples.png": "54540f278c60447a583bb1f5110bb33d",
"assets/assets/images/f3.png": "2c1bdceab98b6d4023008d39c41b5679",
"assets/assets/images/mobile_background_image.png": "83b06013241bc517ddd67027f50f6f17",
"assets/assets/images/background_image.png": "2cdf1400458583d81339fb647576c88f",
"assets/assets/images/location_image.png": "e086973c2c15192d5f2bed4ac482492b",
"assets/assets/images/logo.png": "39e484eb4f1252069ca85dfa1a728d9d",
"assets/assets/images/team_icon.png": "8566b219c7fdf471c940c58a10847e6b",
"assets/assets/images/logo_white.png": "d4bdbb73c352fade78ae9aecb0c507dd",
"assets/assets/images/logo_only.png": "06fc944c97d1abf5504b6e6f3c01db75",
"assets/assets/images/linkedin.png": "b1456fd39d414f7417abcd323cb3cb09",
"assets/assets/images/boundde.png": "f54a951c47f5f5c1f0eb0d3fa6d2de94",
"assets/assets/images/image2.jpeg": "908e7a814b699d01f989245c5f306659",
"assets/assets/images/windows.png": "0ac4c582ceda408f495d47e9f15f9bb1",
"assets/assets/images/stars.png": "0e2cb832aef0a501eacc98fa7895e6f9",
"assets/assets/images/whatsapp.png": "6351be2339554a86a889b79d2e57c3e0",
"assets/assets/images/family_reasons.png": "957b3ad6b5d2f21b1929c418cd298799",
"assets/assets/images/measuring.png": "a754c206171f40c5bdd9ccb1f5d7efad",
"assets/assets/images/accreditied.png": "dcea2ee99e96ca1eeea9eafa1f7a543a",
"assets/assets/images/jeremy.png": "44cd9a91db98ecb5ccaafef2b8fee471",
"assets/assets/images/image3.jpeg": "6c3ed6b0443031ce118bb5f9596d0f31",
"assets/assets/images/roofing_image.png": "a3c94977ec9b2a60297ddea1265667f1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
