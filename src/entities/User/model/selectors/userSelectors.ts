import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";


export const getUserAuthData = (state: StateSchema) => state.user.authData 
export const getUserInited = (state: StateSchema) => state.user.inited