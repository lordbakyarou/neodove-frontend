import React from "react";

const Chatter = () => {
  return (
    <div className="flex gap-2 p-2 items-center">
      <div>
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1713449585141-0af71bcbfcc2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile Image"
        />
      </div>
      <div className="flex flex-col ">
        <p className="font-semibold w-36 truncate">Mayur Hanwate</p>
        <p className="text-gray-500  w-32 cursor-pointer bg-white  hover:shadow-xl truncate text-sm transition-all duration-300">
          Ok, see you laterasdfasdf Ok, see you laterasdfasdfOk, see you
          laterasdfasdf
        </p>
      </div>
      <div className="ml-auto text-gray-500 self-start text-sm">19:08</div>
    </div>
  );
};

export default Chatter;
