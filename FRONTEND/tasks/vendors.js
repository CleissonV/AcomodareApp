const gulp 			= require('gulp');
const rename		= require('gulp-rename');
const {vendors}		= require('../tasks.conf');

exports.default 	= copyVendors;

function copyVendors (done) {
	vendors.forEach(lib => {
		let libData = gulp.src(lib.src);

		if(lib.rename) {
			libData
				.pipe(rename(lib.rename))
				.pipe(gulp.dest(lib.dist));
		}else {

			libData.pipe(gulp.dest(lib.dist));

		}

	});

	done();
}
