var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var plugins     = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('webserver', function(){
	gulp.src('./')
	.pipe(plugins.webserver({
		host : 'localhost',
		livereload : true,
		open : true
	}))
})

gulp.task('build', function(){
	runSequence(['webserver'])
})