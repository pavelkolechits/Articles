import { fireEvent, screen } from '@testing-library/react'
import { AppLink } from './AppLink'
import { renderComponent } from 'shared/helpers/tests/renderComponent/renderComponent';


describe('AppLink component', () => {
    test('render AppLink', () => {
        renderComponent(<AppLink to='/'>click</AppLink>);
        expect(screen.getByTestId('link')).toBeInTheDocument()
    })
    test('render AppLink with inverted theme', () => {
        renderComponent(<AppLink to='/' theme='inverted'>click</AppLink>);
        expect(screen.getByTestId('link')).toHaveClass('inverted')
    })
})
