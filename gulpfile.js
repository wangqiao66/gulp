var gulp = require('gulp');
var server = require('gulp-webserver');
var minCss = require('gulp-clean-css');
var minJs = require('gulp-uglify');
gulp.task('css', function() {
    gulp.src('src/css/*.scss')
        .pipe(minCss())
        .pipe(gulp.dest('build/css'))
})
gulp.task('js', function() {
    gulp.src(['src/js/**/*.js', '!src/js/libs/*.js'])
        .pipe(minJs())
        .pipe(gulp.dest('build/js'))
})
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 9090,
            open: true
        }))
})
gulp.task('watch', function() {
    gulp.watch('src/css/*.scss', ['css'])
})
gulp.task('default', ['css', 'js', 'server', 'watch'])