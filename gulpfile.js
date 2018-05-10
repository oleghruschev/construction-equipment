var gulp = require('gulp');

var sass = require('gulp-sass'),
	concatCss = require('gulp-concat-css'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch');
	server = require('gulp-server-livereload');

gulp.task('sass', function(){
  return gulp.src('css/scss/*.scss')
 .pipe(sass())
 .pipe(gulp.dest('css/'))
});

gulp.task('concat-css', function () {
  return gulp.src('css/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('build/'));
});

gulp.task('concat-js', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/'));
});
 
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch', function() {
	gulp.watch('css/scss/*.scss', ['sass']);
	gulp.watch('css/**/*.css', ['concat-css']);
	gulp.watch('./js/*.js', ['concat-js']);
});
