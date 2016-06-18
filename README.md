# React Fela

Official React bindings for Fela.

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/react-fela.svg?branch=master">
<a href="https://codeclimate.com/github/rofrischmann/react-fela/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/react-fela/badges/coverage.svg"></a>
<img alt="npm downloads" src="https://img.shields.io/npm/dm/react-fela.svg">
<img alt="gzipped size" src="https://img.shields.io/badge/gzipped-~1.0kb-brightgreen.svg">


This package only includes React bindings for [ Fela](http://github.com/rofrischmann/fela). <br>
It assumes you already know about Fela and how to use it.

> [Learn about Fela!](http://github.com/rofrischmann/fela)


## Installation
```sh
npm i --save react-fela
```

Assuming you are using [npm](https://www.npmjs.com) as your package mananger you can basically just `npm install` all packages. <br>
Otherwise we also provide [UMD](https://github.com/umdjs/umd) builds for each package within the `dist` folder. You can easily use them via [npmcdn](https://npmcdn.com/).
> **Caution**: You need to include both React and Fela on your own as well.

```HTML
<!-- Development build (with warnings)  -->
<script src="https://npmcdn.com/react-fela@2.0.0/dist/react-fela.js"></script>
<!-- Production build (minified)  -->
<script src="https://npmcdn.com/react-fela@2.0.0/dist/react-fela.min.js"></script>
```

## Documentation
#### [API reference](docs/api)
* [`<Provider renderer [mountNode]>`](docs/api/Provider.md)
* [`connect(mapStylesToProps)`](docs/api/connect.md)

## Usage
For more information and best practices on how to effectively use this package, please check out the main [Fela documention](http://fela.js.org). There you will also find some usage examples. This package only contains the pure API reference documentation.

## License
Fela is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).
