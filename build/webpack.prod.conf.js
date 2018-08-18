const merge = require("webpack-merge")
const baseconfig = require("./webpack.base.conf")

const prodConfig = merge(baseconfig, {
    output : {
        path : "../",
        filename : "app[hash].js"
    },
    mode : "production"
})