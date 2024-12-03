import React from 'react'
import { ArticulosContext } from './ArticuloContext'
import { useSelector } from 'react-redux'

const ArticuloProviders = ({children}) => {
  return (
   <ArticulosContext.Provider value={
    user = useSelector((store)=> store.user) 
   }>
    {children}
   </ArticulosContext.Provider>
  )
}

export default ArticuloProviders
