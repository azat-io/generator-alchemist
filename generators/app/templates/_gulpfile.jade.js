var batch = require('gulp-batch');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var clearFix = require('postcss-clearfix');
var colorShort = require('postcss-color-short');
var cssMqpacker = require('css-mqpacker');
var cssNano = require('cssnano');
var cssNext = require('postcss-cssnext');
var discardComments = require('postcss-discard-comments');
var focus = require('postcss-focus');
var gulp = require('gulp');
var htmlHint = require('gulp-htmlhint');
var imageOp = require('gulp-image-optimization');
var jade = require('gulp-jade');
var postcss = require('gulp-postcss');
var precss = require('precss');
var px2Rem = require('postcss-pxtorem');
var responsiveImages = require('postcss-responsive-images');
var short = require ('postcss-short');
var size = require('postcss-size');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('default', ['server'], function() {
  gulp.watch('src/jade/**', function(event) {
    gulp.run('jade');
  });
  gulp.watch('src/html/**', function(event) {
    gulp.run('html');
  });
  gulp.watch('src/css/**', function(event) {
    gulp.run('postcss');
  });
  gulp.watch('src/js/**', function(event) {
    gulp.run('js');
  });
  gulp.watch('src/images/**/*', batch(function (events, done) {
      gulp.start('images', done);
  }));
});

// Jade

gulp.task('jade', function() {
  gulp.src('src/jade/**/*.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest('src/html/'))
});

// HTML

gulp.task('html', function() {
  gulp.src('src/html/**/*.html')
    .pipe(htmlHint())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

// PostCSS

gulp.task('postcss', function () {
  var processors = [
    use({
      modules:[
        'postcss-short',
        'postcss-color-short',
        'postcss-focus',
        'precss',
        'postcss-size',
        'postcss-clearfix',
        'postcss-pxtorem',
        'postcss-cssnext',
        'css-mqpacker',
        'postcss-discard-comments',
        'cssnano',
        'postcss-browser-reporter'
      ]
    }),
  ];
  return gulp.src('src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
});

// JavaScript

gulp.task('js', function () {
  return gulp.src('src/js/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Image files

gulp.task('images', function(cb) {
  gulp.src(['src/images/**/*'])
  .pipe(imageOp({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  }))
  .pipe(clean())
  .pipe(gulp.dest('dist/images')).on('end', cb).on('error', cb)
  .pipe(browserSync.stream());
});

// Server

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    },
    open: false
  });
});
