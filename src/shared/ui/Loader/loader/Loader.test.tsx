import {  render, screen } from '@testing-library/react'
import { Loader } from '../loader/Loader'
import { PageLoader } from '../PageLoader/PageLoader'



describe('Loader, PageLoader components', () => {
    test('render Loader', () => {
        render(<Loader />);
        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
    test('render PageLoader', () => {
        render(<PageLoader />);
        expect(screen.getByTestId('page-loader')).toBeInTheDocument()
    })
})