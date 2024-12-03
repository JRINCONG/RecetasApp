
import './App.css'
import { Route, Routes } from 'react-router-dom'

import {Navbar} from './components/Navbar/Navbar'
import { Login } from './pages/login/Login'
import Articulos from './pages/Articulos/Articulos'
import { Validacion } from './pages/Validacion'
import { Homepage } from './pages/Homepage'
import { Recetas } from './pages/Recetas'
import { Usuarios } from './pages/administracion_Usuarios/Usuarios'
import { Carduser } from './pages/administracion_Usuarios/components/Carduser'
import Index from './pages/Index'
import Page404 from './pages/Page404'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element = { <Login/> } />

         <Route  element = { <Validacion/> }>

         <Route path='home' element = { <Homepage/> }/>
         <Route path='recetas' element = { <Recetas/>}/> 
         <Route path='articulos' element = { <Articulos/> }/>
         <Route path='usuarios' element = { <Usuarios/> }/>
         <Route path='adminuser' element = { <Carduser/>}/> 
         <Route path='/*' element ={<Page404/>}/>  
         </Route>
         <Route path='/*' element ={<Page404/>}/>  
      </Routes>
      
    </>
  )
}

export default App
