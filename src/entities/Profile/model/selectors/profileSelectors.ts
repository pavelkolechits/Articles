import { StateSchema } from "app/providers/StoreProvider";


export const getProfileData = (state: StateSchema) => state.profile?.data 
export const getProfileId = (state: StateSchema) => state.profile?.data?.id
export const getProfileLastname = (state: StateSchema) => state.profile?.data?.lastname
export const getProfileAge = (state: StateSchema) => state.profile?.data?.age
export const getProfileCountry = (state: StateSchema) => state.profile?.data?.country
export const getProfileCurrency = (state: StateSchema) => state.profile?.data?.currency
export const getProfileAvatar = (state: StateSchema) => state.profile?.data?.avatar
export const getProfileFirstname = (state: StateSchema) => state.profile?.data?.firstname
export const getProfileUsername = (state: StateSchema) => state.profile?.data?.username