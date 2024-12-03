import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { IoIosLogIn } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { PostUserThunks } from '../../../store/slices/User.slices';
import Swal from 'sweetalert2';
import { outer } from '@cloudinary/url-gen/qualifiers/outlineMode';

export const LinkLogin = ({setLogoutoff}) => {
  const dispatch=useDispatch()  
  const navigate = useNavigate()  
  let Userme = useSelector((store)=> store.Users)
 const [Logout, setLogout] = useState(true)
  const session = localStorage.getItem('token')
 
      useEffect(()=>{
          
          if(session) {            
            dispatch(PostUserThunks()) 
          }
         
      },[Logout]) 
      
    const CerrarSession = () =>{
         if(session){
          Swal.fire('logout successfully')
           localStorage.removeItem('token')           
          setLogout(false)         
           navigate('/login')
           setLogoutoff(true) 
           window.location.reload(true)          
         }else{
         navigate('/login')
        
          }
        }
  return (
    <div onClick ={CerrarSession} className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-red-500 hover:bg-white/5 transition ease-linear duration-150 hover:cursor-pointer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <IoIosLogIn />
                      </svg>
                      
                </div>
                <div className="flex flex-col">
                    <span className=" hover:cursor-pointer text-lg font-bold leading-5 text-white">{(!session)? 'login' : 'Logout'}</span>
                    <span className="text-sm text-white/100 hidden md:block">{(!session)? 'iniciar Session' : 'Cerrar session'}</span>
                </div>
            </div>

  )
}


