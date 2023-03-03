const path = require('path')
const HTMLWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {

    mode: 'development' ,

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') 
    },

    module: {
        rules: [
            {
            test: /\.(sa|c|sc)ss$/,
            use: [
                MiniCssExtract.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.css%/i,
            use:[
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(jpeg|jpg|png|svg|gif)$/i,
            use:{
                loader: 'file-loader',
                    options:{
                        name:'[name].[ext]'
                    }
            }
        }
        ]
    },

    plugins: [
        new HTMLWebpack({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: 'style.css'
        })
    ]

}
