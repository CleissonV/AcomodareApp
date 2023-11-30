const gulp 			= require('gulp');
const {sprites}		= require('../tasks.conf');
const svgstore		= require('gulp-svgstore');
const rename 		= require('gulp-rename');
const imagemin 		= require('gulp-imagemin');
const server 		= require('./server');
const fs 	        = require('fs');
const path          = require('path')
const spriteSVG 	= sprites.svg;

exports.default 	= gulp.series(spritesvg, spriteVue);
exports.watch 		= spriteWatchSVG;

function spriteVue(done) {
	fs.readFile(spriteSVG.dist.img+'sprites.svg', function read(err, data) {
		if(err) {
			console.log(err)
			return false
		}

		const content = data;

		makeVueFile(content);
	})

	makeVueComponents();

	done();
}

function makeVueComponents() {
	let dir = spriteSVG.src.replace('/*.svg', '')
	let svgFiles = fs.readdirSync(dir);

	svgFiles = svgFiles.filter($file => {
		let _ext = path.extname($file);

		if(_ext === '.svg') {
			return $file;
		}
	});

	let vueFiles = [];

	svgFiles.forEach($file => {
		const basename = path.basename($file);
		let fileName = `Icon${capitalizeFirstLetter(basename.replace('.svg',''))}.vue`

		vueFiles.push({
			file: fileName,
			instance: fileName.replace('.vue', ''),
			component: `icon-${basename.replace('.svg', '').toLocaleLowerCase()}`
		});

		fs.writeFile(`${spriteSVG.dist.vue}/${fileName}`, vue_content(`${dir}/${$file}`), (err) => {
			if(err ) return console.log(err)

			console.log(`Criado o arquivo ${fileName}`);
		});
	});

	fs.writeFile(`${spriteSVG.dist.vue}/index.js`, `import Vue from 'vue'

// Importando os componentes
${vueFiles.map(({instance, file}) => {
	return `import ${instance} from './${file}'`
}).join('\n')}

// Definindo os componentes
${vueFiles.map(({component, instance}) => {
	return `Vue.component('${component}', ${instance});`;
}).join('\n')}
`, err => {
		if(err) return console.log(err);

		console.log(`Atualizado o arquvo ${spriteSVG.dist.vue}/index.js`);
	})
}

function vue_content($file) {
	let content = fs.readFileSync($file, {
		encoding: 'utf-8'
	});
	let template = `<template>\n${content}</template>`;

	return template;
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeVueFile(content) {
const fileContent = `<template>
	<div class="sprite-svg-area">
		${content}
	</div>
</template>
`
	const $outDir = './src/assets/js/vue/components/SpritesSvg.vue';

	if (!fs.existsSync($outDir)){
		fs.mkdirSync($outDir, { recursive: true });
	}

	fs.writeFile($outDir, fileContent, err => {
		if(err) return err;
		console.log('Created file SpriteSvg.vue')
	})
}

function spritesvg (done) {
	var data = gulp.src(spriteSVG.src)
		.pipe(svgstore())
		.pipe(imagemin([
			imagemin.svgo({
				plugins: [
					{ optimizationLevel: 3 },
					{ progessive: true },
					{ interlaced: true },
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: false },
					{ cleanupIDs: false }
				]
			})
		]));

		data.pipe(rename('sprites.svg'))
			.pipe(gulp.dest(spriteSVG.dist.img));

		data.pipe(rename('sprites.svg'))
			.pipe(gulp.dest(spriteSVG.dist.pug));

	done();
}

function spriteWatchSVG (done) {
	gulp.watch(spriteSVG.src, gulp.series(
		spritesvg,
		server.reload
	));

	gulp.watch(spriteSVG.dist.img+'sprites.svg', gulp.series(
		spriteVue,
		server.reload
	))

	done();
}
