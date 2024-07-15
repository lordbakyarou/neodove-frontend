import React from "react";
import Navbar from "./Navbar";

//Shadcn Elements
import { Input } from "./ui/input";

//React icons
import { IoSend } from "react-icons/io5";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

//Components imports
import SenderChat from "./SenderChat";
import MyChat from "./MyChat";

const ChatWindow = () => {
  return (
    <div className="md:ml-72 w-full h-screen min-h-screen relative">
      <Navbar />
      <div className="flex flex-col h-full overflow-y items-center">
        <div className="flex flex-col gap-5 absolute bottom-16 overflow-y-auto h-full pt-96 flex-grow p-4 space-y-2">
          <div className="self-center bg-[#ffeecd] rounded-xl p-2 flex flex-wrap gap-1 items-center justify-center text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <IoIosLock /> Messages are end-to-end encrypted.
            </div>
            This is start of your conversasion
          </div>
          <MyChat className="self-end" />
          <SenderChat className="self-start" />
          <MyChat className="self-end" />
          <SenderChat className="self-start" />
          <MyChat className="self-end" />
          <MyChat className="self-end" />
          <MyChat className="self-end" />
          <MyChat className="self-end" />
        </div>
        <div className="absolute bottom-5 w-full">
          <div className="relative mx-10 align-items-center rounded-xl bg-white">
            <FaRegFaceSmileWink className="absolute left-2 top-2.5 flex items-center text-xl text-gray-500" />
            <Input className="pl-10" placeholder="Message" />
            <IoSend className="absolute right-2 top-2.5 flex items-center text-xl text-blue-200 hover:text-[#8BABD8]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
