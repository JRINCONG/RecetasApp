import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../store/Ridux'
import { getAllUsersThunk } from '../../../store/slices/AllUsers.slices'
import { Card } from './Card'



export const Carduser = () => {
    const dispatch = useDispatch()
    const AllUsers = useSelector((store)=> store.Allusers)


    useEffect(()=>{
   dispatch(getAllUsersThunk())
    },[])

  return (  
      <div className="flex flex-wrap -mx-3 mb-5">
         <div className="w-full max-w-full px-3 mb-6  mx-auto">
             <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
     
               <div className="flex-auto block py-8 px-9">
        <div className='flex'>
          <div className="mb-9">
                      
          </div>
          <div className="flex flex-wrap w-full">
            {
               AllUsers?.map((items,index) =>(                   
                   <Card
                   key={index}
                   items={items}
                   />
               ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
  )
}

