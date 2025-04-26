import { IArticle } from "./article";

export interface ArticleSchema {
    isLoading: boolean,
    error?: string,
    data?: IArticle
}