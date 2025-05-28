import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { getUserAuthData } from "entities/User"


export const publishArticle = createAsyncThunk<number, void, ThunkConfig>(
    'create_article/publishArticle',
    async (_, thunkAPI) => {

        const { getState, extra, rejectWithValue } = thunkAPI

        const article = getCreateArticleData(getState())
        const userId = getUserAuthData(getState())?.user.id

        const data = { ...article, views: 0, userId, type: ['IT'] }

        try {
            console.log(data)
            const response = await extra.api.post<number>('/articles', data)

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