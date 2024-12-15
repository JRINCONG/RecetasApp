import axios from "axios";
import { BearerToken } from "../../util/BearerToken";





const Ruta = import.meta.env.VITE_API_URL;

export const getAllArticulosThunk = async() =>{
    try{
        return await axios.get(`${Ruta}/articulos`,BearerToken())
        .then(resp => resp.data)

    }catch(error){
        return  error.response?.data || error.message  
    }
}

export const CretaeArticulosThunk = async(data) =>{
    try{
        axios.post(`${Ruta}/articulos`,data,BearerToken())
        .then(resp => resp.data)
    }catch(error){
        return  error.response?.data || error.message  
    }

}