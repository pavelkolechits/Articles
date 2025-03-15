import { render, screen } from '@testing-library/react'
import { Button } from './Button'



describe('Button component', () => {
    test('render button', () => {
        render(<Button>click</Button>);
        expect(screen.getByText('click')).toBeInTheDocument()
    })
    test('render button wicth clear theme', () => {
        render(<Button theme='clear'>click</Button>);
        expect(screen.getByText('click')).toHaveClass('clear')
    screen.debug()
    })
})