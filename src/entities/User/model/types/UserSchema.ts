export interface Roles {
    id: number;
    value: string;
    description: string
}

export interface User {
    id: number;
    email: string;
    roles?: Array<Roles>
}
export interface ResponseAuthData {
    user: User,
    token: string
}

export interface UserSchema {
    authData?: ResponseAuthData
    inited?: boolean
}