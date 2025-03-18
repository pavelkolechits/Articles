import { BuildOptions } from "../types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.(sa|sc|c)ss$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
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
}