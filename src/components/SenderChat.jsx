import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const SenderChat = () => {
  return (
    <div className="bg-white flex flex-col rounded-xl w-1/2 p-2">
      <div>
        Heye asfaj as dfaks dfjkas dfka sdfk Heye asfaj as dfaks dfjkas dfka
        sdfk Heye asfaj as dfaks dfjkas dfka sdfk Heye asfaj as dfaks dfjkas
        dfka sdfk
      </div>
      <div className="flex justify-end text-white w-full items-center gap-2">
        <p>18:16</p>
        <p>
          <IoCheckmarkOutline />
        </p>
      </div>
    </div>
  );
};

export default SenderChat;
