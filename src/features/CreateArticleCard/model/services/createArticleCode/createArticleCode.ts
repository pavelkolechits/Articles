import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleCodeBlock, ArticleTextBlock } from "entities/Article/model/types/article"


export const createArticleCode = createAsyncThunk<ArticleCodeBlock, ArticleCodeBlock, ThunkConfig>(
    'create_article/createArticleCode',
    async (data, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const articleId = getCreateArticleData(getState())?.id
       
        try {
            const response = await extra.api.post<ArticleCodeBlock>(
                `/code`,
                {
                    articleId, 
                    blockId: data.id,
                    code: data.code ?? '',
                    
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