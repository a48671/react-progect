import { IBuildOptions } from './types/config';
import { Configuration } from 'webpack';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { buildLoaders } from './build-loaders';
import { buildDevServer } from './build-dev-server';

export function buildWebpackConfig(options: IBuildOptions): Configuration {
  const { paths, isDev, mode, port } = options;
  return ({
    entry: paths.entry,
    output: {
      filename: '[name].[hash].js',
      path: paths.output,
      clean: true
    },
    mode,
    module: {
      rules: buildLoaders(options)
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined
  });
}
