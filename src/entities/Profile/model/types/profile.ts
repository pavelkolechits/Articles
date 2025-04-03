import { Country, Currency } from "shared/consts/common"


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
    data: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean
}