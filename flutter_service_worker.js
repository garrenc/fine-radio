'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ca8ebbe88e656136039de5122a8a61f1",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8e6950e02b06b8c74fa602c254ee9f29",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/00/046af6f90d31e1edc7d8252caa7d8a61b01162": "44ed5f486691d759b434449ff450eb54",
".git/objects/06/640dc2fee369e4aacddaef64fb072016c97302": "e9cce21a75ecf7e46c58368a10e92fbe",
".git/objects/0a/5bc9f205fa0e7f0446cf33b7cad480a6127eda": "2f6ce1e95ad80c06e50cd36f8106b0fc",
".git/objects/0d/64f2b92173b372c72accda22740130e36fa074": "eb6cf16c22941d8350d6b5e591a1dfa6",
".git/objects/11/df0874110ef7ce3ecca1bcf81f1937d42197cc": "ae6a898b135232ab8615a0e6286c2a3f",
".git/objects/19/27850fdd9c3fac4bad2ba4f78ac566cba35f33": "75c113709d4ce9a8116c62428b81ca7b",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/a03eb872891c8c41afb148984f626584b9c751": "e7f2496081bf9357feed3f85bc81eb15",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/f3b7f76e834eea29c396fee81e51ffb7a7be25": "7ee593b27149481df05142de93b5aecd",
".git/objects/5a/f375fb90ab6badb97c0e657e7c85aeec815386": "09d37ebb4961a3505cea98400915ca26",
".git/objects/6d/65f5d7c6ead99d2a3d2e3eda8a997632bdaa62": "5cba88c75e8697c51ecbd485918f8b21",
".git/objects/6f/8cc585a5d800af859b71d15ac8d3cb83484850": "cd201b79de8f2f8d034646a19c131a6b",
".git/objects/72/a5a1b900760008356389940035063ff3216d0b": "1a1f1e5fe5d15afaec2cc7ab9b2b150c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/28e213b97477ccc2e08104387928586f80dd67": "437473e781b4112faf76a45d64e1d757",
".git/objects/84/6f96141444dfb23a61798af577b764ce533a09": "e6e42222c3afd7dc59275b047816b487",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/004a913308da9c431dcebe5c60882a2f4ef4e7": "3c5a66c403fba4f2f5b4666e930e7967",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/ab48ed601b92d72832722c29d18dd52576a204": "7f91598b1a3017dc14ffc3f93484eff3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c4/68fead45d10b533e1a770235614902fbd3214e": "e4ba9d07a4c836b9fa8b082645ab7be5",
".git/objects/d8/4f678ed219cc08252e7875888d7ad642f7c5d3": "ecf76765a11f0cf0ace8044dab42388f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/669dc0d8daebf5b6eeab242b98c5ad84ec8b2b": "9e6f8c027327c2f0fd7f4b7426fe74cd",
"assets/AssetManifest.json": "ec35096d6f3e300e21245131b0ab5943",
"assets/assets/fonts/Captura-now-medium.otf": "16e0bdfbab54ed683ee600d7c75c6b43",
"assets/assets/images/facebook.png": "5676b13bb74becd22dfe5e06de145955",
"assets/assets/images/fine_radio_logo.png": "fa6f150b6af2fd4bccff2a877f0dac40",
"assets/assets/images/instagram.png": "9ee10dc30eb0bc2b1d1ca4ff961476d5",
"assets/assets/images/telegram.png": "0a37c6c2c5bde53fbc5e2a94d0c401f3",
"assets/assets/images/vk.png": "4ad254e241e467dcb1c478b8b847ab60",
"assets/FontManifest.json": "d25b263b976bb4ceb6183faed7a619df",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "15e1c231185dae8ffefbc974d472b981",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "80d643caf7febd52541d0a2836f9ecfe",
"/": "80d643caf7febd52541d0a2836f9ecfe",
"main.dart.js": "e80b55e3db304a71b35c7d3e10450c83",
"manifest.json": "22f3280cb326cddb9a7e5971f13af330",
"version.json": "0bccb070f25e2700882f35ec917d5d22"
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
