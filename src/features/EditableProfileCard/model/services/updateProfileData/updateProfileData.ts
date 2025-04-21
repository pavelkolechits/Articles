import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Profile } from "entities/Profile"
import { getProfileFormData } from "../../selectors/profileSelectors"
import { AxiosError } from "axios"
import { getUserAuthData } from "entities/User"

export const updateProfileData = createAsyncThunk<Profile, FormData | null, ThunkConfig>(
    'profile/updateProfileData',
    async (formData, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const userAuthData = getUserAuthData(getState())
        const id = userAuthData?.user.id
        const token = userAuthData?.token
        const profileData = getProfileFormData(getState())
        let updateProfileData 

        if (formData) {
            formData.append('age', profileData?.age ?? '')
            formData.append('firstname', profileData?.firstname ?? '')
            formData.append('lastname', profileData?.lastname ?? '')
            formData.append('sity', profileData?.city ?? '')
            formData.append('currency', profileData?.currency ?? '')
            formData.append('country', profileData?.country ?? '')
            updateProfileData = formData
        } else {
            updateProfileData = {...profileData, avatar: '' }
        }
      

        try {
            const response = await extra.api.put<Profile>(
                `/profile/${id}`,
                updateProfileData,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data'
                    }
                })

            if (!response.data) {
                throw new AxiosError()
            }

            return {...response.data, avatar: 'http://localhost:7000/' + response.data.avatar}

        } catch (error) {
            return rejectWithValue((error as AxiosError).message)
        }
    },
)