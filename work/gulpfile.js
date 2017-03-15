var gulp=require('gulp');
var concat=require('gulp-concat');
var sass=require('gulp-sass');
var uglify=require('gulp-uglify');
var webserver=require('gulp-webserver');

gulp.task('sass',function(){
	gulp.src('css/style.sass')
	.pipe(sass())
	.pipe(gulp.dest('css'))
})
gulp.task('webserver',['start'],function(){
	gulp.src('./')
	.pipe(webserver({
		open:true,
		livereload:true,
		directroyListing:true
	}))
})

gulp.task('start',function(){
	gulp.watch('./css/*.sass',['sass']);
})