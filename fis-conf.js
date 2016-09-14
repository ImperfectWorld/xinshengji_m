// 启用 fis-spriter-csssprites 插件
//fis.match('::packager', {
//  spriter: fis.plugin('csssprites')
//});

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });


//widget源码目录下的资源被标注为组件
//fis.match('/widget/**/*', {
//	isMod: true
//});

// widget下的 js 调用 jswrapper 进行自动化组件化封装
//fis.match('/widget/**/*.js', {
//    postprocessor: fis.plugin('jswrapper', {
//        type: 'commonjs'
//    })
//});

//所有的文件产出到static/目录下
fis.match('*', {
	release: '/static/$0'
});

//所有模板放到tempalte 目录下
fis.match('*.html', {
	release: '/tempalte/$0'
});

//启用打包插件
fis.match('::package', {
	postpackager: fis.plugin('loader')
});
//合并所有css文件
fis.match('*.css', {
	packTo: '/static/main.css'
});

//加md5
fis.match('*.{js,css,png}', {
	useHash: true
});

// 压缩文件
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
 	optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  	optimizer: fis.plugin('clean-css'),
  	useSprite: true
});



//fis.match('*.png', {
//  // fis-optimizer-png-compressor 插件进行压缩，已内置
//  	optimizer: fis.plugin('png-compressor')
//});