import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updatedUser } from '../../Redux/createSlice';

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const [editData, setEditData] = useState();
    const {users, loading} = useSelector((state)=> state.crud)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(id){
            const singleUsersEdit = users.filter((item)=> item.id === id)
            setEditData(singleUsersEdit[0]);
        }
    },[])

    const newData = (e)=>{
        setEditData({...editData, [e.target.name] : e.target.value})
    }

    const handleSummit = (e)=>{
        e.preventDefault();
        dispatch(updatedUser(editData))
        navigate("/read");

    }
  return (
    <div>
    <Navbar />
    <div className="mt-10 px-10 flex justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSummit}>
        <label className="mr-3">name:</label>
        <input
          className="border-gray-400 text-lg px-4 py-2 text-black w-[300px] border-2 outline-none rounded focus:border-gray-600"
          type="text"
          name="name"
          value={editData && editData.name}
          onChange={newData}
          placeholder="Name"
        />

        <label className="mr-3">email:</label>
        <input
          className="border-gray-400 text-lg px-4 py-2 text-black w-[300px] border-2 outline-none rounded focus:border-gray-600"
          type="text"
          name="email"
          value={editData && editData.email}
          onChange={newData}
          placeholder="email"
        />

        <label className="mr-3">age:</label>
        <input
          className="border-gray-400 text-lg px-4 py-2 text-black w-[300px] border-2 outline-none rounded focus:border-gray-600"
          type="text"
          name="age"
          value={editData && editData.age}
          onChange={newData}
          placeholder="age"
        />

        <div className="flex flex-col items-start ">
          <div className="flex items-center">
            <label className="mr-1">male:</label>
            <input  
              type="radio"
              name="gender"
              value="male"
              checked= {editData && editData.gender === "male"}
              onChange={newData}
            />
          </div>

          <div className="flex items-center">
            <label className="mr-1">female:</label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={editData && editData.gender === "female"}
              onChange={newData}
            />
          </div>
        </div>
        <button className="bg-blue-900 text-white rounded-md px-2 py-1 mt-5 ">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Edit