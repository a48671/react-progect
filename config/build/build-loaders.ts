import { RuleSetRule } from 'webpack';
import { IBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({ isDev }: IBuildOptions): Array<RuleSetRule> {
  const typescript = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const sassLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resourcePath: string) => resourcePath.includes('.module.'),
              localIdentName: isDev? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
            }
          }
        },
        "sass-loader"
      ]
    };

  return ([typescript, sassLoader]);
}
