var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var reload = browserSync.reload;

// path

var web = {
    sass: [
        'dev/scss/*.scss',
        'dev/scss/**/*.scss'
        
    ],
    html: [
        'dev/layout/*.html',
        'dev/layout/**/*.html'
    ],
    pug: [
        'dev/app/pug/*.pug',
        'dev/app/pug/**/*.pug'
    ],
    js: [
        'dev/js/*.js',
        'dev/js/**/*.js'
    ],
    assets: [
        'assets/fonts/*',
        'assets/images/*',
        'assets/js/*',
        'assets/css/*',
    ],
    css: [
        'dest/css/*.css',
        'dest/css/autoprefixer/*.css'
    ],
    tmp: 'resources/assets/tmp/css/*.css'
};









//  uglify js
gulp.task('compress', function () {
    // 將你的默認的任務代碼放在這
    return gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/bundle/'));
});

// minify css

gulp.task('minify-css', function () {
    // 将妳的任務代碼放在這
    return gulp.src('dev/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/bundle/'));
});


// concat  module
gulp.task('concat', function() {
    return gulp.src('css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('css/build/'));
});





   
gulp.task('fileinclude', function () {
    return gulp.src(['dev/layout/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

// sass

gulp.task('sass', function () {
    // 将妳的任務代碼放在這
    return gulp.src('dev/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        // .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('css/'));
});


//sass watch

gulp.task('scss:watch', function () {
    gulp.watch('./scss/*.scss', ['sass']);
});

//  browserSync 瀏覽器同步

gulp.task('browser', ['sass'], function () {

    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });

    gulp.watch(web.sass, ['sass']).on('change', reload);
    gulp.watch(web.js).on('change', reload);
    gulp.watch(web.html, ['fileinclude']).on('change', reload); 
    // gulp.watch("images/*").on('change', reload);
});


gulp.task('default', ['browser','fileinclude']);




// js move
// gulp.task('default', function() {
//     // 将妳的任務代碼放在這
//     return gulp.src('*.html')
//     .pipe(gulp.dest('build/'));

//   });

console.log('no error');

