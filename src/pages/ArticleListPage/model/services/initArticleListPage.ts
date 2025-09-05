import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticleListInited,
} from '../selectors/articleListPageSelectors';
import { articleListPageAction } from '../slices/articleListPageSlice';
import { fetchArticleList } from './fetchArticleList';



export const initArticleListPage = createAsyncThunk<
    void,
    void,
    ThunkConfig
>(
    'articleListPage/initArticleListPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticleListInited(getState())


        if (!inited) {
            dispatch(articleListPageAction.initState())
            dispatch(fetchArticleList({ page: 1 }))
        }

    },
);