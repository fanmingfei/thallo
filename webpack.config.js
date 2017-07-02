var path = require('path');

module.exports = {
    entry: './example/first/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example/first/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0']
                }
            }
        }]
    }
};
