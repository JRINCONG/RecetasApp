import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../store/slices/User.slices';
import { store } from '../store/Ridux';
   
    
    export const Validacion = () => {    
    
    
    const registro = localStorage.getItem('token')
   
          if(registro){
            return  <Outlet/>
          }else{            
            return <Navigate to ='/login'/>
          }
    
      
    }
    
    



