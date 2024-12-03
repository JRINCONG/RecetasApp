import { createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../util/BearerToken";


const Ruta = import.meta.env.VITE_API_URL;


const Users = createSlice({
    name:"Users",
    initialState:[],
    reducers:{
        setUsers:(_state,actions)=>actions.payload,
        setCreateusers:(state,{payload}) =>{[state, payload]},
       

    }

})

export const { setUsers, setCreateusers, setAllusers } = Users.actions;
export default Users.reducer;


export const PostUserThunks = () => (dispach)=>{
        axios.get(`${Ruta}/users/me`,BearerToken())
       .then(resp => dispach(setUsers(resp.data)))
       .catch(error => console.log(error))  
    }

 export const CreateUserThunk = (datos)=>(dispach)=>{
    
    try{
              axios.post(`${Ruta}/users`,datos,BearerToken())
             .then(resp => dispach(setCreateusers(
                resp.data , {result:'ok'}
            )))

    }catch(error){
        console.log(error)
    }

 } 
 
 