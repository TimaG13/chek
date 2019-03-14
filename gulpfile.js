var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    pump        = require('pump'),
    minifyCSS   = require('gulp-minify-css'),
    prefix      = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    imagemin    = require('gulp-imagemin'),
    rename      = require('gulp-rename');
// css
gulp.task('sass',function () {
    gulp.src('./project/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error',sass.logError))
        .pipe(prefix('last 3 versions','> 1%','ie 6'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./project/dist/css'));
});

// min img
gulp.task('default', function () {
    gulp.src('./project/dist/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./project/dist/img'))
});
// js

gulp.task('js', function () {
    gulp.src(['./project/sass/**/*.js', './project/sass/**/!js/*.min.js'])
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min',
            basename: "script"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./project/dist/js'));
});


gulp.task('sass:watch',function () {
    gulp.watch('./project/sass/**/*.scss',['sass']);
    gulp.watch(['./project/sass/**/*.js', '!./project/sass/**/*.min.js'], ['js']);
});
