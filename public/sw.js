// ============================================================
// DAC Service Worker — Offline-first caching
// ============================================================
// Bump this version when you deploy to clear old caches.
// The browser detects sw.js changed → installs new SW →
// activate event wipes stale caches → next visit is fresh.
const CACHE_VERSION = "dac-v4";

// App shell pages to precache on install so the app works
// offline even if the user only visited once while online.
const PRECACHE_URLS = ["/", "/exam"];

// ---- INSTALL ------------------------------------------------
// Precache the app shell pages and their critical assets.
// skipWaiting() tells the new SW to take over immediately.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// ---- ACTIVATE -----------------------------------------------
// Delete any caches that don't match the current version.
// This is how deploys bust stale assets.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  // Claim all open tabs so the new SW serves them immediately
  self.clients.claim();
});

// ---- FETCH --------------------------------------------------
// Three strategies based on request type:
//
// 1. _next/static/ (hashed build assets) → Cache-first
//    These filenames contain a content hash so they're immutable.
//    Serve from cache instantly; only fetch on first encounter.
//
// 2. Navigation (HTML pages) → Network-first with offline fallback
//    Try the network. If offline, serve cached page.
//    If that specific page was never cached, serve the cached "/"
//    app shell — since every page is "use client", the client
//    router re-renders the correct route once JS hydrates.
//
// 3. Everything else (other JS, CSS, images, fonts, RSC payloads)
//    → Stale-while-revalidate
//    Serve from cache instantly. Update the cache in the background.
//    If not cached and offline, fail silently.
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests — let POST/PUT/etc pass through
  if (request.method !== "GET") return;

  // Skip chrome-extension, devtools, etc.
  if (!request.url.startsWith("http")) return;

  const url = new URL(request.url);

  // ---- Strategy 1: Cache-first for immutable build assets ----
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.open(CACHE_VERSION).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // ---- Strategy 2: Network-first for page navigations ----
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(request, clone));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/"))
        )
    );
    return;
  }

  // ---- Strategy 3: Stale-while-revalidate for everything else ----
  event.respondWith(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            cache.put(request, response.clone());
            return response;
          })
          .catch(() => cached); // offline: silently fall back to cache

        return cached || networkFetch;
      })
    )
  );
});
