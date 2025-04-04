import { Action, configureStore, ReducersMapObject, ThunkDispatch } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'

export function createReduxStore(initialState: StateSchema): ReduxStoreWithManager {


    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    }) as ReduxStoreWithManager

    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = ThunkDispatch<StateSchema, undefined, Action>