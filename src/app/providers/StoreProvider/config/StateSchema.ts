import { EnhancedStore } from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { createReducerManager } from "./reducerManager";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";




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

export interface ThunkExtraArgs {
    api: AxiosInstance
}

export interface ThunkConfig<T>{
    rejectValue: T;
    extra: ThunkExtraArgs;
}