import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { getUserAuthData } from "entities/User"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleImageBlock } from "entities/Article/model/types/article"



export const createArticleImg = createAsyncThunk<
    ArticleImageBlock,
    { formData: FormData | null, blockId: string },
    ThunkConfig
>(
    'create_article/createArticleImg',
    async ({formData, blockId}, thunkAPI) => {

        const { rejectWithValue, extra, getState } = thunkAPI
        const articleHeaderData = getCreateArticleData(getState())

        if (formData && articleHeaderData?.id) {
            formData.append('title', articleHeaderData?.title ?? '')
            formData.append('articleId', articleHeaderData?.id)
            formData.append('blockId', blockId)
        }
        try {
            const response = await extra.api.post<ArticleImageBlock>(
                `/img`,
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

            return { ...response.data, src: 'http://localhost:7000/' + response.data.src }

        } catch (error) {
            const err = axiosErrorHandler((error as AxiosError).message)
            return rejectWithValue(err)
        }
    },
)