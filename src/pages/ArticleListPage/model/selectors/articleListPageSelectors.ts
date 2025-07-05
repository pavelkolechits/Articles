import { StateSchema } from "app/providers/StoreProvider";

export const getArticleListView = (state: StateSchema) => state.articleListPage?.view || 'tile'
export const getArticleListLimit = (state: StateSchema) => state.articleListPage?.limit 
export const getArticleListPageNumber = (state: StateSchema) => state.articleListPage?.page
export const getArticleListHasMore = (state: StateSchema) => state.articleListPage?.hasMore