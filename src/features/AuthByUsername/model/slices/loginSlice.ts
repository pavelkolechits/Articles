import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsename'



const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
      
        builder.addCase(
            loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            }
        ),
        builder.addCase(
            loginByUsername.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            }
        ),
        builder.addCase(
            loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error as string
    
            }
        )
    },
})

export const { reducer: loginReducer, actions: loginActions } = loginSlice