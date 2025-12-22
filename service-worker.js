self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("fetch", () => {
  // always fetch latest version
});
