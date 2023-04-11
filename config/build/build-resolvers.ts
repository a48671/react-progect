import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types/config';

export function buildResolvers({ paths }: IBuildOptions): ResolveOptions {
  return ({
    extensions: ['.js', '.ts', '.tsx'],
    preferAbsolute: true,
    alias: {},
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
  });
}
