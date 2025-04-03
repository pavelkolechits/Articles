import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string
}



export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async (userData, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI
        try {
            const response = await axios.post<User>('http://localhost:8000/login', userData )
      
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