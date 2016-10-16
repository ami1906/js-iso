var webpack = require("webpack");
var path = require("path")

module.exports = {
    entry: {
        demo_app: "./demo_app_manifest.js"
    },
    output: {
        filename: 'public/javascripts/[name].js'
    }
};