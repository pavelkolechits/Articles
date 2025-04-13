import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Profile } from "entities/Profile"
import { getProfileFormData } from "../../selectors/profileSelectors"
import { AxiosError } from "axios"
import { getUserAuthData } from "entities/User"

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
    'profile/updateProfileData',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const user = getUserAuthData(getState())
        const token = user?.token
        const formData = getProfileFormData(getState())

        try {
            const response = await extra.api.put<Profile>(
                `/profile/${id}`,
                formData,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data'
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