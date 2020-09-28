const { src, dest, task, series, watch, parallel } = require("gulp");
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

task('sass', function(){
  return src('css/styles.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(dest('./css'))
    .pipe(reload({ stream: true }));
});

task('html', () => {
  return src('pages/**/*.html')
    .pipe(reload({ stream: true }));
})

task('server', () => {
  browserSync.init({
     server: {
           baseDir: "./"
     },
     open: false
 });
});

task('watch', () => {
  watch('css/**/*.scss', series('sass'));
  watch('pages/**/*.html', series('html'))
});

task('default', 
  series(parallel('watch', 'server'))
);