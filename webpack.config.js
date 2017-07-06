var path = require('path');

module.exports = [{
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
},{
    entry: './example/rotation/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example/rotation/dist')
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
},{
    entry: './example/input/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example/input/dist')
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
},{
    entry: './example/text/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example/text/dist')
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
},{
    entry: './example/touch/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example/touch/dist')
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
}];
