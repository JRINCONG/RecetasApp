import { configureStore } from "@reduxjs/toolkit";
import Users  from "./slices/User.slices";
import  Allusers  from "./slices/AllUsers.slices";

export const store = configureStore({
    reducer:{
       Users,
       Allusers,  
      
    }

})