import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { getUserAuthData } from "entities/User"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleSchema, IArticle } from "entities/Article"
import { CreateArticleSchema } from "../../types/createArticleSchema"


export const fetchArticleDraft = createAsyncThunk<IArticle, void, ThunkConfig>(
    'create_article/fetchArticleDraft',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const userId = getUserAuthData(getState())?.user.id
     
        try {
            const response = await extra.api.get<IArticle>(`/create_draft/${userId}`,)

            if (!response.data) {
                throw new AxiosError()
            }

            return response.data 

        } catch (error) {
            const err = axiosErrorHandler((error as AxiosError).message)
            return rejectWithValue(err)
        }
    },
)