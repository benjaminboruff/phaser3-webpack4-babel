const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
              test: [ /\.vert$/, /\.frag$/ ],
              use: 'raw-loader'
            }
        ]
      },
      plugins: [
          new webpack.DefinePlugin({
              'CANVAS_RENDERER': JSON.stringify(true),
              'WEBGL_RENDERER': JSON.stringify(true)
          })
      ],
      output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
      }
}