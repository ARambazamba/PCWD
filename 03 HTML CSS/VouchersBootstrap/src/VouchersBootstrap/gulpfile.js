var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    webroot: "./wwwroot/",
    scss: "./wwwroot/sass/**/*.scss",
    scssDest: "./wwwroot/css/"
}

paths.scriptSouce = "./Scripts/*";
paths.scriptDest = paths.webroot + "js/";


gulp.task('min:js', function () {
    return gulp.src([paths.scriptSouce])
        .pipe(concat(paths.scriptDest + "min/site.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task('copy:js', function () {
    return gulp.src([paths.scriptSouce])
        .pipe(gulp.dest(paths.scriptDest));
});

gulp.task("both:tasks", ["min:js", "copy:js"]);

gulp.task('compile:sass', function () {
    gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(paths.scssDest));
});

gulp.task('watch:sass',function() {
    gulp.watch(paths.scss, ['compile:sass']);
});

