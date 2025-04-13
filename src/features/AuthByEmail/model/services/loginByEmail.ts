import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { userActions } from 'entities/User';
import { ResponseAuthData } from 'entities/User/model/types/UserSchema';
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';
import { axiosErrorHandler } from 'shared/helpers/axiosErrorHandler/axiosErrorHandler';

interface LoginByEmailProps {
    email: string;
    password: string
}



export const loginByEmail = createAsyncThunk<
    ResponseAuthData,
    LoginByEmailProps,
    ThunkConfig
>(
    'login/loginByUsername',
    async ({ email, password }, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI

        try {
            const response = await extra.api.post<ResponseAuthData>('/auth/login', { email, password })

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