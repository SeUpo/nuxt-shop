export default function (ctx) {
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('storeCache', JSON.stringify(ctx.store.state))
  })
  const storeCache = localStorage.getItem('storeCache')
  if (storeCache) {
    ctx.store.replaceState(JSON.parse(storeCache))
  }
}
