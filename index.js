var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

module.exports = function(options) {
  options.src = options.src || 'app/theme/app.+(ios|md|wp).styl';
  options.dest = options.dest || 'www/build/css';

  return gulp.src(options.src)
    .pipe(stylus({ use: nib() }))
    .on('error', function(err) {
      console.error(err.message);
      this.emit('end'); // Don't kill watch tasks - https://github.com/gulpjs/gulp/issues/259
    })
    .pipe(gulp.dest(options.dest));
};
