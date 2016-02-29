module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            echarts$: "echarts/src/echarts.js",
            echarts: "echarts/src",
            zrender$: "zrender/src/zrender.js",
            zrender: "zrender/src"
        }
    }
}
