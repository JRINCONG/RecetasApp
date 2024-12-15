import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Calendario } from './components/Calendario';
import { getAllArticulosThunk } from '../../store/Thunks/Articulos.Thunk';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store/Ridux';
import { setAllitems } from '../../store/slices/Articulos.slices';
import QRCode from 'react-qr-code';


const Articulos = () => {
    const dispatch =useDispatch()
  const { register, reset, handleSubmit } = useForm()
  const [startDate, setStartDate] = useState(new Date());
  
  const [Prueba, setPrueba]=useState({})
  const Articulos = useSelector((store)=> store.Articulos)

const date = new Date(startDate)

console.log(date)
  console.log("Articulos =>",Articulos)
  const HandleImage = (event)=>{

 

  }
  
   const HandleOnSubmit = async (data) =>{
    data.fecha_vencimiento= startDate
    setPrueba(data)
    console.log(data)
   
   }

   


  return (
    <div className='flex min-h-screen min-w-max dark:bg-gray-900 justify-center items-center'>
    <div className="bg-gray-100 dark:bg-gray-800 w-1/2">
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Registar Articulos</h1>
            
            <form onSubmit={handleSubmit(HandleOnSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input {...register('name', {required:"Campo Obligatorio Nombre", minLength:3})}type="text" placeholder="Nombre del Articulo" name="name" className="border p-2 rounded w-full" />
                  
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
                <Calendario
                startDate={startDate}
                setStartDate={setStartDate}
                />
                </div>

                <label htmlFor="coccion" className="block text-white mb-4">Seleccione foto</label>
                <input type="file" className='relative peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-4| focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 mb-4' onChange={HandleImage} name='imagen' placeholder='Upload Imagen' accept='.jpg, .png, .jpeg'/>

                <button type="submit" id="theme-toggle" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                    Guardar
                </button>
            </form>             
        </div>
        {
            <QRCode value={JSON.stringify(Prueba)}/>
        }
    </div>
  </div>  
  </div> 
  )
}

export default Articulos
