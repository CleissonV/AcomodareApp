const gulp 			= require('gulp');
const spritesmith	= require('gulp.spritesmith');
const template 		= require('./template.scss.handlebars');
const {sprites} 	= require('../tasks.conf');
const server 		= require('./server');
const spritePNG 	= sprites.png;

exports.default = spritepng;
exports.watch 	= spriteWatchPNG;

function spriteWatchPNG (done){
	gulp.watch(spritePNG.src, gulp.series(
		spritepng,
		server.reload
	))

	done();
}

function spritepng (done){
	let spriteData = gulp.src(spritePNG.src)
		.pipe(spritesmith({
			imgName 	: 'sprites.png',
			imgPath 	: '../images/sprites.png',
			cssName 	: '_sprites.scss',
			padding 	: 10,
			cssTemplate : template
		}));

	spriteData.img.pipe(gulp.dest(spritePNG.dist.img));
	spriteData.css.pipe(gulp.dest(spritePNG.dist.css));

	done();
}
