// Self-destroying service worker.
//
// myShop 4 moved to https://myshop-blueheart.vercel.app (myShop 4.1). Phones that
// installed the old PWA still run the old Workbox service worker, which serves the
// old app from its precache. The browser re-checks /sw.js for updates, installs
// this file in its place, and this worker then removes itself:
// clear every cache -> unregister -> reload open windows from the network, where
// they get the redirect page.
//
// This file MUST stay at /sw.js (the old worker's URL) and must never be
// redirected, otherwise installed copies will not pick up this update.

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      for (const client of windows) {
        // Not awaited: the reload must not hold up activation.
        client.navigate(client.url).catch(() => {})
      }
    })(),
  )
})
