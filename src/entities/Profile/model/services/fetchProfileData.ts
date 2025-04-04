import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { Profile } from "../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { profileActions } from "../slices/profileSlice";





export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    'profile/fetchProfileData',
    async (userData, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
            const response = await extra.api.get<Profile>('/profile')
      
            if (!response.data) {
                throw new Error()
            }

            return response.data

        } catch (error) {
            return rejectWithValue(error as SerializedError)
        }
    },
)