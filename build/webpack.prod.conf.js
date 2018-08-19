const merge = require("webpack-merge")
const baseconfig = require("./webpack.base.conf")
const zipper = require("zip-webpack-plugin")

const prodConfig = merge(baseconfig, {
    output : {
        path : "../dist",
        filename : "app[hash].js"
    },
    mode : "production",
    plugin : [
        new zipper()
    ]
})