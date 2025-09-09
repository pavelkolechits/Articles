import {
    Action,
    configureStore,
    ReducersMapObject,
    ThunkDispatch,
    ThunkMiddleware,
    Tuple,
    UnknownAction
} from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchema, ThunkExtraArgs } from './StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { scrollPositionReducer } from 'features/ScrollPosition'

const extraArgs: ThunkExtraArgs = {
    api: $api
}

export function createReduxStore(initialState: StateSchema): ReduxStoreWithManager {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        scrollPosition: scrollPositionReducer
    }
    const reducerManager = createReducerManager(rootReducers)
   
    const store = configureStore<
        StateSchema,
        UnknownAction,
        Tuple<[ThunkMiddleware<StateSchema, UnknownAction, ThunkExtraArgs>]>>({
            
            reducer: reducerManager.reduce,
            devTools: __IS_DEV__,
            preloadedState: initialState,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                thunk:
                    { extraArgument: extraArgs }
            })
        }) as ReduxStoreWithManager

    store.reducerManager = reducerManager
    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArgs, Action>