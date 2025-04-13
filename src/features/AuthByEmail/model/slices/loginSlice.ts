import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByEmail } from '../services/loginByEmail'
import { AxiosError } from 'axios'
import { validateEmail } from 'shared/helpers/validators/emailValidator/emailValidator'




const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false,

}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
      
        builder.addCase(
            loginByEmail.fulfilled, (state) => {
                state.isLoading = false
            }
        ),
        builder.addCase(
            loginByEmail.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            }
        ),
        builder.addCase(
            loginByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
    
            }
        )
    },
})

export const { reducer: loginReducer, actions: loginActions } = loginSlice