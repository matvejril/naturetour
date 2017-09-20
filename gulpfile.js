var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('less', function() {
    return gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', [less])
});

gulp.task('serve', function() {
    browserSync.init({
        server: './'
    });
    browserSync.watch('index.html').on('change', browserSync.reload);
    browserSync.watch('css/*.css').on('change', browserSync.reload);
});

// gulp.task('dev',
//     gulp.watch('watch', 'serve')
// );
