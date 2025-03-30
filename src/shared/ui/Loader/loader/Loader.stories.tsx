import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    decorators: [
        (Story) => (
          <div style={{ padding: '50px' }}>
            <Story />
          </div>
        ),
      ],
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    },
}