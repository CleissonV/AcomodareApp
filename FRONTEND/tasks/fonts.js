const {
	src,
	dest,
	watch,
	series,
	parallel
} = require('gulp');
const concat    = require('gulp-concat');
const fs 		= require('fs');
const { fonts } = require('../tasks.conf');
const server 	= require('./server');

exports.default     = parallel(copyFonts, concatFonts);
exports.watch	    = parallel(copyFontsWatch, cssFonts);
exports.preloader	= preloadFont;

function copyFonts (done) {
	src(fonts.src)
		.pipe(dest(fonts.dist));

	done();
}

function concatFonts(done) {
	src(fonts.css.src)
		.pipe(concat('_fontfaces.scss'))
		.pipe(dest(fonts.css.dist));

	done();
}

function cssFonts(done) {
	watch(fonts.css.src, concatFonts);

	done();
}

function copyFontsWatch (done) {
	watch(fonts.src, series(
		copyFonts,
		preloadFont,
		server.reload
	));

	done();
}

function preloadFont(done) {
	var files = [];
	console.log('Gerando os preloaders para as fontes....');

	listFiles();

	done();
}

function fileContent(fontList) {
	return `
${
fontList.map(font => `link(
	rel="preload"
	href="${font.src}"
	type="font/${font.type}"
	as="font"
	crossorigin
)
`).join('\n')
}`
}

function writeFile(fontList) {
	fs.writeFile(`src/pug/common/fonts.preload.pug`, fileContent(fontList), err => {
		if(err) return err;

		console.log('Preloader gerado com sucesso')
	})
}

function listFiles() {
	var fontList = [];
	var subpaths = fs.readdirSync('src/assets/fonts', { withFileTypes: true })
		.filter(d => d.isDirectory())
		.map(d => d.name)

	subpaths.forEach((subpath, i) => {
		fs.readdir(`src/assets/fonts/${subpath}`, (err, files) => {
			if(err) {
				console.error(err);
			}

			files.forEach(file => {
				let type = file.split('.')[1];

				if(type == 'woff' || type == 'woff2') {
					fontList.push({
						src: `assets/fonts/${subpath}/${file}`,
						type: type
					});
				}
			})

			if(i == (subpaths.length -1)) {
				writeFile(fontList)
			}
		})

	});

};
