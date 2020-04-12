module.exports = {
    devServer:{
    proxy: {
        '/api': {
            target: 'https://way.jd.com/he/freeweather', //API服务器的地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
    }
}