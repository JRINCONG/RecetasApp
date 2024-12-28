import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../util/BearerToken";
import { useState } from "react";


const Recetas = createSlice({
    name:"Recetas",
    initialState:"",
    reducers:{
        setGetAll:( state , { payload } ) => state = payload,
        setCreate:(state, { payload })=>[...state, payload ],
        
       
    }

})

export const { setCreate, setGetAll, setError} = Recetas.actions
export default Recetas.reducer

const Ruta = import.meta.env.VITE_API_URL;



export const getRecetasThunk = () => async(dispach) =>{

    try{
       await axios.get(`${Ruta}/recetas`)
        .then(resp => {
            dispach(setGetAll(resp.data))})
    }catch(error){
        throw new Error(error.response?.data || error.message)
    }
}



export const CreateRecetasThunk = async (data) => {
   
    try{
      return await axios.post(`${Ruta}/recetas`,data,BearerToken())
        .then(resp => resp.data)

    }catch(error){           
        return (error.response?.data || error.message)         
     }
  }

