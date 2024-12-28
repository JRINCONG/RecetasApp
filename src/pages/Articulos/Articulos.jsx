import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Formulario } from './components/Formulario';



const Articulos = () => {

  return (
    <div className='flex min-h-screen min-w-screen dark:bg-gray-900 justify-center items-center'>
    <div className="bg-gray-100 dark:bg-gray-800 w-1/2">
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Registar Articulos</h1>
            <Formulario/>           
        </div>
        
    </div>
  </div>  
  </div> 
  )
}

export default Articulos
