import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';

export interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
    IArticle[],
    void,
    ThunkConfig
>(
    'articleListPage/fetchArticleList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
       
        try {

            const response = await extra.api.get<IArticle[]>('/articles');
            return response.data;
        } catch (e) {
            
            return rejectWithValue('error');
        }
    },
);