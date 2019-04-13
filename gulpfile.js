const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

function style() {
	return gulp
		.src('./src/scss/template.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css/template.css'))
}

function watch() {
	gulp.watch('./src/scss/**/*.scss', style)
}

gulp.task('build', style);
gulp.task('watch', watch);