const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')

gulp.task('default', ['css'], () => {
  return gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
})
gulp.task('css', () => {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'))
})
