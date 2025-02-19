import  webpack  from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader =  {
        test: /\.(sa|sc|c)ss$/,
        use: [
          options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: options.isDev
                      ? '[path][name]__[local]--[hash:base64:5]'
                      : '[hash:base64:8]',
                      namedExport: false,
                      exportLocalsConvention: 'as-is',
              },
          },
          },
          "sass-loader",
        ],
      }

    return [ typescriptLoader, cssLoader ]
}