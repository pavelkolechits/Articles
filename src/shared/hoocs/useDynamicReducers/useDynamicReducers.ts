import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { useEffect } from "react";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
    [key in StateSchemaKey]?: Reducer
}

export interface UseDynamicReducersProps {
    reducers: ReducerList;
    removeAfterAnmount?: boolean
}

export function useDynamicReducers(props: UseDynamicReducersProps) {
    const { reducers, removeAfterAnmount = true } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        for (let [key, reducer] of Object.entries(reducers)) {

            store.reducerManager.add(key as StateSchemaKey, reducer)
            dispatch({ type: `@INIT ${key} reducer` })
        }
        
        return () => {
            if (removeAfterAnmount) {

                for (let [key] of Object.entries(reducers)) {

                    store.reducerManager.remove(key as StateSchemaKey)
                    dispatch({ type: `@REMOVE ${key} reducer` })
                }
            }
        }
    }, [])

}