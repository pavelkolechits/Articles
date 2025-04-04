import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'




const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    data: undefined,
    error: undefined
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(
            fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload
                state.isLoading = false
            }
        ),
        builder.addCase(
            fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            }
        ),
        builder.addCase(
            fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload?.message

            }
        )
    },
})

export const { reducer: profileReducer, actions: profileActions } = profileSlice