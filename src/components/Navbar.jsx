import React from "react";

//React icons
import { IoIosSearch } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const chatData = useSelector((state) => state.currentChat);

  return (
    <div
      className="bg-white p-2 px-2 z-[80] fixed w-full
     top-0 shadow flex items-center gap-2 justify-between"
    >
      <div className="flex gap-2">
        <div>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1713449585141-0af71bcbfcc2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile Image"
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-semibold w-36 truncate">{chatData.name}</p>
          <p className="text-gray-500 cursor-pointer text-sm">
            last seen 5 mins ago
          </p>
        </div>
      </div>
      <div className="flex gap-5 text-gray-500 text-2xl bg-red">
        <IoIosSearch className="hover:text-black cursor-pointer" />
        <MdCall className="hover:text-black cursor-pointer" />
        <BsThreeDotsVertical className="hover:text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
