var gulp = require('gulp');

var less = require('gulp-less');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var slim = require('gulp-slim');

// compile slim to html
gulp.task('slim', function() {
  return gulp.src('public/pages/index.slim')
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest('public/build'));
});

// compile less to css
gulp.task('less', function() {
  return gulp.src('public/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/build/styles'));
});

// browserify js files
gulp.task('js', function() {
  return browserify('./src/browser/core.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/build/scripts'));
});

// watch files for changes
gulp.task('watch', function() {
  gulp.watch('public/pages/*.slim', ['slim']);
  gulp.watch('public/styles/*.less', ['less']);
  gulp.watch('src/*.js', ['js']);
});

// default task
gulp.task('default', ['slim', 'less', 'js', 'watch']);