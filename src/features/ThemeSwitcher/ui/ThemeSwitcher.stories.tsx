import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import cls from './ThemeSwitcher.module.scss'
const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        className: cls['story-theme-switcher']
    },
}