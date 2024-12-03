import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { PostUserThunks } from '../../store/slices/User.slices'
import {Menuadmin} from './components/Menuadmin'
import { Perfil } from './components/Perfil'
import { LinkLogin } from './components/LinkLogin'


export const Navbar = () => {

const [Logoutoff, setLogoutoff ]= useState(false)   
const navigate = useNavigate()
const dispatch=useDispatch()   

let Userme = useSelector((store)=> store.Users)
const session = localStorage.getItem('token')

    useEffect(()=>{
     
      
        if(session){          
          dispatch(PostUserThunks())
          
        }else{
         
        }    
          
    },[Logoutoff])   


    
   
  return (  
    
       <div id="menu" className="bg-gray-900 text-slate-300 w-64  left-0  overflow-y-scroll  z-10 overflow-hidden h-screen float-left" >
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

            <LinkLogin
            setLogoutoff={setLogoutoff}
            
            />            

             </div>


         </div>
         
  )
}

