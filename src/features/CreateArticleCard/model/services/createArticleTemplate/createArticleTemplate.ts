import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Profile } from "entities/Profile"
import { AxiosError } from "axios"
import { getUserAuthData } from "entities/User"
import { CreateArticleSchema } from "../../types/createArticleSchema"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { createArticleActions } from "../../slices/createArticleSlice"

export interface ArticleHeaderResponse {
    id: string,
    userId: string,
    image: string,
    title: string
}

export const createArticleTemplate = createAsyncThunk<ArticleHeaderResponse, FormData | null, ThunkConfig>(
    'create_article/createArticleTemplate',
    async (formData, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const articleHeaderData = getCreateArticleData(getState())
        const userId = getUserAuthData(getState())?.user.id
        if (formData && userId) {
            formData.append('title', articleHeaderData?.title ?? '')
            formData.append('subtitle', articleHeaderData?.subtitle ?? '')
            formData.append('userId', String(userId))
        }
        try {
            const response = await extra.api.post<ArticleHeaderResponse>(
                `/create_draft`,
                formData,
                {
                    headers: {
                        // Authorization: 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data'
                    }
                })

            if (!response.data) {
                throw new AxiosError()
            }

            return { ...response.data, image: 'http://localhost:7000/' + response.data.image }

        } catch (error) {
            const err = axiosErrorHandler((error as AxiosError).message)
            return rejectWithValue(err)
        }
    },
)