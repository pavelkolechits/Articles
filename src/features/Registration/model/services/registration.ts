import { AsyncThunkOptions, createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import { ThunkConfig, ThunkExtraArgs } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { User, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';
import { axiosErrorHandler } from 'shared/helpers/axiosErrorHandler/axiosErrorHandler';

interface RegistrationProps {
    email: string;
    password: string
}



export const registration = createAsyncThunk<
    User,
    RegistrationProps,
    ThunkConfig
>(
    'registration/registration',
    async ({ email, password }, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI

        try {
            const response = await extra.api.post<User>('/auth/registration', { email, password })

            if (!response.data) {
                throw new AxiosError()
            }

            // localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            // dispatch(userActions.setAuthData(response.data))
            return response.data

        } catch (error) {
            const err = axiosErrorHandler(error)
            return rejectWithValue(err)
        }
    },
)