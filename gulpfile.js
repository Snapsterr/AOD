let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("scss", function() {
  return gulp
    .src("source/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("/source/css"));
});

gulp.task("watch", function() {
  gulp.watch("source/scss/**/*.scss", gulp.parallel("scss"));
});
