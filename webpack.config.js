const path = require('path')
const webpack = require('webpack')

const parentDir = path.join(__dirname, 'public/')

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    resolve: {
        alias: {
            Components: path.resolve('./src/Components/'),
            Pages: path.resolve('./src/Pages/'),
            Styles: path.resolve('./src/Styles/'),
            Config: path.resolve('./src/Config/'),
        },
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react',
                        'env',
                        'es2015'
                    ],
                    plugins: [
                        'babel-plugin-webpack-alias'
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}