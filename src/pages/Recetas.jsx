import React from 'react'
import { useForm } from 'react-hook-form'

export const Recetas = () => {
    const {handleSubmit, reset, register} = useForm()

const Submit = (data)=>{
console.log(data)
}

  return (
    <main className=" flex  h-screen justify-center items-center dark:bg-gray-900">

    <div className="max-w-7xl dark:bg-gray-950 dark:text-white">

      <form onSubmit={handleSubmit(Submit)} className=" w-full p-4 rounded shadow-md" >
        <p className="text-gray-600 mb-4"></p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">Nombre Receta</label>
            <input
            {...register('name')}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
          placeholder="Name*"
          required
        />
          </div>
          <div className="mb-4">
          <label htmlFor="preparacion" className="block text-gray-600">Tiempo Preparación</label>        
          <input {...register('preparacion')} type="time" name="preparacion" className='w-full px-3 py-2 dark:bg-gray-900'/>
          </div>
         
          <div className='mb4'> 
          <label htmlFor="coccion" className="block text-gray-600">Tiempo Cocción</label>        
          <input  {...register('coccion')}type="time" name="coccion" className='w-full px-3 py-2 dark:bg-gray-900'/>
          </div>
          </div>
         <div className='flex flex-col justify-around border border-white-700 p-4 gap-8'>

          <div className='mb4 flex flex-col gap-2'> 
          <label htmlFor="coccion" className="block text-gray-600">seleccione imagen</label>
          <input type="file" className='relative peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-4| focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' name='imagen' placeholder='Upload Imagen' accept='.jpg, .png, .jpeg'/>
          </div>
         

          <div className='mb4 flex flex-col gap-2'>
          <label htmlFor="coccion" className="block text-gray-600">seleccione Video</label>           
          <input type="file" className='relative peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' name='video' placeholder='Upload video' accept='.mp4, .mov, .avi, .WebM'/>

          </div>
          </div>    
         
        <div className="mb-4 col-span-1 md:col-span-3 p-4">
            <textarea
            {...register('descripcion')}
          id="descripcion"
          name="descripcion"
          className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
          placeholder="Descripción de preparación*"
          rows="5"
  
          required
        ></textarea>
          </div>

        <div className="flex justify-end">
          <button
          type="submit"
          className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
        >
          Crear Receta →
        </button>
        </div>
      </form>
    </div>
  </main>
  )
}

