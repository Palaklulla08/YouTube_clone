import react, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { HiUpload } from "react-icons/hi";
import { GoBell } from "react-icons/go";


function Navbar() {
  const [user,setuser] =useState("data:image/png;base64,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")
  const[modal,setmodal]=useState(false);

  const handleprofile=()=>{
    setmodal(!modal);
  }
  return (
    <>
  
      <div className="container w-[100%] border h-56px flex  items-center">
        <div className="leftside w-[20%] flex pl-6 items-center gap-4 text-3xl  p-2">
           <div className="menu"><IoMenu/></div>
           <div className="logo flex items-center"><FaYoutube className="bg-[white] text-[red] text-4xl"/><p>YouTube<sup className="font-light text-[20px]">IN</sup></p></div>
        </div>
        <div className="centerportion w-[65%]  flex  items-center gap-4 ">
          <div className="search flex rounded-full border gap-2 w-[65%] ml-30 justify-between items-center h-[38px]">
            <div className="inputsearch">
              <input type="text" placeholder="      Search" />
            </div>
            <div className="btn  bg-gray-200 rounded-r-full w-[50px] h-[36px] flex justify-center items-center border-l-1 ">
              <button>
                <FaSearch/>
              </button>
              </div>
          </div>
          <div className="mic rounded-full bg-gray-200 text-3xl"><IoMicOutline/></div>
        </div>
        <div className="rightside w-[15%] flex  justify-evenly items-center text-3xl">
          <div className="upload"><HiUpload/></div>
          <div className="bellicon"><GoBell/></div>
          <div className="profile" onClick={handleprofile}>
           <img className="w-8 h-8 rounded-full" src={user} alt="userprofile"/>
          </div>
          <div className={modal ? "profilemodal absolute top-16 right-10 w-40 h-24 bg-white border flex flex-col items-start p-4 gap-2":"hidden"}>
            <p>Profile</p>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
