import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/UserSchema'




const initialState: UserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        }
    },
})

export const { reducer: userReducer, actions: userActions } = userSlice

