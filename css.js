'use strict';
/*
x-middleware-css
================

this middleware should compile style content on the fly
*/

var
	stylus    = require('stylus'),
	nib       = require('nib');

module.exports=function(directory,extra_stylus_paths){
	var stylus_options = { // css compile and compressi
		src     : directory,
		compile : function compile(str, path) {
			var s=stylus(str)
				.set('filename' , path    )
				.set('paths' , extra_stylus_paths || [] )
				.set('compress' , true    )
				.set('limit'    , 10*1024 ) // if less then 10kb then inline
				.set('lineno'   , true    )
				.use(nib());
			return s;
		}
	};
	return stylus.middleware(stylus_options);
};
