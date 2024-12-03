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

export const getAllUsersThunk = () => (dispach)=>{
    try{
      axios.get(`${Ruta}/users`,BearerToken())
      .then(resp => dispach(setAllusers(resp.data)))
      .catch(error => console.log(error))
    }catch(error){
     console.log(error)
    }

 }

 export const putUsersThunk = (data) =>(dispach)=>{
    try{
        axios.put(`${Ruta}/users`,data,BearerToken())
        .then(resp => dispach(setUpdateUsers(resp.data)))
    }catch(error){
         console.log(error)
    }

 }