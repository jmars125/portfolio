var gulp = require('gulp');
// create new instance of BrowserSync
var browserSync = require('browser-sync').create();

gulp.task('watch', function(gulpCallback) {
  browserSync.init({
    // serve out of app/
    server: './',
    // launch default browser as soon as server is up
    open: true
  }, function callback() {
    // (server is now up)

    // watch html and reload browsers when it changes
    gulp.watch('index.html', browserSync.reload);

    // watch css and stream to BrowserSync when it changes
    gulp.watch('css/*', function() {
      // grab css files and send them into browserSync.stream
      // this injects the css into the page
      gulp.src('css/*')
        .pipe(browserSync.stream());
    });

    // notify gulp that this task is done
    gulpCallback();
  });
});