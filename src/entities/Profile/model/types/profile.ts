import { Country } from "entities/Country";
import { Currency } from "entities/Currency";



export interface Profile {
    id: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
    firstname: string
}

export interface ProfileSchema {
    data: Profile | undefined;
    isLoading: boolean;
    error?: string;
    readonly?: boolean
}