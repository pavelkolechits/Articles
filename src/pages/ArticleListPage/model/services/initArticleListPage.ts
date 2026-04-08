import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticleListInited,
} from '../selectors/articleListPageSelectors';
import { articleListPageAction } from '../slices/articleListPageSlice';
import { fetchArticleList } from './fetchArticleList';
import { SortField, SortOrder } from 'shared/types/sort';
import { ArticleType } from 'entities/Article';



export const initArticleListPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig
>(
    'articleListPage/initArticleListPage',
    async (searchParams, thunkApi) => {

        const sortFromUrl = searchParams.get('sort') as SortField
        const orderFromUrl = searchParams.get('order') as SortOrder
        const typeFromUrl = searchParams.get('type') as ArticleType
        const searchFromUrl = searchParams.get('q')

        const { getState, dispatch } = thunkApi;

        const inited = getArticleListInited(getState())


        if (!inited) {

            if (sortFromUrl) {
                dispatch(articleListPageAction.setSort(sortFromUrl))
            }
            if (orderFromUrl) {
                dispatch(articleListPageAction.setOrder(orderFromUrl))
            }
            if (typeFromUrl) {
                dispatch(articleListPageAction.setType(typeFromUrl))
            }
            if (searchFromUrl) {
                dispatch(articleListPageAction.setSearch(searchFromUrl))
            }

            dispatch(articleListPageAction.initState())
            dispatch(fetchArticleList({ replace: false }))

        }

    },
);