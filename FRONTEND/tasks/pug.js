const {
	src,
	dest,
	watch,
	series
} = require('gulp');

const pugCompiler 	= require('gulp-pug');
const beautifier	= require('gulp-beautify');
const server 		= require('./server');

const {
	pug,
	beautifyConfig
} = require('../tasks.conf');

exports.default = compilaPug;
exports.watch 	= watchPug;
exports.build	= beautifyHTML;

function beautifyHTML (done) {
	const data = compilerData();

	data.pipe(beautifier.html(beautifyConfig.html))
		.pipe(dest(pug.dist));

	done();
}

function watchPug (done) {
	watch(pug.watch, series(
		compilaPug,
		server.reload
	));

	done();
}

function compilaPug (done) {
	const data = compilerData();

	data
		.pipe(beautifier.html(beautifyConfig.html))
		.pipe(dest(pug.dist));

	done();
}

function compilerData () {
	let data = src(pug.src)
		.pipe(pugCompiler());

	return data;
}
