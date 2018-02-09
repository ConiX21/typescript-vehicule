var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var pump = require('pump');
var tsProject = ts.createProject("tsconfig.json");

gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/js/*.js')
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('bundle.js'))
        .pipe(uglify()),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist/js"));
});


gulp.task("default", function(){
  gulp.watch("./src/**/*.ts", ["ts", "compress"])
});

