

export interface RegistrationSchema {
    email: string;
    password: string;
    error?: string  ;
    isLoading: boolean;
    isValidEmail?:boolean;
    isValidPassword?: boolean;
}