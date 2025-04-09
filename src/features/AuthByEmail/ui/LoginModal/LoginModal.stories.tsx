import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'

const meta = {
    title: 'features/LoginModal',
    component: LoginModal
} satisfies Meta<typeof LoginModal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true,
        onClose: () => ({}),
        withoutPortal: true
    },
}