import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../../Redux/createSlice";

const Navbar = () => {
  const {users} = useSelector((state)=> state.crud)
  const dispatch = useDispatch()

  const [search, setSearch] = useState("");

  useEffect(()=>{
    dispatch(searchUser(search))
  },[search])
  return (
    <div className="flex justify-between items-center  bg-black text-white py-3 px-3">
     <Link to="/"><h1 className="text-lg">Crud App</h1></Link>
      <div >
        <ul className="flex gap-2">
          <Link to="/create"><li>Create Post</li></Link>
          <Link to="/read"><li>All Post ({users.length})</li></Link>
        </ul>
      </div>
      <div className="w-[350px] text-black">
        <input className="h-8 w-full border-none outline-none px-2 "
         type="text"
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search" />
      </div>
    </div>
  );
};

export default Navbar;
