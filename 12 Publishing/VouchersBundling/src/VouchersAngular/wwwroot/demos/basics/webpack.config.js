var path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve('js'),
    entry: {
        app: './wwwroot/demos/basics/app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: './wwwroot/demos/basics/',
        filename: 'bundle.js'
    },
    module: {
        loaders: []
    }
};
