import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import axios, { AxiosError } from "axios"
import { userActions } from "entities/User"
import { ResponseAuthData } from "entities/User/model/types/UserSchema"
import { LOCAL_STORAGE_USER_KEY } from "shared/consts/localStorage"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleComment } from "../types/ArticleCommentsSchema"


export const fetchArticleComments = createAsyncThunk<
    ArticleComment[],
    number,
    ThunkConfig
>(
    'article/fetchArticleComments',
    async (articleId, thunkAPI) => {
        const { rejectWithValue } = thunkAPI

        try {
            const response = await axios.get<ArticleComment[]>(`http://localhost:8000/comments/${articleId}`)

            if (!response.data) {
                throw new AxiosError()
            }


            return response.data

        } catch (error) {
            const err = axiosErrorHandler(error)
            return rejectWithValue(err)
        }
    },
)