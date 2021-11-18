const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          //MiniCssExtractPlugin.loader,
          'style-loader', 'css-loader', 'sass-loader', 'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
         // MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
        ],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'App1',
      filename: 'remoteEntry.js',
      exposes: {
        './bootstrap': './src/bootstrap.tsx'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: "./index.html"
    })
  ]
};
