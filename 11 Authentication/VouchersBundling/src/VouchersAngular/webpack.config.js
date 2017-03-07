var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './wwwroot/app.js'
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: './wwwroot',
        filename: 'js/bundle.js'
    }
};
