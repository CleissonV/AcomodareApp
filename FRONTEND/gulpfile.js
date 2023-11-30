const {task} = require('gulp');

const pug 		= require('./tasks/pug.js');
const sass 		= require('./tasks/sass.js');
const vendors 	= require('./tasks/vendors.js');
const fonts 	= require('./tasks/fonts.js');
const spritePNG	= require('./tasks/spritePNG.js');
const spriteSVG	= require('./tasks/spriteSVG.js');
const imgs		= require('./tasks/imgs.js');
const js		= require('./tasks/javascript.js');
const app		= require('./tasks/app.js')

const project	= require('./tasks/project.js');


exports['vendors'] 	 	 = vendors.default;

exports['pug']     		 = pug.default;
exports['pug:watch']     = pug.watch;
exports['pug:build']     = pug.build;

exports['sass'] 		 = sass.default;
exports['sass:watch'] 	 = sass.watch;

task('fonts', fonts.default);
task('fonts:watch', fonts.watch);
task('fonts:preloader', fonts.preloader);

task('spritePNG', spritePNG.default);
task('spritePNG:watch', spritePNG.watch);

task('spriteSVG', spriteSVG.default);
task('spriteSVG:watch', spriteSVG.watch);

task('imgs', imgs.default);
task('imgs:watch', imgs.watch);
task('imgs:build', imgs.build);

task('js', js.default);
task('js:watch', js.watch);
task('js:dev', js.dev);
task('js:build', js.build);

task('app', app.default);
task('app:icons', app.icons);
task('app:manifest', app.manifest);
task('app:watch', app.watch);

task('start', project.start);
task('dev', project.dev);
task('build', project.build);
task('default', project.default);
