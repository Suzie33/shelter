const { src, dest, task, series, watch, parallel } = require("gulp");
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

task('sass', function(){
  return src('css/styles.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(dest('./css'));
});

task('watch', function(){
  return watch('css/**/*.scss', series('sass'));
});