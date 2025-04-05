import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
    title: 'shared/Select',
    component: Select
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        readonly: false,
        textAlign: 'center',
        label: 'select'
    },
}