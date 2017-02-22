var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');


gulp.task('build', function () {
    return browserify({entries: './dev/app.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    var watching = false;
    livereload.listen();
    gulp.start('build', function(){
      if(!watching){
        watching = true;
        gulp.watch('./dev/*.js', ['build']);
        nodemon({
          script:'server.js',
          watch:'dist'
        }).on('restart', function(){
          gulp.src('server.js')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
        });
      }
    });
});

gulp.task('default', ['watch']);
