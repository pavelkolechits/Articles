import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { renderWithProviders } from 'shared/helpers/tests/renderComponent/renderWithProviders'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,

} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    },
}