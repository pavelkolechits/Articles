import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { AxiosError } from "axios"
import { getCreateArticleData } from "../../selectors/createArticleSelectors"
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler"
import { ArticleTextBlock } from "entities/Article/model/types/article"


export type BlockEndpoint = 'text' | 'img' | 'code'



export const deleteArticleBlock = createAsyncThunk<void, {blockId: string, endpoint: BlockEndpoint}, ThunkConfig>(
    'create_article/deleteArticleBlock',
    async ({blockId, endpoint}, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const articleId = getCreateArticleData(getState())?.id ?? ''

        try {
            const response =  await  extra.api.delete<void>(
                `/${endpoint}`,
                {
                    data: {
                        articleId,
                        blockId
                    }
                }
            )

       

        } catch (error) {
            const err = axiosErrorHandler((error as AxiosError).message)
            return rejectWithValue(err)
        }
    },
)