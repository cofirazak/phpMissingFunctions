const gulp = require('gulp');
const phpspec = require('gulp-phpspec');
const notify = require('gulp-notify');

gulp.task('test', function (done) {
    gulp.src('phpspec.yml')
    // gulp.src('spec/**/*.php')
        .pipe(phpspec('', {notify: true, clear: true, noInteraction: true, debug: true, verbose: 'v'}))
        .on('error', notify.onError(testNotification('fail')))
        .pipe(notify(testNotification('pass')));
    done();
});

gulp.task('watch', function () {
    gulp.watch(['spec/**/*.php', 'src/**/*.php'], gulp.series(['test']));
});

gulp.task('default', gulp.series(['test', 'watch']));

function testNotification(status) {
    return {
        title: (status === 'pass') ? 'Tests Passed' : 'Tests Failed',
        message: (status === 'pass') ? '\n\nAll tests have passed!\n\n' : '\n\nOne or more tests failed...\n\n',
        icon: __dirname + '/node_modules/gulp-phpspec/assets/test-' + status + '.png'
    }
}