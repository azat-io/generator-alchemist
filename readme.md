# generator-alchemist

<img align="right" width="110" height="150" src="https://cloud.githubusercontent.com/assets/5698350/14023631/4b47c384-f1f6-11e5-931b-2d3849eaa86e.jpg?raw=true" alt="">

[![npm version](https://badge.fury.io/js/generator-alchemist.svg)](http://badge.fury.io/js/generator-alchemist)
[![Build Status](https://secure.travis-ci.org/azat-io/generator-alchemist.png?branch=master)](https://travis-ci.org/azat-io/generator-alchemist)
[![Dependency Status](https://david-dm.org/azat-io/generator-alchemist.svg)](https://david-dm.org/azat-io/generator-alchemist)

[Yeoman](https://github.com/yeoman/yeoman) generator for development a front-end web app using [Gulp](https://github.com/gulpjs/gulp) and [PostCSS](https://github.com/postcss/postcss) for the build process.

Start your new project in a few seconds!

## Getting Started

To use Alchemist Generator you need to set a few things:

#### [Node.js](https://nodejs.org/)

#### Yo:

```bash
$ sudo npm install -g yo
```

#### Gulp:

```bash
$ sudo npm install -g gulp
```

#### BrowserSync:

```bash
$ sudo npm install -g browser-sync
```

## Usage

To install generator-alchemist from npm, run:

```bash
$ sudo npm install -g generator-alchemist
```

Finally, initiate the generator to your project folder:

```bash
$ yo alchemist
```

Jade language is optional in Alchemist generator. Put Y or N to use it or not.

After installation run gulp

```bash
$ gulp
```

That's all! You can start to work with your project files:

* Write your Jade / HTML code in the folder /src/jade/ or /src/html/
* Write your CSS code in the folder /src/css/
* Write your JavaScript code in the folder /src/js/
* Put your images to the folder /src/images/

And all of this files will be automatically optimize and paste to your production folder /dist/

Thank's for usage!

## Contents

![](https://cloud.githubusercontent.com/assets/5698350/14023678/86b82ecc-f1f6-11e5-98e1-e607ce946d41.jpg)

### Jade (optional)

The use of language Jade is optional. If you want to use it, select the option to install the program.

Write your code in the folder /src/jade/ and it will automatically be compiled into html.

### HTML

#### [HTML Hint](https://github.com/bezoerb/gulp-htmlhint)

Validate your HTML code.

### CSS

##### [Normalize CSS](https://github.com/necolas/normalize.css)

##### Grid System

```html
<div class="container">
  <div class="row">
    <div class="col-8">
      Content block
    </div>
    <div class="col-4">
      Right sidebar
    </div>
  </div>
</div>
```

### PostCSS

#### [Clearfix](https://github.com/seaneking/postcss-clearfix)

Adds fix and fix-legacy attributes to the clear property, for self-clearing of children

from:

```css
.foo {
  clear: fix;
}

.bar {
  clear: fix-legacy;
}
```

to:

```css
.foo:after{
  content: '';
  display: table;
  clear: both;
}

.bar {
    clear: fix-legacy;
}

.bar:before,
.bar:after {
  content: '';
  display: table;
}

.bar:after {
  clear: both;
}

.bar {
  zoom: 1;
}
```

#### [Color Short](https://github.com/andrepolischuk/postcss-color-short)

Short CSS colors

from:

```css
.hello {
  border-bottom: 1px solid rgb(200);
  background: #20;
  color: #f;
  box-shadow: 0 1px 5px rgba(0, 0.5);
}
```

to:

```css
.hello {
  border-bottom: 1px solid rgb(200, 200, 200);
  background: #202020;
  color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}
```

#### [CSS Mqpacker](https://github.com/hail2u/node-css-mqpacker)

Pack same CSS media query rules into one media query rule.

#### [CSS Nano](https://github.com/ben-eb/cssnano)

Best way to minify your CSS code

#### [CSS Next](https://github.com/cssnext/cssnext)

Add vendor prefixes to CSS. And allow to use tomorrow's CSS syntax, today. Some examples:

CSS Custom Properties for cascading variables.

from:

```css
:root {
  --color: red;
}

div {
  color: var(--color);
}
```

to:

div {
  color: red;
}

Transform W3C CSS Custom Media Queries to more compatible CSS.

from:

```css
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
  /* styles for small viewport */
}
```

to:

```css
@media (max-width: 30em) {
  /* styles for small viewport */
}
```

Writing simple and graceful media queries.

from:

```css
@media screen and (width >= 500px) and (width <= 1200px) {
  .bar {
    display: block;
  }
}
```

to:

```css
@media screen and (min-width: 500px) and (max-width: 1200px) {
  .bar {
    display: block;
  }
}
```

Transform W3C CSS color function to more compatible CSS.

from:

```css
body {
  background: color(red a(90%))
}
to:
```


```css
body {
  background: rgba(255, 0, 0, 0.9)
}
```

And much more. A full list of features you can found [here](http://cssnext.io/usage/).

#### [Focus](https://github.com/postcss/postcss-focus)

Add :focus selector to every :hover

from:

```css
.button:hover {
  background: red;
}
```

to:

```css
.button:hover, .button:focus {
  background: red;
}
```

#### [PreCSS](https://github.com/jonathantneal/precss)

Use Sass-like markup in your CSS files. Enjoy a familiar syntax with variables, mixins, conditionals, and other goodies.

from:

```css
$blue: #056ef0;
$column: 200px;

header {
  background: $blue;
  width: $column;
    h1 {
      font-size: 18px;
    }
}
```

to:

```css
header {
  background: #056ef0;
  width: 200px;
}

header h1 {
  font-size: 18px;
}
```

etc.

#### [PxtoRem](https://github.com/cuth/postcss-pxtorem)

A plugin for PostCSS that generates rem units from pixel units.

from:

```css
p {
  font-size: 16px;
}
```

to:

```css
p {
  font-size: 1rem;
}
```

#### [Responsive Images](https://github.com/azat-io/postcss-responsive-images)

PostCSS plugin for making responsive images.

from:

```css
.boo img {
  image-size: responsive;
}
```

to:

```css
.boo img {
  max-width:100%;
  height:auto;
  display:block;
}
```

#### [Short](https://github.com/jonathantneal/postcss-short)

Write more concise and often more readable style sheets, saving time and energy.

from:

```css
.banner {
  position: fixed 0 0 *;
  size: 100% 48px;
}

.section {
  margin: 40px;
  text: bold center uppercase dimgrey 1.25em 1.5 .05em;
}

.section.inset {
  margin: * auto;
}
```

to:

```css
.banner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 48px;
}

.section {
  margin: 40px;
  color: dimgrey;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25em;
  line-height: 1.5;
  letter-spacing: .05em;
}

.section.inset {
  margin-right: auto;
  margin-left: auto;
}
```

#### [Size](https://github.com/postcss/postcss-size)

Plugin for size shortcut to set width and height properties

from:

```css
.two {
    size: 20px 10px;
}
.one {
    size: 10px;
}
```

to:

```css
.two {
    width: 20px;
    height: 10px;
}
.one {
    width: 10px;
    height: 10px;
}
```

### JavaScript

#### [Uglify](https://github.com/terinjokes/gulp-uglify)

Minify JavaScript files.

### Images

Upload images to the folder:

```bash
/src/images/
```

And images will be automatically minify with Gulp plugin [Image Optimization](https://github.com/firetix/gulp-image-optimization) and puts to the folder /dist/images/

### Server

You can use local webserver with [BrowserSync](https://github.com/Browsersync/browser-sync) here:

```bash
http://localhost:3000
```

## License

MIT
