import axios from "axios";

// Con esta propiedad de Axios se pueden guardar los cambios de la APi que queremos consumir. 
export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api'
})