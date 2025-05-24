import { StateSchema } from "app/providers/StoreProvider";

export const getCreateArticleTitle = (
    state: StateSchema
) => state.createArticle?.article?.title ?? ''

export const getCreateArticleSubTitle = (
    state: StateSchema
) => state.createArticle?.article?.subtitle ?? ''

export const getCreateArticleData = (
    state: StateSchema
) => state.createArticle?.article


