import type { Meta, StoryObj } from '@storybook/react'
import { LanguageSwitcher } from './LanguageSwitcher'

const meta = {
    title: 'features/LanguageSwitcher',
    component: LanguageSwitcher
} satisfies Meta<typeof LanguageSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    },
}