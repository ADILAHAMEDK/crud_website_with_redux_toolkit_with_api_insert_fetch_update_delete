import React from 'react'
import { useSelector } from 'react-redux'

const View = ({id, showPopUp, setShowPopUp}) => {

    const allUsers = useSelector((state)=> state.crud.users)

    const singleUsers = allUsers.filter((item)=> item.id === id)


  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10 opacity-[0.8] bg-black'>
        <div className='relative bg-white shadow-slate-500 p-10 rounded-[10px] h-[300px] w-[300px]'>
            <button className='absolute top-2 right-3 bg-red-600 p-1 rounded' onClick={()=> setShowPopUp(false)}>close</button>
            <h1 className='text-xl'>{singleUsers[0].name}</h1>
            <h1 className='text-xl'>{singleUsers[0].email}</h1>
            <h1 className='text-xl'>{singleUsers[0].age}</h1>
            <h1 className='text-xl'>{singleUsers[0].gender}</h1>
        </div>
    </div>
  )
}

export default View