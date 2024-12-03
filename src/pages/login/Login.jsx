import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUser } from '../../hook/useuser'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PostUserThunks } from '../../store/slices/User.slices'

export const Login = () => {
  const {handleSubmit,register,reset} = useForm()
  const [getLoginUser, ErrorUser ] = useUser()
  const [ mailIsvalid, setmailIsvalid]=useState(true)
 
const navigate= useNavigate()
const dispatch= useDispatch()

const Submit = async (data,e)=>{
  e.preventDefault()
 
                let emailOnchange = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
                  if(!emailOnchange.test(data.email)) setmailIsvalid(false) 
                 const Respuesta = await getLoginUser(data)            
              
                  reset({
                        email:"",
                        password:""
                      })
    
               const result = await localStorage.getItem('token')
               if(result)  dispatch(PostUserThunks())
                if(ErrorUser) setmailIsvalid(false)                
               if(result){
                 return  navigate('/home')
               }
               
            }       
             
const Validar = () =>{
  setmailIsvalid(true)
}

  return (
    <div className="bg-gray-100 flex h-screen justify-center">

      <div className="w-2/4 h-full hidden lg:block content-center">
        <img src="./recetas.avif" alt="Placeholder Image" className="object-contain  h-full"/>
      </div>

      <div className="lg:p-36 md:p-52 sm:20  lg:w-1/2 mr-1">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>

        <form onSubmit={handleSubmit(Submit)} method="POST">
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Username</label>
            <input {...register('email')}type="email" id="username" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input {...register('password')} type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
          </div>       
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
        </form>
        
          <div className="mt-6 text-blue-500 text-center">
            <a href="#" className="hover:underline">Sign up Here</a>
          </div>

          {
          (!mailIsvalid) &&
          <div className="mt-6 text-red-500 text-center">
            <a href="#" className="hover:underline">Password or email invalidos</a>
          </div>

          }
          
        </div>
        
        
</div>
  )
}

