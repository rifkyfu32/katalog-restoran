/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/public/favicon.ico'),
      title: 'Delizia Apps',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Delizia App',
      short_name: 'Delizia',
      description: 'Aplikasi pencarian restaurant Delizia',
      background_color: '#ffffff',
      theme_color: '#810000',
      gcm_sender_id: '72344101608',
      icons: [
        {
          src: path.resolve('src/public/icons/favicon-128.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/public/icons/favicon-512.png'),
          size: '1024x1024',
        },
        {
          src: path.resolve('src/public/icons/favicon-512.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};
