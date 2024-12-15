import { configureStore } from "@reduxjs/toolkit";
import Users  from "./slices/User.slices";
import  Allusers  from "./slices/AllUsers.slices";
import Articulos from "./slices/Articulos.slices";
import Recetas  from "./slices/Recetas.slices";

export const store = configureStore({
    reducer:{
       Users,
       Allusers, 
       Articulos,
       Recetas 
      
    }

})