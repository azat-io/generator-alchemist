var autoprefixer = require('autoprefixer');
var center = require('postcss-center');
var clearfix = require('postcss-clearfix');
var colorshort = require('postcss-color-short');
var connect = require('gulp-connect');
var cssmqpacker = require('css-mqpacker');
var cssnano = require('cssnano');
var cssnext = require("cssnext");
var focus = require('postcss-focus');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var imageop = require('gulp-image-optimization');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var precss = require('precss');
var pxtorem = require('postcss-pxtorem');
var short = require('postcss-short');
var size = require('postcss-size');
var uglify = require('gulp-uglify')

gulp.task('default', function() {
  gulp.run('server');
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
    .pipe(connect.reload());
});

// PostCSS

gulp.task('postcss', function () {
  var processors = [
    colorshort,
    focus,
    center,
    precss,
    short,
    size,
    clearfix,
    pxtorem,
    cssnext,
    cssmqpacker,
    autoprefixer({ browsers: ['last 2 version'] }),
    cssnano
  ];
  return gulp.src('src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload());
});

// JavaScript

gulp.task('js', function () {
    return gulp.src('src/js/*')
          .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

// Image files

gulp.task('images', function(cb) {
  gulp.src(['src/images/**/*.png','src/images/**/*.jpg','src/images/**/*.gif','src/images/**/*.jpeg'])
  .pipe(imageop({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest('dist/images')).on('end', cb).on('error', cb);
});

// Server

gulp.task('server', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});
