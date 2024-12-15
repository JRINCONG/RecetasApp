import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../util/BearerToken";


const Ruta = import.meta.env.VITE_API_URL;

const AllUsers = createSlice({
    name:'AllUsers',  
    initialState:[],
    reducers:{
        setAllusers:(_state, actions) => actions.payload,
        setUpdateUsers:(state,{payload})=>[...state].forEach((items)=>{ (items.email === payload.email) ?  payload :items })
    }
})

export const {setAllusers, setUpdateUsers} = AllUsers.actions;
export default AllUsers.reducer;



