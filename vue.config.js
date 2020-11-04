module.exports = {
    // 关闭ESLint的规则
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://www.amspur.com',
                target: 'http://localhost:8080',
                pathRewrite: { "^/api": "" }
            }
        }
    }
}