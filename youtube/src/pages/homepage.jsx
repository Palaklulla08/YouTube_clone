import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { RiHistoryLine } from "react-icons/ri";
import { PiVideoBold } from "react-icons/pi";
import { LuCircleUser } from "react-icons/lu";

function Homepage() {
  return (
    <>
      <div className="home flex  border">
        <div className="leftsection w-[3rem] flex flex-col gap-8 h-auto items-center  justify-items-center text-xl position-fixed p-4 pl-6 pt-8">
          <div className="flex flex-col items-center justify-items-center"><AiFillHome/><p className="text-sm">Home</p></div>
          <div className="flex flex-col items-center justify-items-center"><SiYoutubeshorts/><p className="text-sm">Shorts</p></div>
          <div className="flex flex-col items-center justify-items-center"><PiVideoBold /><p className="text-sm">Subscri.</p></div>
          <div className="flex flex-col items-center justify-items-center"><LuCircleUser/><p className="text-sm">You</p></div>
        </div>
        

        <div className="rightsectiontop">
          <div className="suggestions flex gap-6 p-4  pl-5">
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">All</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Music</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">React</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Page</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Songs</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Live</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Cricket</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Football</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Gaming</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Movies</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">News</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Comedy</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Cooking</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Education</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Podcast</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Travel</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Fashion</div>
            <div className="bg-gray-200 text-sm items-center rounded-[30%] p-1">Beauty</div>
            

          </div>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
