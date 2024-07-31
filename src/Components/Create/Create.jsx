import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/createSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(createUser(user));
    navigate("/read")
  };

  return (
    <div>
      <Navbar />
      <div className="mt-10 px-10 flex justify-center items-center">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="mr-3">name:</label>
          <input
            className="border-gray-400 text-lg px-4 py-2 text-black w-[300px] border-2 outline-none rounded focus:border-gray-600"
            type="text"
            name="name"
            onChange={getUserData}
            placeholder="Name"
          />

          <label className="mr-3">email:</label>
          <input
            className="border-gray-400 text-lg px-4 py-2 text-black w-[300px] border-2 outline-none rounded focus:border-gray-600"
            type="text"
            name="email"
            onChange={getUserData}
            placeholder="email"
          />

          <label className="mr-3">age:</label>
          <input
            className="border-gray-400 text-lg px-4 py-2 text-black w-[300px] border-2 outline-none rounded focus:border-gray-600"
            type="text"
            name="age"
            onChange={getUserData}
            placeholder="age"
          />

          <div className="flex flex-col items-start ">
            <div className="flex items-center">
              <label className="mr-1">male:</label>
              <input  
                type="radio"
                name="gender"
                value="male"
                onChange={getUserData}
              />
            </div>

            <div className="flex items-center">
              <label className="mr-1">female:</label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={getUserData}
              />
            </div>
          </div>
          <button className="bg-blue-900 text-white rounded-md px-2 py-1 mt-5 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
