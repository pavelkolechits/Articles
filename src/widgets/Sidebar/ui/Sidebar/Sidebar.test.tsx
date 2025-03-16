import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import 'shared/config/i18n/i18nForTests'
import { renderWithTranslation } from 'shared/helpers/tests/renderWithTranslation/renderWithTranslation'



describe('Sidebar', () => {
    test('render sidebar', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })
    test('sidebar toggle', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId('toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
        
})