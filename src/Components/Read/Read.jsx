import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../Redux/createSlice";
import { Link } from "react-router-dom";
import View from "../View/View";
import { deleteUser } from "../../Redux/createSlice";

const Read = () => {
  const { users, loading, searchData } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [radioData, setRadioData] = useState("")

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h1 className="text-2xl text-center text-black">Loading</h1>;
  }
  return (
    <div> 
      <Navbar />
      {showPopUp ? <View id={id} showPopUp={showPopUp} setShowPopUp={setShowPopUp}/> : ""}

      <div className=" m-w-[1640px] mx-auto px-3 py-3 ">
        <div className="flex items-center justify-center gap-4">
        <input type="radio" name="gender" checked={radioData === ""} onChange={()=>setRadioData("")}/>
        <label>All</label>
        <input type="radio" name="gender" value="male" checked={radioData === "male"} onChange={(e)=>setRadioData(e.target.value)} />
        <label>male</label>
        <input type="radio" name="gender" value="female" checked={radioData === "female"} onChange={(e)=>setRadioData(e.target.value)} />
        <label>female</label>
        </div>
        <div className=" w-full flex items-center flex-wrap">
          {users &&
          users.filter((item)=> {
            if(searchData.length === 0){
              return item
            }else{
              return item.name.toLowerCase().includes(searchData.toLowerCase())
            }
          }).filter((item)=>{
            if(radioData === "male"){
              return item.gender === radioData;
            }else if(radioData === "female"){
              return item.gender === radioData;
            }else{
              return item;
            }
          }).map((item) => (
              <div key={item.id} className="text-black text-center border-gray-600 border-2 mr-2 p-6 ">
                <h1>Name:{item.name}</h1>
                <h1>Email:{item.email}</h1>
                <h1>Age:{item.age}</h1>
                <h1>Gender:{item.gender}</h1>
                <div className="flex items-center gap-2 text-black">
                  <button onClick={()=> [setId(item.id), setShowPopUp(true)]} className="bg-orange-400 p-1 rounded">view</button>
                  <Link to={`/Edit/${item.id}`}><button className="bg-blue-500 p-1 rounded">Edit</button></Link>
                  <button onClick={()=> dispatch(deleteUser(item.id))} className="bg-red-500 p-1 rounded">Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
