import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(options: IBuildOptions): Array<WebpackPluginInstance> {
  const { paths } = options;

  return ([
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin()
  ])
}
