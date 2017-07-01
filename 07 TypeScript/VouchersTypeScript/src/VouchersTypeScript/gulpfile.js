var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var traceur = require('gulp-traceur');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var typescript = require('gulp-tsc');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    webroot: "./wwwroot/",
    scriptSource: "./wwwroot/demos/*.js",
    scriptDest: "./wwwroot/js/",
    demos: "./wwwroot/demos/",
    scss: "./wwwroot/sass/**/*.scss",
    scssDest: "./wwwroot/css/"
}

gulp.task('min:js', function () {
    return gulp.src([paths.scriptSource])
        .pipe(concat(paths.scriptDest + "min/site.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task('copy:js', function () {
    return gulp.src([paths.scriptSource])
        .pipe(gulp.dest(paths.scriptDest));
});

gulp.task("both:tasks", ["min:js", "copy:js"]);

gulp.task('compile:sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.scssDest));
});

gulp.task('watch:sass', function () {
    gulp.watch(paths.scss, ['compile:sass']);
});

gulp.task('babel:es5', () => {
    return gulp.src([paths.demos + "es6*.js"])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('es5bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.demos));
});


gulp.task('compile:ts', function() {
    gulp.src(['wwwroot/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('dest/'));
});