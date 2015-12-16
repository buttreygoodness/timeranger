var coffee = require('gulp-coffee'),
  concat = require('gulp-concat'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  mocha = require('gulp-mocha'),
  runSequence = require('run-sequence'),
  uglify = require('gulp-uglify'),
  webpack = require('gulp-webpack');

var paths = {
  scripts: ['./src/**/*.coffee']
};

gulp.task('coffeescript', function() {
  return gulp.src('src/*.coffee')
    .pipe(coffee({
      bare: true
    }).on('error', gutil.log))
    .pipe(gulp.dest('src'))
});

gulp.task('webpack', function() {
  return gulp.src('./src/indexbuster.js')
    .pipe(webpack({
      output: {
        filename: 'indexbuster.wp.js'
      }
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('concat', function() {
  return gulp.src(['./src/moment.min.js', './src/indexbuster.js'])
    .pipe(concat('timerange.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('test', function() {
  return gulp.src('test.js', {
      read: false
    })
    .pipe(mocha({
      reporter: 'nyan'
    }))
    .once('error', function() {
      process.exit(1);
    })
    .once('end', function() {
      process.exit();
    });
});

gulp.task('uglify', function() {
  return gulp.src('./dist/timerange.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/timerange.ugly'));
});

gulp.task('move', function() {
  gulp.src('./src/indexbuster.js')
    .pipe(gulp.dest('./dist/'))
  gulp.src('./dist/timerange.js')
    .pipe(gulp.dest('./date_test_gwd/'))
    .pipe(gulp.dest('./date_test_gwd/gwd_preview'))
    .pipe(gulp.dest('./date_test_gwd/gwd_preview_Buster_Date_Test_GWD'))
    .pipe(gulp.dest('./date_test_gwd/gwd_preview_Buster_Date_Test_GWD_IMG'))
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['insequence']);
});

gulp.task('insequence', function(cb) {
  // runSequence('coffeescript', 'webpack', 'uglify', 'move', cb);
  runSequence('coffeescript', 'concat', 'move', 'uglify', cb);
});

gulp.task('default', ['insequence']);