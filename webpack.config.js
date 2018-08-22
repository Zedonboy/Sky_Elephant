const path = require("path")
module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    mode: "development",
    devServer: {
        inline: true,
        port: 8080,
        publicPath: '/build/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }]
    }
}