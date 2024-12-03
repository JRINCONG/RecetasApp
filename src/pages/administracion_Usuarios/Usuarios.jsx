import React, {useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { CreateUserThunk} from '../../store/slices/User.slices'
import { getAllUsersThunk } from '../../store/slices/AllUsers.slices'


export const Usuarios = () => {
    const dispatch =useDispatch()
    const { handleSubmit, register, reset, formState:{errors} } =useForm()
    const [IsValid ,setIsValid] = useState(true)
    const[Valid,setValid]=useState()
    const[ ChangeRadio, setChangeRadio ] = useState()
  const [ Comparation, setComparation ]=useState({
    password:'',
    password1:''
  })

  
      const handleNewPasswordChange = (e)=>{
        setComparation({
            ...Comparation,
            [e.target.name]:e.target.value
        })       
        setValid(Comparation.password)
        setIsValid(false)
    }

    const ValidatePassword =()=>{
    if(Comparation.password === Comparation.password1){
        setIsValid(true)
    }else{
        setIsValid(false)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Los Campos no Coinciden!",
           
          });
         }
    }
   
    const handleChangeRadio = (e) =>{
    setChangeRadio(e.target.value)     
    }
 
    const handleOnSubmit = (data)=>{
        
      console.log(data)  
    if(!ChangeRadio) return Swal.fire({icon:"error", title:"Oop",text:"Debe seleccion el tipo de usuario"})
    data.tipo=ChangeRadio
    const datos={
     
        email:data.email,
        first_Name:data.first_Name,
        last_Name:data.last_Name,
        phone:data.phone,
        password:data.password,
        tipo:data.tipo,
        cargo:data.cargo
    }
    console.log(datos)
    dispatch(CreateUserThunk(datos))
    reset({
        first_Name:"",
        last_Name:"",
        phone:"",
        email:"",
        password:"",
        password1:"",
        cargo:""
    })
    setChangeRadio()
    Swal.fire('Usuario Registrado..')
    dispatch(getAllUsersThunk())
     }
 

  return (
  
    <div className='flex h-screen dark:bg-gray-900 justify-center items-center'>
    <div className="bg-gray-100 dark:bg-gray-800 w-1/2">
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Registar Usuario</h1>
            
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input {...register('first_Name', {required:"Campo Obligatorio Nombre", minLength:3})}type="text" placeholder="First name" name="first_Name" className="border p-2 rounded w-full" />
                  
                    <input {...register('last_Name', {required:"Campo Requerido Apellidos" , minLength:4})} type="text" placeholder="Last name" name="last_Name" className="border p-2 rounded w-full"/>
                </div>
                <div className="mb-4">
                    <input {...register('email',{required:"Compo email requerido", minLength:{ value:10, message:"Debe colocar Correo Valido"}})} type="email" placeholder="Email address" name="email" className = "border p-2 rounded w-full" required/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input {...register('password',{ required:"Campo Password requerido" , minLength:4 })} type="password" placeholder="Password" name="password" className={(IsValid) ? 'border p-2 rounded w-full':'border-2 border-red-600 p-2 rounded w-full'} required onChange={handleNewPasswordChange} />

                <input  {...register('password1')} type="password" placeholder="Verifica Passord" name="password1" className={(IsValid) ? 'border p-2 rounded w-full':'border-2 border-red-600 p-2 rounded w-full'} required onChange={handleNewPasswordChange} onBlur={ValidatePassword}/>   
                </div>

                <div className="mb-4">
                    <input {...register('phone',{ required:"Campo Telefono requerido" , minLength:6 })} type="number" name="phone" placeholder="Telefono" className="border p-2 rounded w-full"/>
                </div>
                
                <div className="mb-4">
                    <input {...register('cargo',{ required:"Campo Cargo requerido" , minLength:3 })} type="text" name="cargo" placeholder="Cargo" className="border p-2 rounded w-full"/>
                </div>

                <div className="flex mb-4 gap-x-6">
                 <p className='text-white'>Tipo de Usuario:</p>
                <div className='text-white'>
                     <input  type="radio"  name="tipo" value="admin" onChange={ handleChangeRadio } />
                     <label htmlFor="admin">Admin</label>
                </div>

                <div  className='text-white'>
                     <input type="radio"  name="tipo" value="user" onChange={ handleChangeRadio } />
                     <label htmlFor="user">User</label>
               </div>
            
                   
                </div>
                <button type="submit" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                    Guardar
                </button>
            </form>
        </div>
    </div>
  </div>  
  </div> 
   
  )
}


