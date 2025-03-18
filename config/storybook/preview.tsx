/* eslint-disable indent */
import type { Preview, StoryContext } from '@storybook/react'
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../src/app/styles/index.scss'
import '../../src/app/styles/themes/dark.scss'
import { I18nextProvider } from 'react-i18next';
import i18n from '../../src/shared/config/i18n/i18n';

const preview: Preview = {
    initialGlobals: {
        locale: 'en',
        locales: {
            en: 'en',
            ru: 'ru'
        },
    },
    parameters: {
        i18n,
    },

    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'normal',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['dark', 'normal', 'none'],
                dynamicTitle: true,
            },
        },
        locale: {
            name: 'Locale',
            description: 'Internationalization locale',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', title: 'en' },
                    { value: 'ru', title: 'ru' },
                ],
                showName: true,
            },
        },
    },
    decorators: [
        (Story, context: StoryContext) => {
            const selectedTheme = context.globals.theme || 'normal';
            let theme = 'normal'
            switch (selectedTheme) {
                case 'normal': {
                    theme = 'normal'
                    break;
                }
                case 'dark': {
                    theme = 'dark'
                    break;
                }
                case 'none' : {
                    theme = ''
                    break
                }
                default:
                    break;
            }
            return (
                <div className={`app ${theme}`}>
                    <BrowserRouter>
                        <Suspense fallback={<div>loading translations...</div>}>
                            <I18nextProvider i18n={i18n}>
                                <Story />
                            </I18nextProvider>
                        </Suspense>
                    </BrowserRouter>
                </div>
            );
        },
    ],
};

export default preview;


