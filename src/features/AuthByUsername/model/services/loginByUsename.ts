import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'

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
            console.log(response)
            if (!response.data) {
                throw new Error()
            }
            dispatch(userActions.setAuthData(response.data))
            return response.data

        } catch (error) {

            return rejectWithValue(error)
        }


    },
)