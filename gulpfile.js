var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var pug             = require('gulp-pug');
var reload          = browserSync.reload;
var cache           = require('gulp-cache');
var uglify          = require('gulp-uglify');
var prefix          = require('gulp-autoprefixer');
var cssnano         = require('gulp-cssnano');
var htmlmin         = require('gulp-htmlmin');
var runSequence     = require('run-sequence');

gulp.task('sass', function(){
    return gulp.src('app/sass/*.sass')
        .pipe(sass()) // Using gulp-sass
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});

gulp.task('pug', function() {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        })) // pipe to pug plugin
        .pipe(gulp.dest('app')) // tell gulp our output folder
});

gulp.task('html-min', function() {
    return gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(''));
});

gulp.task('uglify', function(){
    return gulp.src('app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
});

gulp.task('css-nano', function(){
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css'))
});

gulp.task('assets', function(){
    return gulp.src('app/assets/**/*')
        .pipe(gulp.dest('assets'))
});

gulp.task('font-awesome', function(){
    return gulp.src('app/css/font-awesome/**/*')
        .pipe(gulp.dest('css/font-awesome'))
});

gulp.task('minify', ['html-min', 'uglify', 'css-nano']);

gulp.task('serve', ['pug', 'sass'], function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });

    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/sass/**/*.sass', ['sass']);
});

gulp.task('compile', ['pug', 'sass', 'minify', 'assets', 'font-awesome']);

gulp.task('default', ['serve']);
