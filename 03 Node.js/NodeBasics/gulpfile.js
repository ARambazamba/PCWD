var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var slash = require("slash");

var paths = {
  scss: "./src/sass/**/*.scss",
  dist: "./dist"
};

gulp.task("compile:sass", function() {
  gulp
    .src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(paths.dist));
});

//watch sass

gulp.task("watch:sass", function() {
  gulp.watch(paths.scss, ["compile:sass"]);
});
