import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article/model/selectors/articleSelectors';
import { useDispatch } from 'react-redux';
import { fetchArticleComments } from '../services/fetchArticleComments';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig
    >(
        'articleDetails/addCommentForArticle',
        async (text, thunkApi) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkApi;
            const userData = getUserAuthData(getState());
            const article = getArticleData(getState());
            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }
            try {
                const response = await extra.api.post<Comment>('/comments', {
                    userId: userData.user.id,
                    text,
                    articleId: article.id,
                });
                dispatch(fetchArticleComments(Number(article.id)));
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );