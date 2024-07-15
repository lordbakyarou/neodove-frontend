import React from "react";
import Chatter from "./Chatter";
import { useSelector } from "react-redux";

const YourChats = () => {
  const data = useSelector((state) => state.chatters);

  return (
    <div className="flex flex-col gap-2">
      {data.map((chatter) => (
        <Chatter chatterData={chatter} />
      ))}

      {/* <Chatter />
      <Chatter />
      <Chatter /> */}
    </div>
  );
};

export default YourChats;
