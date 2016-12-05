var webpack = require('webpack');
var path = require('path');

var isDev = true;


module.exports = {
    // 入口文件
    // 多个页面就写多个，单页面只有一个
    entry: {
        index: './src/index.js'

    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        extensions: ['', 'vue', '.js']
    },

    // webpack 打包后的输出
    output: {
        path: path.join(__dirname, 'built'),
        publicPath: '/built',
        filename: '[name].js',
    },

    module: {
        loaders: [
            //使用vue-loader加载.vue结尾的文件
            { test: /\.vue$/, loader: 'vue' },

            //使用bebal转化为es2015
            { test: /\.js$/, loader: 'babel?presets=es2015', exclude: '/node_modules/' },

            { test: /\.css$/, loader: 'style!css'}
        ]
    }
}