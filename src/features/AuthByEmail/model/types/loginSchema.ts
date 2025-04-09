import { AxiosError } from "axios";


 


export interface LoginSchema {
    email: string;
    password: string;
    error?: string  ;
    isLoading: boolean
}