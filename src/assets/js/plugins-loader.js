export function loadPlugins() {
  return Promise.all([
    import('./plugins.js'),
    import('./main.js')
  ])
    .then(([plugins, main]) => {
      if (plugins && typeof plugins.initPlugins === 'function') {
        plugins.initPlugins()
      }
      if (main && typeof main.initMain === 'function') {
        main.initMain()
      }
      console.log("✅ Plugins initialized (after route change)")
    })
    .catch(err => {
      console.error("JS load error:", err)
    })
}
