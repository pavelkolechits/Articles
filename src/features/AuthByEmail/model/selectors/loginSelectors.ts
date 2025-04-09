import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";



export const getLoginPassword = (state: StateSchema) => state.login?.password ?? '';
export const getLoginIsLoading = (state: StateSchema) => state.login?.isLoading ?? false;
export const getLoginError = (state: StateSchema) => state.login?.error ?? ''
export const getLoginEmail = (state: StateSchema) => state.login?.email ?? '';
