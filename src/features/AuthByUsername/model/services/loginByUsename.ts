import { AsyncThunkOptions, createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import { ThunkConfig, ThunkExtraArgs } from 'app/providers/StoreProvider';
import axios, { AxiosInstance } from 'axios'
import { User, userActions } from 'entities/User'
import { $api } from 'shared/api/api';
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string
}



export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig
    >(
        'login/loginByUsername',
        async ({username, password}, thunkAPI) => {
            const { rejectWithValue, dispatch, extra } = thunkAPI
            
            try {
                const response = await extra.api.post<User>('/login', {username, password})
    
                if (!response.data) {
                    throw new Error()
                }
                localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
                dispatch(userActions.setAuthData(response.data))
                return response.data

            } catch (error) {
                return rejectWithValue(error as SerializedError)
            }
        },
    )