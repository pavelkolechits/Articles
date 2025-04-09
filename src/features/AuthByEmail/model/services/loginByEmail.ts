import { AsyncThunkOptions, createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import { ThunkConfig, ThunkExtraArgs } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { User, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';
import { axiosErrorHandler } from 'shared/helpers/axiosErrorHandler/axiosErrorHandler';

interface LoginByEmailProps {
    email: string;
    password: string
}



export const loginByEmail = createAsyncThunk<
    User,
    LoginByEmailProps,
    ThunkConfig
>(
    'login/loginByUsername',
    async ({ email, password }, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI

        try {
            const response = await extra.api.post<User>('/auth/login', { email, password })

            if (!response.data) {
                throw new AxiosError()
            }
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data

        } catch (error) {
            const err = axiosErrorHandler(error)
            return rejectWithValue(err)
        }
    },
)