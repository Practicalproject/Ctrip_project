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
                target: 'http://localhost:2506',
                pathRewrite: { "^/v1": "" }
            },
            '/v2': {
                target: 'https://easy-mock.com/mock/5fa3eca94096d37b31fcca7b/ctrip',
                pathRewrite: { "^/v2": "" }
            },

        }
    },
}