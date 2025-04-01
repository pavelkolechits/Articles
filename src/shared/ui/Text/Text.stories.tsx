import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'


const meta = {
    title: 'shared/Text',
    component: Text
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'title',
        text: 'text',
        theme: 'primary',
        align: 'center',
        size: 'size_l',
    },
}