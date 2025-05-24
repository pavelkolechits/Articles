import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleTextBlock } from "entities/Article/model/types/article"


export const createArticleText = createAsyncThunk<ArticleTextBlock, ArticleTextBlock, ThunkConfig>(
    'create_article/createArticleText',
    async (data, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const articleId = getCreateArticleData(getState())?.id
       
        try {
            const response = await extra.api.post<ArticleTextBlock>(
                `/text`,
                {
                    articleId, 
                    blockId: data.id,
                    title: data.title ?? '',
                    text: data.text
                },

                {
                    headers: {
                        // Authorization: 'Bearer ' + token,
                        
                    }
                })

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