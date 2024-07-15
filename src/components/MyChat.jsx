import React from "react";

//React Icons
import { IoCheckmarkOutline } from "react-icons/io5";

const MyChat = () => {
  return (
    <div className="bg-green-300 flex flex-col rounded-xl w-1/2 p-2 self-end">
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

export default MyChat;
