var Viewer = require('mesh-viewer')
var qs = require('querystring')

var smooth = 'smooth' in qs.parse(
  window.location.search.slice(1)
)

var viewer = Viewer({
    useCellNormals: !smooth
  , meshColor: [1, 1, 1]
  , specular: [0.3, 0.3, 0.3]
  , ambient: [0, 0, 0]
  , clearColor: [0.1, 0.1, 0.1, 1]
})

var mesh

viewer.on('viewer-init', function() {
  mesh = viewer.createMesh(require('./')(2))
  viewer.camera.distance = 3
})

viewer.on('gl-render', function() {

  mesh.draw({
    lightPosition: [
        Math.cos(Date.now() / 1000) * 5
      , Math.sin(Date.now() / 1000) * 5
      , -2
    ]
  })
})
