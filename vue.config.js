module.exports = {
    // 关闭ESLint的规则
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.amspur.com',
                // target: 'http://localhost:8080',
                pathRewrite: { "^/api": "" }
            },
            '/v1': {
                target: 'http://localhost:2506',
                pathRewrite: { "^/v1": "" }
            },
            '/v2': {
                target: 'http://localhost:2506',
                pathRewrite: { "^/v1": "" }
            },

        }
    },
}