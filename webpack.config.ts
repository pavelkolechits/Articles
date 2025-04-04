import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import webpack from "webpack";
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {

    const mode: BuildMode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000
    const apiUrl = env.apiUrl || 'http://localhost:3000'

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src')
    }

    const config: webpack.Configuration = buildWebpackConfig({ paths, isDev, mode, port: PORT, apiUrl })

    return config;
}

