# generator-alchemist [![Build Status](https://secure.travis-ci.org/azat-io/generator-alchemist.png?branch=master)](https://travis-ci.org/azat-io/generator-alchemist)

![](https://github.com/azat-io/generator-alchemist/blob/master/alchemist.jpg?raw=true)

[Yeoman](https://github.com/yeoman/yeoman) generator for development a front-end web app using [Gulp](https://github.com/gulpjs/gulp) and [PostCSS](https://github.com/postcss/postcss) for the build process.

## Getting Started

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-alchemist from npm, run:

```bash
npm install -g generator-alchemist
```

Finally, initiate the generator:

```bash
yo alchemist
```

### Contents


#### CSS

[Normalize CSS](https://github.com/necolas/normalize.css)

Grid System

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

#### PostCSS

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
dist/images/
```

And images will be automatically minify with Gulp plugin [Imagemin](https://github.com/sindresorhus/gulp-imagemin)


## Author

Azat S.

* [GitHub](https://github.com/azat-io)
* [Twitter](https://twitter.com/azat_io)
* [FaceBook](https://facebook.com/azatklevec)

## License

MIT
