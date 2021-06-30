'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01b1cd4d6d6eb28e4a7598e28335d639",
"index.html": "5e41f382b1e2c6f327f8aed61118b9cc",
"/": "5e41f382b1e2c6f327f8aed61118b9cc",
"main.dart.js": "cb8bf9e06bee3897254e92fabf9b7c78",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76cbbbb4e60eee319d3deb3367ae37f5",
".git/config": "14fa8136430ec19346dccaed49346683",
".git/objects/66/bb711861934af61ae2e648c2743881631b8bf5": "2a69b6ac7ef5d0be8219cc435b92ccf5",
".git/objects/50/0bb34a886aec5a5d7b3db4dcc6f194e91cfacd": "7c8411ddfff97bb94ca33c4b6bf280fd",
".git/objects/68/6cc1ca864f841206c941911070e2bc8d6369a9": "b128fa8bceb549c48faed84bea84f65d",
".git/objects/04/9846ec30af4f641e61ccfd81656aa7bc3efa46": "9d746710f8481960e2a2fc09242eebc5",
".git/objects/04/eaa6565693dc6be8585371340883c00f593ed0": "91aa81b88d5c0dc0e76fd64b4f784395",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/ddd643069fbe2463e1093dc8c3a4c3d6914436": "68f14927389e5ee4f25d0fedae5564b2",
".git/objects/3c/1944227ba0c01b7729b16777314b1c2b81a60b": "d5e320025dcc9ca95291019b2e9c21f4",
".git/objects/56/f81a00b36acb263a013a95737bb5f1177eecf0": "98b1f34ccad8e4e5edc0cada0e635a43",
".git/objects/51/b60c2eaad0443e770d2aab27593bad7ab08bf1": "a894fc1ed7e56750362867805477eb0c",
".git/objects/67/278c1c55940a2a9e713384d789610e9329c614": "09d6767a45c8dd36e87c60f55076bef2",
".git/objects/67/729b0dd60a7075631c9e84ab93d38677fd5357": "aa8cfd911707880bedca9b7fe9ed41a8",
".git/objects/33/f37b44b1923630fa97e0d84ade6387f7cf50fd": "2bf8739363025e5cda618500d68a8720",
".git/objects/33/c80373fd4c3147eebcddab9eabf1bea377aab4": "32c4379e4e8cb400e4d0be5c2eea9a1d",
".git/objects/df/c2f70e1cd6f718f548364f0e828c868e3cbbb7": "9fccb5fdb3b162e68f0ee1ff44ba1878",
".git/objects/b4/8de194914ef81c317e3f52ea54b1269618e82f": "813b82eefa6a16aa5485974c7506e7e8",
".git/objects/bc/2a4e53f5aca6b67952dd0235b797963097a516": "d78c2fbaa84ca98122935f7896eb6614",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/601b715c5850addf70df63cd82fb595f1c74d1": "71e8c39472a57f9978251c64f63a9977",
".git/objects/fc/e560a8cc06e3bfa79fcfbabd34668ef57a7df2": "7651dfbc2fef8a959d68f5cecfd0c1c0",
".git/objects/fd/2a6e4f165c145ed329a834f9c5ca06463e55b1": "9de500d5e2820bd400d6f5998890730e",
".git/objects/fb/d08dae2ab69193cd25ed566b0ea985d71bd6aa": "c915553f0507095ad87306ddadac5885",
".git/objects/c6/196d6a3772d9b686a5885d401a99c4371dbf12": "daf818d3cdf87c450b31bc29117054d6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/a591e76cb67187c97c8e5750477ab0d0d214df": "f4c190400519d8d1cbf240b9a4604f42",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/d4e063020106c2e5722e5242fc64c22acad7a0": "84c3cb4bc19a27a8a57056c5e7a87f49",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/6e/607e88793b13f452fd9455a292bea3501cdf10": "2d5bc0b3124fe30283d979732a50d36f",
".git/objects/36/2bed0a65bc0fd2fac259dd9d558624ef2f6d81": "2102542d89d94b028263faffae42ecbe",
".git/objects/5c/dea14ff79982fbac513dff5083f51fa121beef": "f72766bd3c00ac75ac1a3207ac12da0a",
".git/objects/62/b4e57cb1fb639dec4aee2d29c38d2e4636e0fe": "000fcd831cd5236cff636b0cee339265",
".git/objects/62/3c6fd1ecc14c99fc5e3c83d55186b981bfb38d": "a4eb9af81f440f4aff5ce10227bf084b",
".git/objects/01/778653a431a42bc33409eb79a7824d8e31866b": "c5f71c37065ebfbdc5230c92af93a9a1",
".git/objects/01/2d825c578f3dda4547f85344e9f32dbbf36d0a": "ae3c870ebbc1f07667548821ca67c737",
".git/objects/55/4ccfb7aa39ced38481760b65dbd1382ccf9026": "027dc8046282880f7bc76a45071c171b",
".git/objects/90/4a83ba7b79a8be6bdf0bdd978a565bf053c12c": "7c752d784e7aaf3c78e055bac668bd28",
".git/objects/90/78ff543ca860c2bf3a0e4547116605460d6364": "0e79a2dc3e96aeb7788193fe19eb4943",
".git/objects/bf/284a8efc1d686a29812a21e147a96c4f75d5f5": "e97bf342b0c18b89fa04433bf5f70d96",
".git/objects/a0/19e3917afdeb1cbcfd9d0aa113703293097e0b": "e3fc8d2fcf88eb124a25d9fd7195cc03",
".git/objects/b8/4683328b90e26594d868cdf8fc89944121336b": "bc3aea2c95d54cf1f4bb0fa409c03ed2",
".git/objects/dd/6de0c2bf767ab5b754466db0a92f23caa2f335": "4818b8d7a4e025ee2e5e13aca7f7d8ad",
".git/objects/b6/9b4fb324689a99a27f869a8be79dd3bc9b95e9": "0dc76b9a8d511e223a0d2cc3534f949b",
".git/objects/a9/7297ff7da877f8e1a3e1b85126e38a010bdb24": "b3b0f81a5ee5fc00c142e8cb261c8fc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/965bed6a559185986e333c405d69dd65c718ed": "0b0a59dfaf36802a3c929ae85e37f5da",
".git/objects/f9/a5baa3ed25b7acb60f36eea4d334088bfae4b6": "2d02cb9b8474ce2a1a47bd1d5ff258ba",
".git/objects/f0/2eeed6345d072eccdc4dbfea7db3d6cc5754ac": "3293be2b7e4ef8b129d57380a8c06436",
".git/objects/c5/15a1f3569b76a4d1f088ab79d2dcba1e1b12ce": "202cfe9c295ddb92ed1b6af9ac022578",
".git/objects/c2/ae9a6f23065d3a3dac80822cd4a83617c63645": "3a2d5c3f85e759fe4ffc3504cad0e182",
".git/objects/e9/f04e9a0ac2f0d0298930e3202bef58008a07be": "6779c2313c267dd05bd04f6278b44b71",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/f7deadfc4dcce18a47424e89607ffc5dc4f297": "75ef3b96d2b9d66ade88ca955a5f63a7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/d777dbe178719e8f0b4cccee289e93577af0a2": "5a621f8de25e51b46665c1664bd1c3a7",
".git/objects/4a/9a9d9c345b0f06eb590cb0b582ab1e598961e8": "225e63b0434b6ecc16dd79d6a147bf99",
".git/objects/24/d569e8de532463524255b389ed263e5ff22abd": "1a107752332a17df94e1c54b3caf07a8",
".git/objects/4f/0863f313f70dd915e0f391b6d927f16dfcf958": "829afd344985a9ee4974ad3bed8b9fd2",
".git/objects/71/f61ff1ff7136146a9ab4a04d6ac4c12e43fd9c": "10d1963ebda4c8f3ff630ff110a56398",
".git/objects/1c/b7d8aa5b1c85925fc648ee792bdc93ee19966a": "fcd0df0d9ef32c7f3658433c067efa59",
".git/objects/8b/e928b03a7cf423262326724474a0814d7c760d": "1db87a9ef95bfdb4165a07c42f66fe1c",
".git/objects/13/f598d2ac9104f00651e6f716f2c5f6fbf4975c": "c0b886d03ecef9e4af957d556a6483dd",
".git/objects/7a/36fd7d072aa00f46b85327cae8f39a06c393b5": "7cb0c1d1364c0f9b9d1654c390c7aa57",
".git/objects/22/ee1c405e63cb55bfe3e85df01afd594b865d9e": "32447f491690141863885fb5dd43b505",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a81e1f81940310d21faa6cecc5d0df4",
".git/logs/refs/heads/master": "1a81e1f81940310d21faa6cecc5d0df4",
".git/logs/refs/remotes/origin/master": "bd000933d7aef4fda10dedc9e01fbbb2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a82c3ab231ccf6c2744450bb95b44b83",
".git/refs/remotes/origin/master": "a82c3ab231ccf6c2744450bb95b44b83",
".git/index": "07a154a8f90ea1914c38fc95ec442f6f",
".git/COMMIT_EDITMSG": "84bc3da1b3e33a18e8d5e1bdd7a18d7a",
"assets/AssetManifest.json": "bcebe5d6fa93fc279777ef84b0de7c54",
"assets/NOTICES": "c297bef12a6fba53da57acea2a28d6e9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/bg_test02.jpeg": "0a1e25ffa91c96c97c93c68bb12b208d",
"assets/assets/images/bg_test03.jpeg": "3a9c3fb280453fcf77a10fc4a318cd30",
"assets/assets/images/bg_test04.jpeg": "5fbc0eb724f77cf616fac37c32266a34",
"assets/assets/images/bg_test01.jpeg": "00fcf108dc6446ee6368227e51f82d38"
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
