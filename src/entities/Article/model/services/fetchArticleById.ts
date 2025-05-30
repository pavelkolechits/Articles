import { createAsyncThunk } from "@reduxjs/toolkit"
import { IArticle } from "../types/article"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ThunkConfig } from "app/providers/StoreProvider"
import axios from "axios"

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string,
    ThunkConfig
>(
    'article/fetchArticleById',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        try {
            const response = await axios.get<IArticle>(`http://localhost:8000/articles/${id}`)

            return response.data

        } catch (error) {
            const err = axiosErrorHandler(error)
            return rejectWithValue(err)
        }
    },
)