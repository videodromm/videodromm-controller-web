var gulp = require('gulp');
var browserify = require('gulp-browserify');
var webserver = require('gulp-webserver');
var minimist = require('minimist');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
//var sass = require('gulp-sass');

var args = minimist(process.argv.slice(2));

gulp.task('deploy', function () {
  var remotePath = '/videodromm.com/';
  var conn = ftp.create({
    host: 'home146246455.1and1-data.host',
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src([
      './**/*.*',
      '!./.*',
      '!./node_modules/**/*.*'
    ])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});

var src = './process',
    app = './builds/app';

gulp.task('js', function() {
  return gulp.src( src + '/js/app.js' )
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('html', function() {
  gulp.src( app + '/**/*.html');
});

gulp.task('css', function() {
  gulp.src( app + '/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch( src + '/js/**/*.js', ['js']);
  gulp.watch( app + '/css/**/*.css', ['css']);
  gulp.watch([ app + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
