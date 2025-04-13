import { Axios, AxiosError } from "axios";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";



export interface Profile {
    id?: string,
    lastname?: string,
    age?: string,
    currency?: Currency,
    country?: Country,
    city?: string,
    email?: string,
    avatar?: string ,
    firstname?: string
}

export interface ProfileSchema {
    data?: Profile;
    formData?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean
}