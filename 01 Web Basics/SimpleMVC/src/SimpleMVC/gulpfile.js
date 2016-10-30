var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

var paths = {
    webroot: "./wwwroot/"
}

paths.Css = "./CSS/*";
paths.Img = "./Images/*";

paths.CssDest = paths.webroot + "css/";
paths.ImgDest = paths.webroot + "images/";

gulp.task('copy:css', function () {
    return gulp.src([paths.Css])
        .pipe(gulp.dest(paths.CssDest));
});

gulp.task('copy:img', function () {
    return gulp.src([paths.Img])
        .pipe(gulp.dest(paths.ImgDest));
});
