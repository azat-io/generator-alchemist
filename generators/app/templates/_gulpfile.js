var autoprefixer = require('autoprefixer-core');
var colorshort = require('postcss-color-short');
var cssnano = require('cssnano');
var discardcomments = require('postcss-discard-comments');
var focus = require('postcss-focus');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var nested = require('postcss-nested');
var notify = require('gulp-notify');
var pngquant = require('imagemin-pngquant');
var postcss = require('gulp-postcss');
var precss = require('precss');
var short = require('postcss-short');
var size = require('postcss-size');
var uglify = require('gulp-uglify')

gulp.task('default', function() {
  gulp.watch('src/**', function(event) {
    gulp.run('notify');
    gulp.run('html');
    gulp.run('css');
    gulp.run('js');
    gulp.run('images');
  });
});

gulp.task('notify', function() {
  gulp.src('src/*')
    .pipe(notify('Done!'));
});


// HTML

gulp.task('html', function() {
  gulp.src('src/**/*.html')
      .pipe(htmlhint())
    .pipe(gulp.dest('dist/'))
});


// PostCSS

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 5 version', 'ie 8']}),
        colorshort,
        cssnano,
        discardcomments,
        focus,
        nested,
        precss,
        short,
        size
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
