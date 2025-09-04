
import { EntityState, PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";
import { ArticleListPageSchema } from "../types/articleListPageSchema";
import { ArticleView } from "entities/Article/model/types/article";
import { fetchArticleList, FetchArticleListResponse } from "../services/fetchArticleList";
import { LOCAL_STORAGE_ARTICLE_VIEW_KEY } from "shared/consts/localStorage";






const articlesAdapter = createEntityAdapter<IArticle, string | number>({
    selectId: (article) => article.id,
});
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articleListPage || articlesAdapter.getInitialState(),
);



const articleListPageSlice = createSlice({
    name: 'articleListPageSlice',
    initialState: articlesAdapter.getInitialState<ArticleListPageSchema>({
        entities: {},
        ids: [],
        view: 'list',
        page: 1,
        hasMore: false,
        limit: 4
        
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
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                
                // articlesAdapter.removeAll(state);
                
            })
            .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<FetchArticleListResponse>) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload.articles);
                state.hasMore = action.payload.hasMore
                
               
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
