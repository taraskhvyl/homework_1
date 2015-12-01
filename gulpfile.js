var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    mainBowerFiles = require('main-bower-files');
    gulp.task('server', function () {
        browserSync({
            port: 9000,
            server: {
                baseDir: 'app'
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