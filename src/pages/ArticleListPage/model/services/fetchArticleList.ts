import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import {
    getArticleListLimit,
    getArticleListOrder,
    getArticleListPageNumber,
    getArticleListSearch,
    getArticleListSort
} from '../selectors/articleListPageSelectors';

export interface FetchArticleListProps {
    replace?: boolean
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

        const limit = getArticleListLimit(getState())

        const page = getArticleListPageNumber(getState())
        const sort = getArticleListSort(getState())
        const order = getArticleListOrder(getState())
        const search = getArticleListSearch(getState())

        try {

            const response = await extra.api.get<FetchArticleListResponse>(`/articles`,
                {
                    params: { page, limit, sort, order, q: search }
                });
            return response.data;
        } catch (e) {

            return rejectWithValue('error');
        }
    },
);