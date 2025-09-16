import { StateSchema } from "app/providers/StoreProvider";

export const getArticleListView = (state: StateSchema) => state.articleListPage?.view || 'tile'
export const getArticleListLimit = (state: StateSchema) => state.articleListPage?.limit 
export const getArticleListPageNumber = (state: StateSchema) => state.articleListPage?.page ?? 1
export const getArticleListHasMore = (state: StateSchema) => state.articleListPage?.hasMore || false
export const getArticleListIsLoading = (state: StateSchema) => state.articleListPage?.isLoading || false
export const getArticleListInited = (state: StateSchema) => state.articleListPage?._inited
export const getArticleListSort = (state: StateSchema) => state.articleListPage?.sort ?? 'createdAt'
export const getArticleListOrder = (state: StateSchema) => state.articleListPage?.order ?? 'asc'
export const getArticleListSearch = (state: StateSchema) => state.articleListPage?.search ?? ''