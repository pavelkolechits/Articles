import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";


export const getProfileData = (state: StateSchema) => state.profile?.data 
export const getProfileFormData = (state: StateSchema) => state.profile?.formData 
export const getProfileId = (state: StateSchema) => state.profile?.data?.id ?? ''
export const getProfileLastname = (state: StateSchema) => state.profile?.data?.lastname ?? ''
export const getProfileAge = (state: StateSchema) => state.profile?.data?.age ?? ''
export const getProfileCountry = (state: StateSchema) => state.profile?.data?.country ?? Country.Belarus
export const getProfileCurrency = (state: StateSchema) => state.profile?.data?.currency ?? Currency.EUR
export const getProfileAvatar = (state: StateSchema) => state.profile?.data?.avatar ?? ''
export const getProfileFirstname = (state: StateSchema) => state.profile?.data?.firstname ?? ''
export const getProfileEmail = (state: StateSchema) => state.profile?.data?.email ?? ''
export const getProfileError = (state: StateSchema) => state.profile?.error ?? ''
export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading
export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly