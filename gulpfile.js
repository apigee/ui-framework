'use strict';

var path = require('path'),
  gulp = require('gulp'),
  gconnect = require('gulp-connect'),
  gless = require('gulp-less'),
  gwatch = require('gulp-watch'),
  gutil = require('gulp-util'),
  gminifyCss = require('gulp-minify-css'),
  streamCombiner = require('stream-combiner');

gulp.task('serve', function() {
  gconnect.server({
    livereload: true,
    root: [
      __dirname,
      path.resolve(__dirname, '.tmp')
    ]
  });
});

gulp.task('livereload', function() {
  gulp.src(['.tmp/dist/css/*.css'])
    .pipe(gwatch())
    .pipe(gconnect.reload());
});

gulp.task('fonts', function() {
  gulp.src('fonts/**')
    .pipe(gulp.dest('.tmp/dist/fonts'));
});

gulp.task('images', function() {
  gulp.src('images/**')
    .pipe(gulp.dest('.tmp/dist/images'));
});

gulp.task('less', function() {
  var combined = streamCombiner(
    gulp.src('less/ui-framework*.less'),
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

gulp.task('watch', function() {
  gulp.watch('less/**/*.less', ['less']);
});

gulp.task('minify-css', function() {
  gulp.src('.tmp/dist/css/*.css')
    .pipe(gminifyCss({ keepBreaks: true }))
    .pipe(gulp.dest('.tmp/dist/css'));
});

gulp.task('copy', function() {
  gulp.src('.tmp/dist/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('test', [
  'fonts',
  'images',
  'less',
  'serve',
  'livereload',
  'watch'
]);

gulp.task('dist', [
  'fonts',
  'images',
  'less',
  'minify-css',
  'copy'
]);
