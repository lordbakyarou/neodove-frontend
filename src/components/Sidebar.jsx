import React from "react";
import SidebarNavbar from "./SidebarNavbar";
import YourChats from "./YourChats";

const Sidebar = () => {
  return (
    <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] shadow-xl border-r">
      <div className="flex flex-col gap-3 bg-white h-full h">
        <SidebarNavbar />
        <YourChats />
      </div>
    </div>
  );
};

export default Sidebar;
