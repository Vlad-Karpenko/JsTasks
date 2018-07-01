const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', function () {
    browserSync({
        startPath: '/',
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('default', ['server']);