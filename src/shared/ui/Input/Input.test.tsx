import { render, screen } from '@testing-library/react'
import { Input } from './Input'



describe('Input component', () => {
    test('render Input', () => {
        render(<Input/>);
        expect(screen.getByTestId('input')).toBeInTheDocument()
    })

    test('render Input', () => {
        render(<Input/>);
        expect(screen.getByTestId('input')).toBeInTheDocument()
    })
    
})