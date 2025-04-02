import { Action, configureStore, EnhancedStore, Reducer, ReducersMapObject, ThunkDispatch } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

export function createReduxStore(initialState: StateSchema): ReduxStoreWithManager {


    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    }) as ReduxStoreWithManager

    store.reducerManager = reducerManager

    return store
}


export type AppDispatch = ThunkDispatch<StateSchema, undefined, Action>