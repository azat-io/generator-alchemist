var autoprefixer = require('autoprefixer-core');
var byebye = require('css-byebye');
var clearfix = require('postcss-clearfix');
var colorshort = require('postcss-color-short');
var cssnano = require('cssnano');
var focus = require('postcss-focus');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var imagemin = require('gulp-imagemin');
var mediaminmax = require('postcss-media-minmax');
var pngquant = require('imagemin-pngquant');
var postcss = require('gulp-postcss');
var precss = require('precss');
var pxtorem = require('postcss-pxtorem');
var short = require('postcss-short');
var size = require('postcss-size');
var uglify = require('gulp-uglify')

gulp.task('default', function() {
  gulp.watch('src/html/**', function(event) {
    gulp.run('html');
  });
  gulp.watch('src/css/**', function(event) {
    gulp.run('postcss');
  });
  gulp.watch('src/js/**', function(event) {
    gulp.run('js');
  });
  gulp.watch('dist/images/**', function(event) {
    gulp.run('images');
  });
});


// HTML

gulp.task('html', function() {
  gulp.src('src/html/**/*.html')
      .pipe(htmlhint())
    .pipe(gulp.dest('dist/'))
});


// PostCSS

gulp.task('css', function () {
    var processors = [
        colorshort,
        focus,
        mediaminmax,
        precss,
        short,
        size,
        clearfix,
        byebye,
        pxtorem,
        autoprefixer({browsers: ['last 5 version', 'ie 8']}),
        cssnano
    ];
    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css/'));
});

// JavaScript

gulp.task('js', function () {
    return gulp.src('src/js/*')
          .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Image files

gulp.task('images', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});
