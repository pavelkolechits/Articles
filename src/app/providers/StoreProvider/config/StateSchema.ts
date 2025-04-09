import { EnhancedStore, SerializedError } from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { ProfileSchema } from "entities/Profile";
import { AxiosError, AxiosInstance } from "axios";
import { LoginSchema } from "features/AuthByEmail";
import { RegistrationSchema } from "features/Registration";




export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
    profile?: ProfileSchema;
    registration?: RegistrationSchema
}

export type StateSchemaKey = keyof StateSchema


export type ReducerManager = ReturnType<typeof createReducerManager>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
    api: AxiosInstance
}

export interface ThunkConfig{
    rejectValue: string ;
    extra: ThunkExtraArgs;
    state: StateSchema,
}