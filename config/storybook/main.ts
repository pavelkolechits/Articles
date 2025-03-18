import type { StorybookConfig } from '@storybook/react-webpack5';
import webpack, { DefinePlugin } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    staticDirs: ['../../public'],
    stories: [
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        'storybook-react-i18next',
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config): Promise<webpack.Configuration> => {
        if (config.plugins) {
            config.plugins.push(new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('')
            }));
        }
        return {
            ...config,
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
                preferAbsolute: true,
                modules: ['../../src', 'node_modules'],
                mainFiles: ['index'],

            },
            module: {
                rules: [
                    buildCssLoader(true),
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.svg$/,
                        use: ['@svgr/webpack'],

                    }
                ]
            },
        };
    },
};
export default config;