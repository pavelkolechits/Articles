
import { EntityState, PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";
import { ArticleListPageSchema } from "../types/articleListPageSchema";
import { ArticleView } from "entities/Article/model/types/article";
import { fetchArticleList, FetchArticleListResponse } from "../services/fetchArticleList";
import { LOCAL_STORAGE_ARTICLE_VIEW_KEY } from "shared/consts/localStorage";
import { SortField, SortOrder } from "shared/types/sort";






const articlesAdapter = createEntityAdapter<IArticle, string | number>({
    selectId: (article) => article.id,
});


export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articleListPage ?? articlesAdapter.getInitialState(),
);



const articleListPageSlice = createSlice({
    name: 'articleListPageSlice',
    initialState: articlesAdapter.getInitialState<ArticleListPageSchema>({
        entities: {},
        ids: [],
        view: 'list',
        page: 1,
        hasMore: false,
        limit: 4,
        _inited: false,
        order: 'asc',
        search: '',
        sort: 'createdAt'

    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            state.limit = action.payload === 'tile' ? 9 : 4
            localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY, action.payload)
        },
        initState: (state) => {
            const view = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY) as ArticleView
            state.view = view
            state.limit = view === 'tile' ? 9 : 4
            state._inited = true
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<SortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }

            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.hasMore
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload.articles);
                } else {
                    articlesAdapter.addMany(state, action.payload.articles);
                }

            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});
export const {
    actions: articleListPageAction,
    reducer: articleListPageReducer,
} = articleListPageSlice;
