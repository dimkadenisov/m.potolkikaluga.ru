module.exports = function(api) {
	api.cache(true);

	const presets = [
		[
			'@babel/env',
			{
				// targets: {
				// 	ie: '11',
				// },
				targets: ['last 2 versions', 'not IE 11', 'not dead'],
			},
		],
	];
	const plugins = ['babel-plugin-transform-es2017-object-entries'];

	return {
		presets,
		plugins,
	};
};
