const path = require("path")
module.exports = {
    entry : "../app.js",
    output : {
        filename : "app[name].js",
        path : "../dist"
    },
    devServer : {
        open : true,
        port : 3000,
        host : 'localhost'

    },

    module : {
        rules : [
            {
                test : /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}