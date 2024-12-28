import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../store/Ridux'
import Swal from 'sweetalert2'
import { setAllitems } from '../../store/slices/Articulos.slices'
import { getAllArticulosThunk } from '../../store/Thunks/Articulos.Thunk'
import { Formulario } from './components/Formulario'

export const ShowArticulos = () => {
    const Articulos = useSelector((store)=> store.Articulos)
    const [InputValue, setInputValue ] = useState('')
    const [ isUpdate, setisUpdate ] = useState(false)
const dispatch = useDispatch()
console.log("Articulos",Articulos)
useEffect(()=>{
    const ShowArticulos = async() =>{
        const Arti= await getAllArticulosThunk()
        if(!Articulos) return Swal.fire("")
           dispatch(setAllitems(Arti))
            }

    ShowArticulos()   
},[])

const HandleChange = (event) =>{
setInputValue(event.target.value.trim().toLowerCase())
}
const ShArticulo = (items) =>{
return items.items.includes(InputValue)
}

const UpdateARticulo = () =>{
    setisUpdate(true)
}

  return (
 
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 max-w-screen max-h-screen">
    <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                <div className="flex flex-wrap items-stretch w-full h-full mb-6">
                    <div className="flex">
                        <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                            <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <input type="text" className="flex-shrink flex-grow  leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs  text-gray-500 font-thin" placeholder="Search" onChange={HandleChange}/>
                </div>
            </div>
        </div>
    </div>
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">items</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Cantidad</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Cant-Disponible</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Cantidad-Minima</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Tipo</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fecha vencimiento</th>                   
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Costo Unitario</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {

                   Articulos?.filter(ShArticulo).map((item,index)=>(
                  
                    <tr key={index} className={(item.cantidad_restante < item.cantidad_minima) ? 'bg-red-200':''}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="flex items-center">
                                <div>
                                    <div className="text-sm leading-5 text-gray-800">{item.items}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="text-sm leading-5 text-blue-900">{item.cantidad}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{item.cantidad_restante}</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{item.cantidad_minima}</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span className="relative text-xs">{item.tipo}</span>
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{item.fecha_vencimiento}</td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{item.costo_unitario}</td>

                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                            <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"onClick={UpdateARticulo}>View Details</button>
                        </td>
              </tr> 
               ))             
        }
             
            </tbody>
            
        </table>
            
     </div>     
</div>


  )
}
