var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {
  return gulp.src('./css/style.scss')
    .pipe(sass({
      compress: true,
      'include css': true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../css/'));
});

gulp.task('watch', function() {
  gulp.watch('**/*.scss', ['build'])
});

gulp.task('default', ['build', 'watch']);
