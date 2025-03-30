import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderComponent } from 'shared/helpers/tests/renderComponent/renderComponent'



describe('Sidebar', () => {
    test('render sidebar', () => {
        renderComponent(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })
    test('sidebar toggle', () => {
        renderComponent(<Sidebar/>);
        const toggleBtn = screen.getByTestId('toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
        
})