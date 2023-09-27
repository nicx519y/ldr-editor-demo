  // 引入一个包
  const path = require('path')

  const HTMLWebpackPlugin = require('html-webpack-plugin');
  const { title } = require('process');


  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  // webpack 中的所有的配置信息都应该写在 module.exports 中
  module.exports = {
    
    mode: 'development',

     // 指定入口文件
     entry: "./src/index.ts",
  
     // 指定打包文件所在目录
     output: {
         // 指定打包后的目录
         path: path.resolve(__dirname, 'dist'),
  
         // 打包后文件的文件名
         filename: "bundle.js"
     },

     devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true,
      },

      devtool: 'inline-source-map',
  
  
     // 指定 webpack 打包时要使用模块
     module: {
  
         // 指定要加载的规则
         rules: [{
             // test 指定规则生效的文件
             test: /\.ts$/,
             // 要使用的 loader
             use: 'ts-loader',
             // 要排除的文件
             exclude: /node_modules/
         }],
  
     },

     resolve: {
         extensions: ['.ts', '.js']
     },

     plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: 'LDR',
            template: './src/index.html',
        })
     ],
  }