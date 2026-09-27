# myShop 4 (retired)

myShop 4 moved to **myShop 4.1**: https://myshop-blueheart.vercel.app

This project now deploys only a redirect page, so old links and home-screen
icons land on the new app.

## What is deployed

- `index.html` - Hebrew (RTL) page "myShop עבר לכתובת חדשה". Redirects to
  4.1 after 2 seconds (`location.replace`), with a manual button.
- `vercel.json` - rewrites every path to that page.
- `public/sw.js` - self-destroying service worker. Phones with the old PWA
  installed pick it up as an update of the old worker; it clears all caches,
  unregisters itself and reloads open windows. **It must stay at `/sw.js` and
  must never be redirected**, otherwise installed copies keep serving the old
  app from cache.

## Restoring the old app

The last version of the full app is tagged `backup/pre-redirect-4.1`.
