import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { getArticleListLimit } from '../selectors/articleListPageSelectors';

interface FetchArticleListProps {
    page?: number;
    limit?: number
}

export interface FetchArticleListResponse {
    articles: IArticle[] | [],
    hasMore: boolean
}

export const fetchArticleList = createAsyncThunk<
    FetchArticleListResponse,
    FetchArticleListProps,
    ThunkConfig
>(
    'articleListPage/fetchArticleList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { page = 1 } = props
        const limit = getArticleListLimit(getState())
        try {

            const response = await extra.api.get<FetchArticleListResponse>(`/articles`, { params: { page, limit } });
            return response.data;
        } catch (e) {

            return rejectWithValue('error');
        }
    },
);