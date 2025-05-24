import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleTextBlock } from "entities/Article/model/types/article"


export const deleteArticleBlock = createAsyncThunk<unknown, string, ThunkConfig>(
    'create_article/deleteArticleBlock',
    async (blockId, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const articleId = getCreateArticleData(getState())?.id ?? ''

        try {
            const response =  await  extra.api.delete<unknown>(
                `/text`,
                {
                    data: {
                        articleId,
                        blockId
                    }
                }
            )

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