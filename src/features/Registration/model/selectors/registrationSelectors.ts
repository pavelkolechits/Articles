import { StateSchema } from "app/providers/StoreProvider";

export const getRegistrationPassword = (state: StateSchema) => state.registration?.password ?? '';
export const getRegistrationIsLoading = (state: StateSchema) => state.registration?.isLoading ?? false;
export const getRegistrationError = (state: StateSchema) => state.registration?.error ?? ''
export const getRegistrationEmail = (state: StateSchema) => state.registration?.email ?? '';
export const getRegistrationIsvalidEmail = (state: StateSchema) => state.registration?.isValidEmail ;
export const getRegistrationIsvalidPassword = (state: StateSchema) => state.registration?.isValidPassword ;
