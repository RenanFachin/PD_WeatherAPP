import axios from "axios";

// https://openweathermap.org/

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

