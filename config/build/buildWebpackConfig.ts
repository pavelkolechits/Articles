import  webpack  from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev, port } = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options),
           
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: buildDevServer(options)
    }
    
} 