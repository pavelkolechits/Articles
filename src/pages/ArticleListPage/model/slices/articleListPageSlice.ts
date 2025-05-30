
import { EntityState, PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";
import { ArticleListPageSchema } from "../types/articleListPageSchema";
import { ArticleView } from "entities/Article/model/types/article";
import { fetchArticleList } from "../services/fetchArticleList";






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
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
           
        },
        // initState: (state) => {

        //     state.view = view;
        //     state.limit = ArticleView.TILE ? 9 : 4;
        //     state._inited = true;
        // },
        // setPage: (state, action: PayloadAction<number>) => {
        //     state.page = action.payload;
        // },
        // setSearch: (state, action: PayloadAction<string>) => {
        //     state.search = action.payload;
        // },
        // setOrder: (state, action: PayloadAction<SortOrder>) => {
        //     state.order = action.payload;
        // },
        // setSort: (state, action: PayloadAction<ArticleSortField>) => {
        //     state.sort = action.payload;
        // },
        // setType: (state, action: PayloadAction<ArticleType>) => {
        //     state.type = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                
                articlesAdapter.removeAll(state);
                
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
               
                articlesAdapter.setAll(state, action.payload);
               
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
