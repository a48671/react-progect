import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { IBuildEnv } from './config/build/types/config';

export default ({ port, mode }: IBuildEnv): Configuration => {
  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      output: path.resolve(__dirname, 'dist'),
      src: path.resolve(__dirname, 'src')
    },
    isDev: mode === 'development',
    port
  })
};
