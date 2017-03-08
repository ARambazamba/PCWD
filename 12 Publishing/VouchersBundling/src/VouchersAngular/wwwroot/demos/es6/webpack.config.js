var path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve('js'),
    entry: {
        app: './wwwroot/app.js'
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    output: {
        path: './wwwroot',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
			{
			    test: /\.es6$/,
			    exclude: /node_modules/,
			    loader: "babel-loader"
			}
        ]
    }
};
