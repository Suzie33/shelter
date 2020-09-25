const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

gulp.task('default', function(){
  console.log("something");
 });

gulp.task('sass', function(){
  return gulp.src('css/styles.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});