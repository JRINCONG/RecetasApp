import React, { useState } from 'react'
import { Usuarios } from '../Usuarios'
import { FormUpdate } from './FormUpdate'
import { useForm } from 'react-hook-form'

export const Card = ({items}) => {
  const {handleSubmit, register, reset} = useForm()
const [ IsActive, setIsActive ] =  useState(false)
const HandleDeleteUser = () =>{
 console.log(items.email)
}
const Actualizar = () =>{
  setIsActive(true)
  
}


  return (
    <>
        <div className="flex  static flex-col mr-5 text-center mb-11 lg:mr-16 border-2 p-3 rounded-lg">
                  <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                    <img className="inline-block shrink-0 rounded-[.95rem] w-[100px] h-[100px]" src={items.imagen}alt="avarat image"/>
                  </div>
                  <div className="text-center">
                    <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">{items.first_Name +" "+ items.last_Name}</a>
                    <span className="block font-medium text-muted">{items.tipo}</span>
                    <span className="block font-medium text-muted">{items.cargo}</span>
                    <span className="block font-medium text-muted">{items.email}</span>
                    <span className="block font-medium text-muted">{items.phone}</span>
                  </div>
                  <div className='flex gap-2 justify-center'>
                  <button className="middle none center mr-1 rounded-lg bg-red-500 py-1 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true" onClick={HandleDeleteUser}>Eliminar</button>
                  
                  <button className="middle none center mr-1 rounded-lg bg-gray-900 py-1 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"             data-ripple-light="true" onClick={Actualizar}>Actualizar</button>
                </div>
        </div>
        <div className={`${ (IsActive ) ? 'flex static z-10 opacity-8  h-auto  bg-slate-200 justify-center place-items-center rounded-md' : 'hidden'}`}>
            <FormUpdate 
            info={items} 
            key={items.id}
            setIsActive={setIsActive}
            IsActive={IsActive}
            />
        </div>

   </>
  )
}


