import { createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../util/BearerToken";
import { use } from "react";
import { useDispatch } from "react-redux";


const Ruta = import.meta.env.VITE_API_URL;


const Users = createSlice({
    name:"Users",
    initialState:[],
    reducers:{
        setUsers:(_state,actions)=> actions.payload.datos,
        setCreateusers:(state, { payload } ) =>{[state, payload]},
       // setUpdateUsers:(state, { payload } )=>[...state].forEach((items)=>{ (items.email === payload.email) ?  payload :items })

    }

})

export const { setUsers, setCreateusers, setAllusers, setUpdateUsers } = Users.actions;
export default Users.reducer;



export const PostUsermeThunks = async () =>{

        
       try{
         return await axios.get(`${Ruta}/users/me`,{withCredentials:true})
          .then(resp => resp.data)

       }catch(error){
        return (error.response?.data || error.message)   
        }
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
 
 