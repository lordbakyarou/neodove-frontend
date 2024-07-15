import React from "react";

//React Icons
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

//Shadcn imports
import { Input } from "@/components/ui/input";

const SidebarNavbar = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-white">
      <div className="cursor-pointer text-gray-500 hover:text-black pl-2">
        <FaBars className="text-xl" />
      </div>
      <div>
        <div className="relative align-items-center ">
          <IoIosSearch className="absolute left-2 top-2.5 flex items-center text-xl text-gray-500" />
          <Input
            className="pl-10 bg-gray-100 rounded-full"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarNavbar;
