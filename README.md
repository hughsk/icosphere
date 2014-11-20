# icosphere [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Generates icosphere meshes of varying levels of complexity – implementation
sourced from [this article](http://blog.andreaskahler.com/2009/06/creating-icosphere-mesh-in-code.html).

* [demo with face normals](http://hughsk.io/icosphere)
* [demo with vertex normals](http://hughsk.io/icosphere?smooth)

[![icosphere](http://imgur.com/7PwoXuz.png)](http://hughsk.io/icosphere)

## Usage

[![NPM](https://nodei.co/npm/icosphere.png)](https://nodei.co/npm/icosphere/)

### mesh = icosphere(subdivisions)

Creates a new icosphere mesh object. You'll want to keep `subdivisions` within
the range of 0 and 5 or it starts to get really costly. The mesh object has
the following properties:

* `cells`: an indexed list of each triangle's positions.
* `positions`: a list of positions for each vertex.

### See Also

* [Creating an icosphere mesh in code](http://blog.andreaskahler.com/2009/06/creating-icosphere-mesh-in-code.html)
* [gl-simplicial-complex](https://github.com/mikolalysenko/gl-simplicial-complex)
* [conway-hart](https://github.com/mikolalysenko/conway-hart)
* [mesh-viewer](https://github.com/mikolalysenko/mesh-viewer)
* [TrimeshJS](https://github.com/mikolalysenko/TrimeshJS)
* [unindex-mesh](https://github.com/hughsk/unindex-mesh)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/icosphere/blob/master/LICENSE.md) for details.
