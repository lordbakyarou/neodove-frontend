import { convertToAmPm } from "@/lib/utils";
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const SenderChat = ({ chat }) => {
  return (
    <div className="bg-white flex flex-col rounded-xl w-1/2 p-2">
      <div>{chat.message}</div>
      <div className="flex justify-end text-white w-full items-center gap-2">
        <p className="text-black">{convertToAmPm(chat.createdAt)}</p>
        <p>
          <IoCheckmarkOutline />
        </p>
      </div>
    </div>
  );
};

export default SenderChat;
