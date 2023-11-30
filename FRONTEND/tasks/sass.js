const {
	src,
	dest,
	watch,
	series
} = require('gulp');

const sass  		= require('gulp-dart-sass');
const autoprefixer	= require('gulp-autoprefixer');
const sourcemaps	= require('gulp-sourcemaps');
const server 		= require('./server');
const {
	scss
} = require('../tasks.conf');

const rename = require('gulp-rename')

exports.default = compilaSass;
exports.watch 	= watchSass;

function watchSass(done) {
	watch(scss.watch, compilaSass);

	done();
}

function compilaSass(done) {
	src(scss.src)
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))
		.pipe(server.stream())
		.pipe(dest(scss.dist));

	done();
}
