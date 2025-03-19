import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'


const meta = {
    title: 'shared/AppLink',
    component: AppLink
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'link',
        to: '/',
        theme: 'primary'
    },
}
export const Inverted: Story = {
    args: {
        children: 'link',
        to: '/',
        theme: 'inverted'
    },
}