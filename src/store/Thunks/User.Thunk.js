import axios from "axios";
import { BearerToken } from "../../util/BearerToken";




const Ruta = import.meta.env.VITE_API_URL;

export const LoginUserThunk = async(data) =>{
   
    try{

       return await axios.post(`${Ruta}/users/login`,data)
        .then(resp =>{
            localStorage.setItem('token',resp.data.token)
        })

    }catch(error){
        return  error.response?.data || error.message  
    }
} 


export const getAllUsersThunk = async() => {
    try{
     return await axios.get(`${Ruta}/users`,BearerToken())
      .then(resp => resp.data)
      
    }catch(error){
        return  error.response?.data || error.message  
    }

 }

 export const PostUserThunks = async () =>{

        
    try{
      return await axios.get(`${Ruta}/users/me`,BearerToken())
       .then(resp => resp.data)

    }catch(error){
     return (error.response?.data || error.message)   
     }
 }

 export const CreateUserThunk = async (data)=>{
    
    try{
            return await axios.post(`${Ruta}/users`,data,BearerToken())
             .then(resp => resp.data)

    }catch(error){
        return (error.response?.data || error.message) 
    }

 } 


 export const putUsersThunk = async (data) =>{
    try{
        return await axios.put(`${Ruta}/users`,data,BearerToken())
        .then(resp => resp.data)
    }catch(error){
        return (error.response?.data || error.message) 
    }

 }