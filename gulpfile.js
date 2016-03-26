var gulp 			= 			require('gulp');
var sass 			= 			require('gulp-sass');
var minify_css		=			require('gulp-minify-css');
var imageMin		=			require('gulp-imagemin');
var autoprefixer	=			require('gulp-autoprefixer');

gulp.task('sass', function(){
	gulp.src('./assets/sass/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./assets/pre-css'))
});

gulp.task('minify-css', function(){
	return gulp.src('./assets/pre-css/main.css')
	.pipe(minify_css({
		keepSpecialComments: 1
	}))
	.pipe(gulp.dest('assets/css'))
});

gulp.task('image-compress', function(){
	return gulp.src('./assets/pre-images/*')
	.pipe(imageMin({
		progressive: true,
		optimizationLevel: 3	
	}))
	.pipe(gulp.dest('assets/images'))
});

gulp.task('watch', function(){
	gulp.watch('./assets/sass/partials/*.scss', ['sass']);
	gulp.watch('./assets/pre-css/main.css', ['minify-css']);
});

//Add autoprefixer, watch, minify, imgCompressor and Browser sync, and jade	