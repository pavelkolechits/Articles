import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next'
import { globalIgnores } from "eslint/config"
import reactHooks from 'eslint-plugin-react-hooks';


/** @type {import('eslint').Linter.Config[]} */
export default [
    globalIgnores(
        ['**/*.test.{ts,tsx}',
            '**/src/**/*.stories.{ts,tsx}'
        ]),
    {
        languageOptions: { globals: globals.browser },

        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat['jsx-runtime'],
    i18next.configs['flat/recommended'],
    reactHooks.configs['recommended-latest'],
    {
        rules: {
            'max-len': ['warn', {
                comments: 300,
                code: 120,
            }],
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'indent': [2, 4, {
                ignoreComments: true
            }],
            'react/jsx-filename-extension': [2, {
                extensions: ['.js', '.jsx', '.tsx'],
            }],
            'import/no-unresolved': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            "@typescript-eslint/no-unused-vars": "warn",
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/prop-types': 'off',
            'react/display-name': 'off',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'no-underscore-dangle': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'no-param-reassign': 'off',
            'no-plusplus': 'off',
            'arrow-body-style': 'off',
            "@typescript-eslint/no-unused-expressions": "off"
        },
    },

];