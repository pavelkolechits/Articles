import { AsyncThunkOptions, createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import { ThunkConfig, ThunkExtraArgs } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
    email: string;
    password: string
}



export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig
>(
    'login/loginByUsername',
    async ({ email, password }, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI

        try {
            const response = await extra.api.post<User>('/login', { email, password })

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