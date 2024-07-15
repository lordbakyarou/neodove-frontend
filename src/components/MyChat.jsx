import { convertToAmPm } from "@/lib/utils";
import React from "react";

//React Icons
import { IoCheckmarkOutline } from "react-icons/io5";

const MyChat = ({ chat }) => {
  return (
    <div className="bg-[#d9fdd3] flex flex-col rounded-xl w-1/2 p-2 self-end">
      <div>{chat.message}</div>
      <div className="flex justify-end text-gray-500 w-full items-center gap-2">
        <p>{convertToAmPm(chat.createdAt)}</p>
        <p>
          <IoCheckmarkOutline />
        </p>
      </div>
    </div>
  );
};

export default MyChat;
