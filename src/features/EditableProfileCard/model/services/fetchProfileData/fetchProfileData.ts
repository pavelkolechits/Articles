import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { Profile } from "../../../../../entities/Profile/model/types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AxiosError } from "axios";
import { getUserAuthData } from "entities/User";





export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
    'profile/fetchProfileData',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const token = getUserAuthData(getState())?.token
       
        try {
            const response = await extra.api.get<Profile>(`/profile/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
      
            if (!response.data) {
                throw new AxiosError()
            }

            return response.data

        } catch (error) {
            return rejectWithValue((error as AxiosError).message)
        }
    },
)