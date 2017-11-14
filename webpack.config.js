module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', "es2015", "stage-1"]
				}
			}
		]
	}
};
