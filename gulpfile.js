let gulp = require("gulp");
let sass = require("gulp-sass");
let server = require("gulp-webserver");

gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task("watch", function() {
    return gulp.watch("./src/scss/*.scss", gulp.series("sass"))
})


gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            open: true,

        }));
});