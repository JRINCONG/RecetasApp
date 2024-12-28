import { useEffect, useState} from 'react'
import Swal from 'sweetalert2'


export const Perfil = ({username, Logoutoff }) => {
const [isValidPerfil, setIsValidPerfil ] = useState(false) 
const conexion = localStorage.getItem('token')

console.log("username",username)
 useEffect(()=>{
  if(conexion){
   
     setIsValidPerfil(true)
  }else{
    setIsValidPerfil()
  } 
 
 },[isValidPerfil])
 

    
  return (
    <div id="profile" className="px-6 py-10">
      {
        (conexion)? <p className="text-slate-500">Bienvenido,</p>:<p></p>
      }
      
    <br/>{
            (conexion) ?
            
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <img className="rounded-full w-8 h-8" src={username.imagen} alt=""/>
                </span>
                <span className="text-sm md:text-base font-bold">
                 {username.first_Name}<br/>
                 {username.last_Name}
                </span>
               <br/>
                
                </a>
                :<h3></h3>
          }   
          </div>      
  )
}


