'use strict';

var path = require('path'),
  gulp = require('gulp'),
  gclean = require('gulp-clean'),
  gconnect = require('gulp-connect'),
  gchanged = require('gulp-changed'),
  gconcat = require('gulp-concat'),
  gless = require('gulp-less'),
  gsourcemaps = require('gulp-sourcemaps'),
  gutil = require('gulp-util'),
  gminifyCss = require('gulp-minify-css'),
  streamCombiner = require('stream-combiner'),
  runSequence = require('run-sequence');

gulp.task('connect', function() {
  return gconnect.server({
    livereload: true,
    port: 8080,
    root: [
      //path.resolve(__dirname, '.tmp'),
      path.resolve(__dirname, 'dist/../../../../../../'),
      __dirname
    ]
  });
});

gulp.task('livereload', ['less-dev'], function() {
  return gulp.src('dist/**')
    .pipe(gconnect.reload());
});

gulp.task('fonts', function() {
  return gulp.src('fonts/**')
    .pipe(gchanged('dist/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
  return gulp.src('images/**')
    .pipe(gchanged('dist/images'))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('less-dev', function() {
  return gulp.src(['less/ui-framework*.less','*.php'])
    .pipe(gsourcemaps.init())
    .pipe(gless())
    .pipe(gsourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
    //.pipe(gconnect.reload());
});

gulp.task('less', function() {
  var combined = streamCombiner(
    gulp.src('less/ui-framework*.less'),
    gless(),
    gulp.dest('dist/css')
  ); // any errors in the above streams will get caught by this listener, instead of being thrown:
  combined.on('error', function(err) {
    gutil.log(err);
  });

  return combined;
});

gulp.task('minify-css', function() {
  return gulp.src('dist/css/*.css')
    .pipe(gminifyCss({ keepBreaks: true }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  //return gulp.watch(['less/**/*.less'], ['less-dev']);
  return gulp.watch(['less/**/*.less'], ['livereload']);
});

/*
gulp.task('watch-livereload', function() {
  return gulp.watch('.tmp/**', ['livereload']);
});

gulp.task('copy', function() {
  return gulp.src('.tmp/**')
    .pipe(gchanged('dist'))
    .pipe(gulp.dest('dist'));
});
*/

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(gclean({force: true}));
});

/*
gulp.task('serve', [
  'dev',
  'connect',
  'watch',
  'watch-livereload'
]);
*/

gulp.task('dev', ['default']);

gulp.task('default', function(done) {
  runSequence('clean',
              'fonts',
              'images',
              'less-dev',
              //'copy',
              'watch',
              'connect',
              done);
});

gulp.task('dist', function(done) {
  runSequence('clean',
              'fonts',
              'images',
              'less',
              'minify-css',
              //'copy',
              done);
});
