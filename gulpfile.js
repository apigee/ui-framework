'use strict';

var path = require('path'),
  gulp = require('gulp'),
  gconnect = require('gulp-connect'),
  gchanged = require('gulp-changed'),
  gless = require('gulp-less'),
  gutil = require('gulp-util'),
  gminifyCss = require('gulp-minify-css'),
  streamCombiner = require('stream-combiner'),
  runSequence = require('run-sequence');

gulp.task('connect', function() {
  return gconnect.server({
    livereload: true,
    root: [
      path.resolve(__dirname, '.tmp'),
      __dirname
    ]
  });
});

gulp.task('livereload', function() {
  return gulp.src('.tmp/dist/**')
    .pipe(gconnect.reload());
});

gulp.task('fonts', function() {
  return gulp.src('fonts/**')
    .pipe(gchanged('.tmp/dist/fonts'))
    .pipe(gulp.dest('.tmp/dist/fonts'));
});

gulp.task('images', function() {
  return gulp.src('images/**')
    .pipe(gchanged('.tmp/dist/images'))
    .pipe(gulp.dest('.tmp/dist/images'));
});

gulp.task('less', function() {
  var combined = streamCombiner(
    gulp.src('less/dist/*.less'),
    gless(),
    gulp.dest('.tmp/dist/css')
  );

  // any errors in the above streams
  // will get caught by this listener,
  // instead of being thrown:
  combined.on('error', function(err) {
    gutil.log(err);
  });

  return combined;
});

gulp.task('minify-css', function() {
  return gulp.src('.tmp/dist/css/*.css')
    .pipe(gminifyCss({ keepBreaks: true }))
    .pipe(gulp.dest('.tmp/dist/css'));
});

gulp.task('watch', function() {
  return gulp.watch('less/**/*.less', ['less']);
});

gulp.task('watch-livereload', function() {
  return gulp.watch('.tmp/dist/**', ['livereload']);
});

gulp.task('copy', function() {
  return gulp.src('.tmp/dist/**')
    .pipe(gchanged('dist'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', [
  'fonts',
  'images',
  'less'
]);

gulp.task('serve', [
  'build',
  'connect',
  'watch',
  'watch-livereload'
]);

gulp.task('dist', function(done) {
  runSequence('build',
              'minify-css',
              'copy',
              done);
});
