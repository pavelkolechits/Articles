import { EnhancedStore } from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { LoginSchema } from "features/AuthByEmail";
import { RegistrationSchema } from "features/Registration";
import { ArticleSchema } from "entities/Article";
import { ArticleCommentsSchema } from "pages/ArticlePage/model/types/ArticleCommentsSchema";
import { CreateArticleSchema } from "features/CreateArticleCard/model/types/createArticleSchema";
import { AddNewCommentSchema } from "features/AddNewComment/model/types/addNewComment";




export interface StateSchema {
    user: UserSchema;
    login?: LoginSchema;
    profile?: ProfileSchema;
    registration?: RegistrationSchema,
    article?: ArticleSchema;
    articleComments?: ArticleCommentsSchema,
    createArticle?: CreateArticleSchema,
    articleDraft?: ArticleSchema,
    addNewComment?: AddNewCommentSchema
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
    rejectValue: string;
    extra: ThunkExtraArgs;
    state: StateSchema,
}