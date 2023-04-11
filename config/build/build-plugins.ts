import {
  ProgressPlugin, WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export function buildPlugins(options: IBuildOptions): Array<WebpackPluginInstance> {
  const { paths, isDev } = options;

  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
  }

  return plugins;
}
