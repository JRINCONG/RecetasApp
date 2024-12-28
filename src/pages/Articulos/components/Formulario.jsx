import React, { useState } from 'react'
import { Calendario } from './Calendario'
import Swal from 'sweetalert2';
import { CretaeArticulosThunk } from '../../../store/Thunks/Articulos.Thunk';
import { UploadImg } from '../../../util/Cloud';
import { useDispatch } from 'react-redux';
import { setCreate } from '../../../store/slices/Articulos.slices';
import { useForm } from 'react-hook-form';

export const Formulario = ({setisUpdate}) => {
let RutaImg=""
    const { register, reset, handleSubmit } = useForm()
    const [StartDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch()
const date = new Date(StartDate)
    const HandleImage = async (event)=>{
   
        RutaImg = await UploadImg(event.target.files)
      
        }
        
         const HandleOnSubmit = async (data) =>{
          data.fecha_vencimiento = StartDate
         if(RutaImg) data.imagen = RutaImg
          const Respuesta = await CretaeArticulosThunk(data)
          if(Respuesta.message) return Swal.fire({
              icon:"info",
              title:Respuesta.message
          })
          dispatch(setCreate(Respuesta))
           reset({
              items:"",
              cantidad:"",
              tipo:"",
              costo_unitario:"",
              cantidad_minima:"",
              imagen:""
           })
      
           Swal.fire({
              icon:"success",
              title:"Articulo creado Correctamente!"
          })
         }

       

  return (
   
    <form onSubmit={handleSubmit(HandleOnSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input {...register('items', {required:"Campo Obligatorio Nombre", minLength:3})}type="text" placeholder="Nombre del Articulo" name="items" className="border p-2 rounded w-full" />
            
                <input {...register('cantidad', {required:"Cantidad Requerida" , minLength:1})} type="number" placeholder="Cantidad" name="cantidad" className="border p-2 rounded "/>
            </div>
            <div className="mb-4">
                <input {...register('tipo',{required:"Compo email requerido", minLength:{ value:4, message:"Debe colocar prodcuto valido"}})} type="text" placeholder="Grupo { lacteo, Vegetal, Proteina }" name="tipo" className = "border p-2 rounded w-full" required/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input {...register('unidad_M',{ required:"Campo  requerido" , minLength:3 })} type="text" placeholder="Gramos" name="unidad_M" value="gramos" className=" border-2 border-red-200 p-2 rounded w-full" />

            <input  {...register('costo_unitario')} type="number" placeholder="Costo Unitario" name="costo_unitario" className='border-2 border-red-200 p-2 rounded w-full'/>   
            </div>

            <div className="mb-4">
                <input {...register('cantidad_minima',{ required:"Campo Telefono requerido" , minLength:3 })} type="number" name="cantidad_minima" placeholder="Cantidad minima en inventarios" className="border p-2 rounded w-full"/>
            </div>
            
            <div className="mb-4">
            <p className="text-xl  mb-4 text-gray-900 dark:text-gray-100">Fecha Vencimiento</p>
            <Calendario
            startDate={StartDate}
            setStartDate={setStartDate}
            />
            </div>

            <label htmlFor="coccion" className="block text-white mb-4">Seleccione foto</label>
            <input type="file" className='relative peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-4| focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 mb-4' onChange={HandleImage} name='imagen' placeholder='Upload Imagen' accept='.jpg, .png, .jpeg'/>

            <button type="submit" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                Guardar
            </button>
</form>           
  )
}
