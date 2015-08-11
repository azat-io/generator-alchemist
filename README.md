# generator-alchemist [![Build Status](https://secure.travis-ci.org/azat-io/generator-alchemist.png?branch=master)](https://travis-ci.org/azat-io/generator-alchemist)

<img align="right" width="110" height="150" src="https://github.com/azat-io/generator-alchemist/blob/master/images/logo.jpg?raw=true" alt="">

[Yeoman](https://github.com/yeoman/yeoman) generator for development a front-end web app using [Gulp](https://github.com/gulpjs/gulp) and [PostCSS](https://github.com/postcss/postcss) for the build process.

Start your new project in a few seconds!

## Getting Started

To use Alchemist Generator you need to set a few things:

#### [Node.js](https://nodejs.org/)

#### Yo:

```bash
$ npm install -g yo
```

#### Gulp:

```bash
$ npm install -g gulp
```

### Usage

![](https://github.com/azat-io/generator-alchemist/blob/master/images/alchemist.jpg?raw=true)

Download this repository:

```bash
$ git clone https://github.com/azat-io/generator-alchemist.git
```

To install generator-alchemist from npm, run:

```bash
$ npm install -g generator-alchemist
```

Finally, initiate the generator to your project folder:

```bash
$ yo alchemist
```

After installation run gulp

```bash
$ gulp
```

That's all! You can start to work with your project files:

* Write your HTML code in the folder /src/
* Write your CSS code in the folder /src/css/
* Write your JavaScript code in the folder /src/js/
* Put your images to the folder /src/images/

And all of this files will be automatically optimize and paste to your production folder /dist/

Thank's for usage!

## Contents

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

##### [Autoprefixer](https://github.com/postcss/autoprefixer)

Parse CSS and add vendor prefixes to CSS

from:

```css
a {
  display: flex;
}
```

to:

```css
a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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

#### [CSS Nano](https://github.com/ben-eb/cssnano)

Minify your CSS code

#### [Discard Comments](https://github.com/ben-eb/postcss-discard-comments)

Discard comments in your CSS files

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

#### [Nested](https://github.com/postcss/postcss-nested)

Unwrap nested rules like how Sass does it.

from:

```css
.phone {
    &_title {
        width: 500px;
        @media (max-width: 500px) {
            width: auto;
        }
        body.is_dark & {
            color: white;
        }
    }
    img {
        display: block;
    }
}
```

to:

```css
.phone_title {
    width: 500px;
}
@media (max-width: 500px) {
    .phone_title {
        width: auto;
    }
}
body.is_dark .phone_title {
    color: white;
}
.phone img {
    display: block;
}
```

#### [PreCSS](https://github.com/jonathantneal/precss)

Use Sass-like markup in your CSS files. Enjoy a familiar syntax with variables, mixins, conditionals, and other goodies.

from:

```css
$blue: #056ef0;
$column: 200px;

.menu_link {
  background: $blue;
  width: $column;
}
```

to:

```css
.menu_link {
  background: #056ef0;
  width: 200px;
}
```

etc.

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

### Images

Upload images to the folder:

```bash
/src/images/
```

And images will be automatically minify with Gulp plugin [Imagemin](https://github.com/sindresorhus/gulp-imagemin) and puts to the folder /dist/images/


## Author

Azat S.

Follow me:

[GitHub](https://github.com/azat-io)

[Twitter](https://twitter.com/azat_io)

[FaceBook](https://facebook.com/azatklevec)

## License

MIT
