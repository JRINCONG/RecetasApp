import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { PostUserThunks, setUsers } from '../../store/slices/User.slices'
import {Menuadmin} from './components/Menuadmin'
import { Perfil } from './components/Perfil'

import { Logout } from './components/Logout'
import Swal from 'sweetalert2'


export const Navbar = () => {

const [Logoutoff, setLogoutoff ]= useState(false)   
const navigate = useNavigate()
const dispatch=useDispatch()   

let Userme = useSelector((store)=> store.Users)
const session = localStorage.getItem('token')

    useEffect(()=>{     
    const resolve = async()=>{
      if(session){          
        const results = await PostUserThunks()
        if(results === 'Forbidden'){
          Swal.fire('Session expirada')
           localStorage.removeItem('token')
          navigate('/login')
        }else{
           dispatch(setUsers(results))
           navigate('/home')
        } 
      }

    }
       
    resolve()
          
    },[Logoutoff])   


    
   
  return (  
    
       <div id="menu" className="bg-gray-900 text-slate-300 w-64  left-0  overflow-y-scroll  z-10 overflow-hidden max-h-full float-left" >
           <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">Recetas<span className="text-blue-500"></span>.</h1>
            <p className="text-slate-500 text-sm">Manejo de recetas e inventarios </p>
           </div>
           

           <Perfil
           username={Userme}
           Logoutoff={Logoutoff}
           />
            
           {
             (Userme.tipo === "admin")&& <Menuadmin/>           
            }
            <div id="profile" className={"px-6 py-10"}>

            <Logout
            setLogoutoff={setLogoutoff}
            
            />            

             </div>


         </div>
         
  )
}

