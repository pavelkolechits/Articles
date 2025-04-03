import {ReducersMapObject, EnhancedStore, UnknownAction, Action } from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { Reducer } from "react";
import { createReducerManager } from "./reducerManager";
import { ProfileSchema } from "entities/Profile";




export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema


export type ReducerManager = ReturnType<typeof createReducerManager>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}