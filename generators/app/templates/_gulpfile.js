var batch = require('gulp-batch');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var imageop = require('gulp-image-optimization');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var use = require('postcss-use');
var watch = require('gulp-watch');

gulp.task('default', ['server'], function() {
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

// HTML

gulp.task('html', function() {
  gulp.src('src/html/**/*.html')
    .pipe(htmlhint())
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
        'cssnano'
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
  .pipe(imageop({
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
