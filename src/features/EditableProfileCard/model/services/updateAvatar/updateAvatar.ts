import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../../../../entities/Profile/model/types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AxiosError } from "axios";
import { getUserAuthData } from "entities/User";
import { updateProfileData } from "../updateProfileData/updateProfileData";
import { profileActions } from "../../slices/profileSlice";





export const updateAvatar = createAsyncThunk<string, { id: string, file: FormData }, ThunkConfig>(
    'profile/updateAvatar',
    async ({ id, file }, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI
        const token = getUserAuthData(getState())?.token
        file.forEach(i => console.log(i))
        try {
            const response = await extra.api.put<string>(`/profile/${id}/image`, file, {

                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token,
                },

            })

            if (!response.data) {
                throw new AxiosError()
            }

            dispatch(profileActions.updateProfile({ avatar: 'http://localhost:7000' + response.data }))

            return response.data

        } catch (error) {
            console.log(error)
            return rejectWithValue((error as AxiosError).message)
        }
    },
)