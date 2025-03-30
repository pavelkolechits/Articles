import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from './Modal'
import { renderComponent } from 'shared/helpers/tests/renderComponent/renderComponent';


describe('Modal component', () => {

    test('render opened Modal', () => {
        renderComponent(<Modal isOpen onClose={() => false}/>);
        expect(screen.getByTestId('modal')).toHaveClass('opened')
    })

    test('render opened Modal without portal', () => {
        render(<Modal withoutPortal isOpen onClose={() => false}/>);
        expect(screen.getByTestId('modal-without-portal')).toBeInTheDocument()
    })

    test('render opened Modal without content', () => {
        render(<Modal isOpen onClose={() => false}/>);
        expect(screen.getByTestId('content')).toBeEmptyDOMElement()
    })

    test('render opened Modal with content', () => {
        render(<Modal isOpen onClose={() => false}>content</Modal>);
        expect(screen.getByTestId('content')).not.toBeEmptyDOMElement()
    })

    test('render closed Modal', () => {
        render(<Modal isOpen={false} onClose={() => true}/>);
        expect(screen.getByTestId('modal')).not.toHaveClass('opened')
    })
})