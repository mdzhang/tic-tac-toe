var gulp = require('gulp');

var less = require('gulp-less');

// compile less to css
gulp.task('less', function() {
  return gulp.src('styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('styles/'));
});

// watch files for changes
gulp.task('watch', function() {
  gulp.watch('styles/*.less', ['less']);
});

// default task
gulp.task('default', ['less', 'watch']);