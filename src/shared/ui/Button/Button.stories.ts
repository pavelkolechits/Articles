import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Clear: Story = {
    args: {
        theme: 'clear',
        children: 'button'
    },
}

export const Outline: Story = {
    args: {
        theme: 'outline',
        children: 'button'
    },
}
export const Background: Story = {
    args: {
        theme: 'background',
        children: 'button'
    },
}

export const InvertedBackground: Story = {
    args: {
        theme: 'inverted-background',
        children: 'button'
    },
}