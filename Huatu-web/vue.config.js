// const devUrl = 'https://dev-paike.huatu.com/'

const mockUrl = 'http://localhost:9998'

let debugUrl = mockUrl

const path = require('path')
const webpack = require('webpack')

const envStr = process.env.env
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                'vue$': 'vue/dist/vue.esm.js',
                'library': path.resolve(__dirname, 'common-frontend/src')
            }
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true,
                            drop_debugger: true
                        }
                    }
                })
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'envStr': JSON.stringify(envStr)
            })
        ]
    },
    devServer: {
        port: 9999,
        proxy: {
            '/*.json': {
                target: debugUrl
            },
        }
    },
}
