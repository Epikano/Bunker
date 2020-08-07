const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const cleanCSS = require('gulp-clean-css'); 

const cssFiles = [
    './css/normalize.css',
    './css/style.css'
]

function style() {
    return gulp.src("./scss/**/*.scss")
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream())
}

function minification() {
    return gulp.src(cssFiles)
            .pipe(cleanCSS({level: 2}))
            .pipe(gulp.dest('./css'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch("./scss/**/*.scss", style);
    gulp.watch("./*.html").on('change', browserSync.reload);
}

exports.style = style;
exports.minification = minification;
exports.watch = watch;

// npm init
// npm i --save-dev gulp gulp-sass browser-sync gulp-clean-css