import axios from 'axios';
import React, { useState } from 'react'

/*
const Ruta = import.meta.env.VITE_API_URL;
export const useUser = () => {
  
   const[ ErrorUser, setErrorUser ] = useState()

  const getLoginUser = async(data)=>{
   
       await axios.post(`${Ruta}/users/login`,data)
       .then(resp =>{ localStorage.setItem('token',resp.data.token)          
           setErrorUser(true)    
       }) 
       .catch(error => setErrorUser(error.response?.data || error.message))       
   

         
    }

    return [getLoginUser, ErrorUser ]
}

*/