const merge = require("webpack-merge")
const baseconfig = require("./webpack.base.conf")
const config = require("../config")

const devConfig = merge(baseconfig, {
    devServer : {
        host : config.dev.host,
        open : config.dev.open,
        port : config.dev.autoOpen,
        compress : true,
        overlay : true,
        publicPath : "../dist"
    },

    mode : "development"
})