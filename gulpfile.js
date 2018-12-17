let gulp = require("gulp");
let sass = require("gulp-sass");
let server = require("gulp-webserver");
let url = require("url");
let path = require("path");
let fs = require("fs");

gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task("watch", function() {
    return gulp.watch("./src/scss/*.scss", gulp.series("sass"))
})


gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(server({
            open: true,
            port: 9009,
            middleware: function(req, res, next) {
                let pathname = url.parse(req.url).pathname;
                if (pathname == "/api/list") {
                    res.end(JSON.stringify({ "code": 0, data: list }))
                } else if (pathname == "/favicon.ico") {
                    return
                } else {
                    pathname = pathname == "/" ? "index.html" : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                }
            }
        }));
});