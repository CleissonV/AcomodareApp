const gulp 			= require('gulp');
const browserSync 	= require('browser-sync').create();
const compress 		= require('compression');

exports.default =  server;
exports.reload 	=  reload;
exports.stream 	=  browserSync.stream;

function server(done) {
	browserSync.init({
        server 	: ['dist'],
        port 	: 9000,
        open 	: false,
        notify 	: false,
        middleware: [
        	function(req,res,next){
                const gzip = compress();

                gzip(req,res,next);
            }
        ]
    });

    done();
}

function reload(done) {
	browserSync.reload();

	done();
}
