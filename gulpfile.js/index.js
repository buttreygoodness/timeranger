var coffee = require('gulp-coffee'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    mocha = require('gulp-mocha'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    webpack = require('gulp-webpack');

gulp.task('coffeescript', function () {
  return gulp.src('src/*.coffee')
    .pipe(coffee({bare:true}).on('error', gutil.log))
    .pipe(gulp.dest('src'))
});

gulp.task('webpack', function () {
   return gulp.src('./src/indexbuster.js')
    .pipe(webpack({output: {filename: 'indexbuster.wp.js'}}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('test', function () {
  return gulp.src('test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
    .once('error', function() {
      process.exit(1);
    })
    .once('end', function () {
      process.exit();
    });
});

gulp.task('uglify', function () {
  return gulp.src('./dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function(cb) {
  runSequence('coffeescript', 'webpack', 'uglify', cb);
});