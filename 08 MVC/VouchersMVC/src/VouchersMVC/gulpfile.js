var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var traceur = require('gulp-traceur');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

var paths = {
    webroot: "./wwwroot/"
}

paths.dataRequest = "./Scripts/*";
paths.jsDest = paths.webroot + "js/";
es6Path = 'es6/*.js';
compilePath = 'es6/compiled';

gulp.task('min:js', function () {
    return gulp.src([paths.dataRequest])
        .pipe(concat(paths.jsDest + "min/site.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task('copy:js', function () {
    return gulp.src([paths.dataRequest])
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task("both:tasks", ["min:js", "copy:js"]);