import { useEffect, useState} from 'react'
import Swal from 'sweetalert2'


export const Perfil = ({username, Logoutoff }) => {
const [isValidPerfil, setIsValidPerfil ] = useState(false) 
const conexion = localStorage.getItem('token')

 useEffect(()=>{
  if(conexion){
   
     setIsValidPerfil(true)
  }else{
    setIsValidPerfil()
  } 
 
 },[isValidPerfil])
 

    
  return (
    <div id="profile" className="px-6 py-10">
      <p className="text-slate-500">Bienvenido,</p>
    <br/>{
            (conexion) ?
            
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <img className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt=""/>
                </span>
                <span className="text-sm md:text-base font-bold">
                 {username.first_Name}<br/>
                 {username.last_Name}
                </span>
               <br/>
                
                </a>
                :<h3>--</h3>
          }   
          </div>      
  )
}


