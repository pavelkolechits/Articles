import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../../../../entities/Profile/model/types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { AxiosError } from 'axios'




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
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.formData = state.data;
        },
    
    },
    extraReducers: (builder) => {

        builder.addCase(
            fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload
                state.formData = action.payload
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
                state.error = action.payload 

            }
        ),
        builder.addCase(
            updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload
                state.formData = action.payload
                state.isLoading = false
                state.readonly = true
            }
        ),
        builder.addCase(
            updateProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            }
        ),
        builder.addCase(
            updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload 

            }
        )
    },
})

export const { reducer: profileReducer, actions: profileActions } = profileSlice