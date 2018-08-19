const merge = require("webpack-merge")
const baseconfig = require("./webpack.base.conf")
const config = require("../config")

const devConfig = merge(baseconfig, {
    devTools : "inline-source-map",
    devServer : {
        host : config.dev.host,
        open : config.dev.open,
        port : config.dev.autoOpen,
        compress : true,
        overlay : true,
        publicPath : "../dist",
        hot : config.dev.activateHotReloading
    },

    mode : "development"
})