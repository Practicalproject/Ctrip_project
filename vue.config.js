module.exports = {
    // 关闭ESLint的规则
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.amspur.com',
                pathRewrite: { "^/api": "" }
            }
        }
    },
}