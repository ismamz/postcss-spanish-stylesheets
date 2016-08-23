# PostCSS Spanish Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Spanish Stylesheets :es:.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ismamz/postcss-spanish-stylesheets.svg
[ci]:      https://travis-ci.org/ismamz/postcss-spanish-stylesheets

```css
.foo {
    redondeado: 3px;
    fondo: #fff;
    ancho: 300px;
    alto: 200px;
    flota: izquierda;
    arriba: 10px;
    abajo: 0px;
    izquierda: 100px;
    derecha: 100px;
    espaciado: -1px;
    puntero: manito !importantisimo;
    text-transform: mayuscula;
}
```

```css
.foo {
    border-radius: 3px;
    background: #fff;
    width: 300px;
    height: 200px;
    float: left;
    top: 10px;
    bottom: 0px;
    left: 100px;
    right: 100px;
    letter-spacing: -1px;
    cursor: pointer !important;
    text-transform: uppercase;
}
```

#### [See the complete list of properties and values translated](https://github.com/ismamz/postcss-spanish-stylesheets/blob/master/index.js)


## Usage

```js
postcss([ require('postcss-spanish-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.


## En Español :es:
- [Escribir CSS en Español](http://isma.uy/escribir-css-espanol/)


## License

MIT © [ismamz](http://isma.uy)
