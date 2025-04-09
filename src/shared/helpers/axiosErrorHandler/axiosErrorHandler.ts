import { AxiosError } from "axios";


export function axiosErrorHandler(err: unknown) {
    const error = (err as AxiosError<{message: string}>)

    if (error.response) {
        return error.response.data.message
    } else {
        return error.message
    }
}