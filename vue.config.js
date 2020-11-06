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
                target: 'http://www.wangshuo1998.cn:7300/mock/5fa507865739e5605209913f/ctrip',
                pathRewrite: { "^/v2": "" }
            },

        }
    },
}