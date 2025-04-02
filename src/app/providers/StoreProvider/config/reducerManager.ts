import { Action, combineReducers, Reducer, ReducersMapObject, UnknownAction } from "@reduxjs/toolkit"
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema"

export type Reducers = Record<StateSchemaKey, Reducer>

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>)  {
    const reducers: Partial<Reducers> = { ...initialReducers }

    let combinedReducer = combineReducers(reducers as Reducers)
    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: Partial<StateSchema> = {}, action: Action) => {

            if (keysToRemove.length > 0) {
                state = { ...state }
                for (let key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {

            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer
            combinedReducer = combineReducers(reducers as Reducers)
        },
        remove: (key: StateSchemaKey) => {

            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers as Reducers)
        }
    }
}


