import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleComment, ArticleCommentsSchema } from '../types/ArticleCommentsSchema'
import { StateSchema } from 'app/providers/StoreProvider'
import { fetchArticleComments } from '../services/fetchArticleComments'
import { error } from 'console'


const articleCommentsAdapter = createEntityAdapter({
    selectId: (comment: ArticleComment) => comment.id
})

const initialState = articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}

})

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments || initialState
)


const articleCommentsSlice = createSlice({
    name: 'articleCommentsSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchArticleComments.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            fetchArticleComments.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            fetchArticleComments.fulfilled, (state, action: PayloadAction<ArticleComment[]>) => {
                state.isLoading = false;
                state.error = undefined;
                articleCommentsAdapter.setAll(state, action.payload)
            }
        )
    }
})

export const {
    reducer: articleCommentsReducer,
    actions: articleCommentsActions
} = articleCommentsSlice