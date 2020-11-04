module.exports = {
    // 关闭ESLint的规则
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.amspur.com',
                pathRewrite: { "^/api": "" }
            },
            '/v1': {
                target: 'http://localhost:8080',
                pathRewrite: { "^/v1": "" }
            },

        }
    },
}