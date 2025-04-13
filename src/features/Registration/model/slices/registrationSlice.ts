import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { RegistrationSchema } from '../types/registrationShema'
import { registration } from '../services/registration'
import { validateEmail } from 'shared/helpers/validators/emailValidator/emailValidator'
import { passwordValidator } from 'shared/helpers/validators/passwordValidator/passwordValidator'




const initialState: RegistrationSchema = {
    email: '',
    password: '',
    isLoading: false
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.isValidEmail = validateEmail(action.payload)
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
            state.isValidPassword = passwordValidator(action.payload)
        }
    },
    extraReducers: (builder) => {
      
        builder.addCase(
            registration.fulfilled, (state) => {
                state.isLoading = false
            }
        ),
        builder.addCase(
            registration.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            }
        ),
        builder.addCase(
            registration.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
    
            }
        )
    },
})

export const { reducer: registrationReducer, actions: registrationActions } = registrationSlice