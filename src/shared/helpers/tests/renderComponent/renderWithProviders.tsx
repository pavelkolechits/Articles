import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoreProvider'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { AppStore } from 'app/providers/StoreProvider/config/store'


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<StateSchema>
    store?: AppStore
}

export function renderWithProviders(
    ui: React.ReactElement,
    extendedRenderOptions: ExtendedRenderOptions = {}
) {
    const {
        preloadedState = {},
    
        store = createReduxStore(preloadedState as StateSchema),
        ...renderOptions
    } = extendedRenderOptions

    const Wrapper = ({ children }: PropsWithChildren) => (
        <Provider store={store}>{children}</Provider>
    )


    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions })
    }
}