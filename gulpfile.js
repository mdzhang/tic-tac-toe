var gulp = require('gulp');

var less = require('gulp-less');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// compile less to css
gulp.task('less', function() {
  return gulp.src('styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/build/styles'));
});

// browserify js files
gulp.task('js', function() {
  return browserify('./scripts/core.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/build/scripts'));
});

// watch files for changes
gulp.task('watch', function() {
  gulp.watch('styles/*.less', ['less']);
  gulp.watch('scripts/*.js', ['js']);
});

// default task
gulp.task('default', ['less', 'js', 'watch']);