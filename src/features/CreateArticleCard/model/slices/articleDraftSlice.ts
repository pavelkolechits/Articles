import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema, IArticle } from 'entities/Article'
import { fetchArticleDraft } from '../services/fetchArticleDraft/fetchArticleDraft'
import { CreateArticleSchema } from '../types/createArticleSchema'




const initialState: ArticleSchema = {
    isLoading: false
}

const articleDraftSlice = createSlice({
    name: 'articleDraft',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchArticleDraft.pending, (state) => {
                state.isLoading = true
            }
        ),
        builder.addCase(
            fetchArticleDraft.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        ),
        builder.addCase(
            fetchArticleDraft.fulfilled, (state, action: PayloadAction<IArticle>) => {
                state.isLoading = false
                state.error = undefined
                state.data = action.payload

            }
        )
    }
})

export const { reducer: articleDraftReducer, actions: articleDraftActions } = articleDraftSlice