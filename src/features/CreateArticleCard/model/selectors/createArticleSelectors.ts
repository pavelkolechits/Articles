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
export const getTextBlockTitle = (
    state: StateSchema
) => state.createArticle?.article.textBlockDraft?.title ?? ''
export const getTextBlockText = (
    state: StateSchema
) => state.createArticle?.article.textBlockDraft.text ?? ''



