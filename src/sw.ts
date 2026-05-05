/// <reference lib="webworker" />

import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'

declare const self: ServiceWorkerGlobalScope

self.skipWaiting()
clientsClaim()

// Populated by vite-plugin-pwa (InjectManifest).
precacheAndRoute(self.__WB_MANIFEST)

