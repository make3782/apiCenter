var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDev = true;
var projectRoot = path.resolve(__dirname, './');


module.exports = {
    // 入口文件
    // 多个页面就写多个，单页面只有一个
    entry: {
        app: './src/main.js'

    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        extensions: ['', '.vue', '.js']
    },

    // webpack 打包后的输出
    output: {
        path: path.join(__dirname, 'built'),
        publicPath: '/built/',
        filename: '[name].js',
    },

    module: {
        loaders: [
            //使用vue-loader加载.vue结尾的文件
            { test: /\.vue$/, loader: 'vue'},

            //使用bebal转化为es2015
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/, include: projectRoot },

            { test: /\.css$/, loader: 'style!css' },

            //字体文件
            { test: /\.(woff2?|eot|ttf|svg|otf)(\?.*)?$/, loader: 'file-loader' },

            //图片资源
            { test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/, loader: 'file-loader', query: {name: '[name].[ext]?[hash]'}}
        ]
    },

    devtool: 'eval-source-map', // 配置生成Source Maps, source-map / cheap-module-source-map / eval-source-map / cheap-module-eval-source-map

    // 插件， 这是个数组
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"      //生成的html会自动添加所以来的css,js,favicon等
        }),  //new一个这个插件的实例，并传入相关的参数

        new webpack.HotModuleReplacementPlugin()    //热加载插件
    ],

    // 配置本地webserver，用于调试
    devServer: {
        // contentBase: "./public",     //本地服务器所加载的页面所在的目录
        inline: true,   //实时刷新
        colors: true,    //终端中输出结果为彩色
        port: 8090,      // 默认监听端口，默认为8080
        hot:true
    }
}