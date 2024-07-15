import React from "react";
import Chatter from "./Chatter";

const YourChats = () => {
  return (
    <div className="flex flex-col gap-2">
      <Chatter />
      <Chatter />
      <Chatter />
      <Chatter />
    </div>
  );
};

export default YourChats;
