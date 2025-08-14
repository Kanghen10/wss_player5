// Stub Service Worker untuk GitHub Pages (no-op)
self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => self.clients.claim());
