import { AsyncThunkOptions, createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string
}



export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (userData, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI
        try {
            const response = await extra.api.post<User>('/login', userData )
            console.log(response)
      
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem( LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data

        } catch (error) {
            return rejectWithValue(error)
        }
    },
)