import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { Profile } from "../../../../../entities/Profile/model/types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AxiosError } from "axios";
import { getUserAuthData } from "entities/User";
import { axiosErrorHandler } from "shared/helpers/axiosErrorHandler/axiosErrorHandler";





export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
    'profile/fetchProfileData',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const userAuthData = getUserAuthData(getState())
        const token = userAuthData?.token

        try {
            const response = await extra.api.get<Profile>(`/profile/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            if (!response.data) {
                throw new AxiosError()
            }

            return { ...response.data, avatar: 'http://localhost:7000/' + response.data.avatar }

        } catch (error) {
            const err = axiosErrorHandler(error)
            return rejectWithValue(err)
        }
    },
)