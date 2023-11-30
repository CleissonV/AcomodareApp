const gulp 			= require('gulp');
const imagemin 		= require('gulp-imagemin');
const webp 			= require('gulp-webp');
const {imagens} 	= require('../tasks.conf');
const server 		= require('./server');

exports.default = gulp.series(
	copyIMGS,
	webpCompiler
);
exports.watch 	= gulp.parallel(imgsWatch, webpWatch);
exports.build	= gulp.series(minifyImages, webpBuild);
exports.webp 	= webpCompiler;

function webpCompiler (d) {
	console.log('Compilando as imagens para Webp ...');
	gulp.src(imagens.webp.src)
		.pipe(webp())
		.pipe(gulp.dest(imagens.dist));
	d();
}

function webpBuild (d) {
	console.log('Otimizando as imagens Webp ...');

	gulp.src(imagens.webp.watch)
		.pipe(webp())
		.pipe(gulp.dest(imagens.dist));
	d();
}

function  minifyImages (done) {
	console.log('Otimizando as imagens ...')

	gulp.src(imagens.src)
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{optimizationLevel: 3},
					{progessive: true},
					{interlaced: true},
					{removeViewBox: false},
					{removeUselessStrokeAndFill: false},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest(imagens.dist));

	done();
}

function webpWatch(done) {
	console.log('Vigiando as alteraçoes nas imagens Webp...')

	gulp.watch(imagens.webp.watch, gulp.series(
		webpCompiler,
		server.reload
	));

	done();
}

function imgsWatch(done) {
	console.log('Vigiando as alteraçoes nas imagens ...')

	gulp.watch(imagens.src, gulp.series(
		copyIMGS,
		server.reload
	));

	done();
}

function copyIMGS (done) {
	gulp.src(imagens.src)
		.pipe(gulp.dest(imagens.dist));

	done();
}
