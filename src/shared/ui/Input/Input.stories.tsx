import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
    title: 'shared/Input',
    component: Input
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        placeholder: 'placeholder',
        max: false,
        text: 'text',
        readonly: false,
        textAlign: 'center'
    },
}

export const TextStart: Story = {
    args: {
        placeholder: 'placeholder',
        max: false,
        text: 'text',
        readonly: false,
        textAlign: 'start'
    },
}
export const TextEnd: Story = {
    args: {
        placeholder: 'placeholder',
        max: false,
        text: 'text',
        readonly: false,
        textAlign: 'end'
    },
}