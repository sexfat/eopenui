var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var reload = browserSync.reload;

// path

var web = {
    sass: [
        'dev/scss/*.scss',
        'dev/scss/**/*.scss'
        
    ],
    html: [
        'dev/*.html',
        'dev/**/*.html'
    ],
    pug: [
        'dev/app/pug/*.pug',
        'dev/app/pug/**/*.pug'
    ],
    js: [
        'js/*.js',
        'js/**/*.js'
    ],
    assets: [
        'assets/fonts/*',
        'assets/images/*',
        'assets/js/*',
        'assets/css/*',
    ],
    json: [
        'dev/body/*.json'
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

 // html module  
gulp.task('fileinclude', function () {
    return gulp.src(['dev/*.html' ,'dev/**/*.html'])
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
            index: "id.html"
        }
    });

    gulp.watch(web.sass, ['sass']).on('change', reload);
    gulp.watch(web.js).on('change', reload);
    gulp.watch(web.html, ['fileinclude']).on('change', reload); 
    gulp.watch(web.html, ['fileinclude']).on('change', reload); 
    // gulp.watch("images/*").on('change', reload);
});


//打包用
gulp.task('clean', function () {
    return gulp.src(['dist/*'], {
            read: false
        })
        .pipe(clean());
});





gulp.task('dist' ,['clean'],function () {

    //html
    return gulp.src('*.html')
           .pipe(gulp.dest('./dist'))

        //css
        &&
        gulp.src('css/*.css')
        .pipe(cssmin({
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./dist/css/'))

        // js
        &&
        gulp.src('js/*.js')
        .pipe(gulp.dest('./dist/js/'))
        //img      
        &&
        gulp.src('img/*')
        .pipe(gulp.dest('./dist/img/'))
        &&
        gulp.src(['vendor/*' , 'vendor/**/*'])
        .pipe(gulp.dest('./dist/vendor/'))
});



//ftp用


gulp.task( 'deploy', function () {
 
    var conn = ftp.create( {
        host:     'ftp.officalssuhuiho.com',
        user:     'aresuns@aresuns.com',
        password: 'Iloveyou6831',
        parallel: 20,
        log:      gutil.log
    } );
 
    var globs = [
        'dist/**',
        'dist/css/**',
        'dist/js/**',
        'dist/vendor/**',
        'dist/vendor/**/*',
        'dist/*.html'
    ];
 
    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
 
    return gulp.src( globs, { base: '.', buffer: false } )
        // .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/eopenweb' ) );
 
} );






gulp.task('default', ['browser','fileinclude']);

// gulp.task('default', ['browser','fileinclude','minify-css']);
gulp.task('minicss', ['minify-css']);










// js move
// gulp.task('default', function() {
//     // 将妳的任務代碼放在這
//     return gulp.src('*.html')
//     .pipe(gulp.dest('build/'));

//   });






console.log('no error');

