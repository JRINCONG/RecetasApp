import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { UploadImg } from '../../../util/Cloud'
import { getAllUsersThunk, putUsersThunk } from '../../../store/Thunks/User.thunk'
import { setUpdateUsers } from '../../../store/slices/User.slices'
import { setAllusers } from '../../../store/slices/AllUsers.slices'

export const FormUpdate = ({info,  setIsActive, IsActive }) => {
    const { handleSubmit, register, reset } = useForm()
const dispatch = useDispatch()
    const [IsValid ,setIsValid] = useState(true)
    const[Valid,setValid]=useState()
    const[ ChangeRadio, setChangeRadio ] = useState()
    const [ FotoPerfil, SetFotoPerfil ] = useState()
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
 

const HandleCloset = () =>{
    setIsActive(false)
}
//foto de perfil
const HandleImage = async(event) =>{
    const foto = await UploadImg(event.target.files)
    SetFotoPerfil(foto)
}

useEffect(()=>{
 if(IsActive){
    reset(info)
 }
  const UpdateUsers = async() =>{
      const UpdateUser = await getAllUsersThunk()
      if(UpdateUser) dispatch(setAllusers(UpdateUser))
  }
UpdateUsers()

},[IsActive])

    const onUpdatesubmit = async(data)=>{
            if(!data.password){
                delete data.password; 
                delete data.password1;    
            }else{
                delete data.password1;
                
            } 
            if(ChangeRadio)  data.tipo = ChangeRadio 
            data.imagen = FotoPerfil;
            const datos = await putUsersThunk(data)
           
            Swal.fire({
                icon:"success",
                title:datos.message
            })
            setIsActive(false)
    }

  return (  
          
      <form className='flex  flex-col bg-slate-950 justify-center  p-8 rounded-lg absolute top-20 left-60 
      float-start' onSubmit={handleSubmit(onUpdatesubmit)} >
        <div className='flex w-full justify-end static'>
          <span className='flex absolute top-0 right-0 m justify-center items-end w-6 rounded-lg bg-blue-500 text-center text-white   ml-full  m-2 hover:cursor-pointer hover:bg-blue-600 hover:text-black' onClick={HandleCloset}>X</span>
          </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input {...register('first_Name', {required:"Campo Obligatorio Nombre", minLength:3})}type="text" placeholder="First name" name="first_Name" className="border p-2 rounded w-full" />
                  
                    <input {...register('last_Name', {required:"Campo Requerido Apellidos" , minLength:4})} type="text" placeholder="Last name" name="last_Name" className="border p-2 rounded w-full"/>
                </div>
                <div className="mb-4">
                    <input {...register('email',{required:"Compo email requerido", minLength:{ value:10, message:"Debe colocar Correo Valido"}})} type="email" placeholder="Email address" name="email" className = "border p-2 rounded w-full" required/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input {...register('password',{ minLength:4 })} type="password" placeholder="Password" name="password" className={(IsValid) ? 'border p-2 rounded w-full':'border-2 border-red-600 p-2 rounded w-full'}  onChange={handleNewPasswordChange} />

                <input  {...register('password1')} type="password" placeholder="Verifica Passord" name="password1" className={(IsValid) ? 'border p-2 rounded w-full':'border-2 border-red-600 p-2 rounded w-full'}  onChange={handleNewPasswordChange} onBlur={ValidatePassword}/>   
                </div>

                <div className="mb-4">
                    <input {...register('phone',{ required:"Campo Telefono requerido" , minLength:6 })} type="number" name="phone" placeholder="Telefono" className="border p-2 rounded w-full"/>
                </div>
                
                <div className="mb-4">
                    <input {...register('cargo',{ required:"Campo Cargo requerido" , minLength:3 })} type="text" name="cargo" placeholder="Cargo" className="border p-2 rounded w-full"/>
                </div>

                <label htmlFor="coccion" className="block text-gray-600 mb-4">Seleccione foto</label>
                <input type="file" className='relative peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-4| focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 mb-4' onChange={HandleImage} name='imagen' placeholder='Upload Imagen' accept='.jpg, .png, .jpeg'/>


                <div className="flex mb-4 gap-x-6">
                 <p className='text-white'>Tipo de Usuario:</p>
                <div className='text-white'>
                     <input  type="radio"  name="tipo" value='admin' onChange={ handleChangeRadio } />
                     <label htmlFor="tipo">Admin</label>
                </div>

                <div  className='text-white'>
                     <input type="radio"  name="tipo" value='user' onChange={ handleChangeRadio } />
                     <label htmlFor="tipo">User</label>
               </div>
            
                   
                </div>
                <button type="submit"  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                    Guardar
                </button>
                
            </form>
            
            
   
  )
}


