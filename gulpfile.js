/**
 * If you don't like the verbosity level of notifications you can remove the [, verbose: 'v'] at the end of line 35.
 *
 * And if you have more than 1 file in spec directory is better to create phpspec.yml in root project directory,
 * it doesn't matter if phpspec.yml will be empty or properly configured,
 * and comment line 34 and uncomment line 33.
 *
 * For this file to work properly you need to install:
 * brew install node
 * npm install --global gulp-cli
 * npm install gulp gulp-phpspec gulp-notify
 *
 * Just in case my setup:
 * OS: macOS Catalina
 * node -v: v13.2.0
 * npm -v: 6.13.1,
 * npx -v: 6.13.1
 * gulp -v: CLI version: 2.2.0 Local version: 4.0.2
 *
 * package.json:
 * "devDependencies": {
 *   "gulp": "^4.0.2",
 *   "gulp-notify": "^3.2.0",
 *   "gulp-phpspec": "^0.5.5",
 * }
 */

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