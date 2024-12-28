import axios from "axios";

const Ruta = import.meta.env.VITE_API_URL;
const api = axios.create({
    baseURL:'http://localhost:5173/',
    withCredentials:true
})


export default api