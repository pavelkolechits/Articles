import axios from "axios";




export const $api = axios.create({
    baseURL: __API_URL__,
})