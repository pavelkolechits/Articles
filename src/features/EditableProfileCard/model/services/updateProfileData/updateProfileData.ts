import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Profile } from "entities/Profile"
import { getProfileFormData } from "../../selectors/profileSelectors"
import { AxiosError } from "axios"

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        
        const formData = getProfileFormData(getState())
        try {
            const response = await extra.api.put<Profile>('/profile', formData)
      
            if (!response.data) {
                throw new AxiosError()
            }

            return response.data

        } catch (error) {
            return rejectWithValue((error as AxiosError).message )
        }
    },
)