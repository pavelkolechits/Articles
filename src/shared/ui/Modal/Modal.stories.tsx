import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import cls from './Modal.module.scss'
import { createPortal } from 'react-dom'

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        children: 'content',
        withoutPortal: true
    }
}
