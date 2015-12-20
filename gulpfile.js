var gulp            = require("gulp"),
    browserSync     = require('browser-sync'),
    mainBowerFiles  = require('main-bower-files'),
    minifyCss       = require('gulp-minify-css'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    imagemin        = require('gulp-imagemin'),
    useref          = require('gulp-useref'),
    rename          = require("gulp-rename");



gulp.task('server', function () {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css'
    ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);


gulp.task('mainfiles', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('app/bowerlibrary'))
});


// сборка проекта
gulp.task('scripts', function () {
    return gulp.src(['app/js/*.js','!app/js/main.js'])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('library-js', function () {
    return gulp.src(['app/bowerlibrary/*.js','!app/bowerlibrary/jquery.js'])
        .pipe(concat('libraries.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('jquery-min', function() {
    return gulp.src(['app/bowerlibrary/jquery.js'])
        .pipe(uglify())
        .pipe(rename('jquery.min.js'))
        .pipe(gulp.dest('dist/js'));
    
})
gulp.task('main-js-min', function() {
    return gulp.src(['app/js/main.js'])
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dist/js'));
})
gulp.task('minify-css', function() {
    return gulp.src(['app/css/*.css','!app/css/style-ie.css'])
        .pipe(concat('all.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('library-css', function() {
    return gulp.src('app/bowerlibrary/*.css')
        .pipe(concat('libraries.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});
gulp.task("minify-img", function() {
    gulp.src("app/img/**/*")
        .pipe(imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img'))
});
gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref({noAssets:true}))
        .pipe(gulp.dest('dist'));
});
// Перенос шрифтов
gulp.task('fonts', function() {
    gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))
});

// Остальные файлы, такие как favicon.ico и пр.
gulp.task('extras', function () {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ]).pipe(gulp.dest('dist'));
});

gulp.task('dist', ['scripts', 'minify-css', 'minify-img', 'library-css', 'library-js', 'fonts', 'extras','useref', 'jquery-min', 'main-js-min']);
