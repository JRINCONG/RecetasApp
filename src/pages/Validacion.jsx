import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

   
    
    export const Validacion = () => {    
    
    const registro = window.localStorage.getItem('token');
    
          if(registro){
            return  <Outlet/>
          }else{            
            return <Navigate to ='/login'/>
          }
    
      
    }
    
    



