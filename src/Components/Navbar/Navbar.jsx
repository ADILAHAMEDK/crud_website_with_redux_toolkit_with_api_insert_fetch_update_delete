import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  bg-black text-white py-3 px-3">
     <Link to="/"><h1 className="text-lg">Crud App</h1></Link>
      <div >
        <ul className="flex gap-2">
          <Link to="/create"><li>Create Post</li></Link>
          <li>All Post</li>
        </ul>
      </div>
      <div className="w-[350px] text-black">
        <input className="h-8 w-full border-none outline-none px-2 " type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Navbar;
