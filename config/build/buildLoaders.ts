import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const babelLoader = {
        test: /\.(js|ts|tsx)/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ["i18next-extract", {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }],

                ]
            }
        }
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = buildCssLoader(options.isDev)

    return [
        babelLoader,
        cssLoader,
        svgLoader,
        fileLoader,
        typescriptLoader,
    ]
}