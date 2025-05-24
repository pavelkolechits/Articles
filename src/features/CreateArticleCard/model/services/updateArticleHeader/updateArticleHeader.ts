import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { getUserAuthData } from "entities/User"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleHeaderResponse } from "../createArticleHeader/createArticleHeader"


export const updateArticleHeader = createAsyncThunk<ArticleHeaderResponse, FormData | null, ThunkConfig>(
    'create_article/updateArticleHeader',
    async (formData, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const articleHeaderData = getCreateArticleData(getState())
        const userId = getUserAuthData(getState())?.user.id
        let updateData
        if (formData && userId) {
            formData.append('title', articleHeaderData?.title ?? '')
            formData.append('subtitle', articleHeaderData?.subtitle ?? '')
            formData.append('userId', String(userId))
            formData.append('id', '20')

            updateData = formData
        } else if (userId) {
            updateData = {
                title: articleHeaderData?.title ?? '',
                subtitle: articleHeaderData?.subtitle ?? '',
                userId,
                id: 20
            }
        }
        try {
            const response = await extra.api.put<ArticleHeaderResponse>(
                `/create_draft`,
                updateData,
                {
                    headers: {
                        // Authorization: 'Bearer ' + token,
                        'Content-Type': formData ? 'multipart/form-data' : 'application/json'

                    }
                })

            if (!response.data) {
                throw new AxiosError()
            }

            return { ...response.data, image: 'http://localhost:7000' + response.data.image } 

        } catch (error) {
            const err = axiosErrorHandler((error as AxiosError).message)
            return rejectWithValue(err)
        }
    },
)