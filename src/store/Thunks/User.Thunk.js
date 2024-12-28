import axios from "axios";
import  { BearerToken } from "../../util/BearerToken";
import { get } from "react-hook-form";
import api from "../../util/api";





const Ruta = import.meta.env.VITE_API_URL;

export const LoginUserThunk = async(data) =>{
    console.log(data)
    try{

       return await axios.post(`${Ruta}/users/login`,data,{withCredentials:true})
        .then(resp => console.log("ya funciona",resp.data) )
          
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
      return await api.get(`${Ruta}/users/me`)
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



 export const PostLogoutThunk = async()=>{
    

    try{
      return  await axios.get(`${Ruta}/users/logout`)
        .then(resp => console.log(resp.data))

    }catch(error){
        return (error.response?.data || error.message) 
    }
      
            
      
    
  


 }
 