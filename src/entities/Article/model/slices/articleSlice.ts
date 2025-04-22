import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema } from '../types/articleSchema'
import { fetchArticleById } from '../services/fetchArticleById'
import { Article } from '../types/article'




const initialState: ArticleSchema = {
    isLoading: false
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(
            fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false
                state.data = action.payload
            }
        ),
        builder.addCase(
            fetchArticleById.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            }
        ),
        builder.addCase(
            fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload

            }
        )
    },
})

export const { reducer: articleReducer, actions: articleActions } = articleSlice