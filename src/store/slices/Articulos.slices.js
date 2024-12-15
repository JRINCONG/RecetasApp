import { createSlice } from "@reduxjs/toolkit";


const Articulos = createSlice({
    name:"Articulos", 
    initialState:[],
    reducers:{
        setAllitems:(_state, actions ) => actions.payload,
        setCreate:(state, {payload})=> {[...state, payload]}
    }
})

export const  { setCreate, setAllitems } = Articulos.actions
export default Articulos.reducer
