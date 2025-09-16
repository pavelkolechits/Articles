import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticleListHasMore,
    getArticleListIsLoading,
    getArticleListPageNumber
} from '../selectors/articleListPageSelectors';
import { articleListPageAction } from '../slices/articleListPageSlice';
import { fetchArticleList } from './fetchArticleList';



export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig
>(
    'articleListPage/fetchNextArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const page = getArticleListPageNumber(getState())
        const hasMore = getArticleListHasMore(getState())
        const isLoading = getArticleListIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articleListPageAction.setPage(page + 1))
            dispatch(fetchArticleList({replace: false}))
        }

    },
);