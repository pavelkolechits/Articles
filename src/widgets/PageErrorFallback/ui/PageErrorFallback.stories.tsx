import type { Meta, StoryObj } from '@storybook/react'
import { PageErrorFallback } from './PageErrorFallback'

const meta = {
    title: 'widgets/PageErrorFallback.stories',
    component: PageErrorFallback
} satisfies Meta<typeof PageErrorFallback>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    },
}