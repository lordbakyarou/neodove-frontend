import Chat from "@/components/Chat";
import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Image
import bgImage from "../assets/7600.png";

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const startChat = (userId) => {
    setSelectedUser(userId);
  };

  const userData = useSelector((state) => state.user);

  return (
    <div
      className={`h-full relative `}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "400px",
        backgroundColor: "#8BABD8",
      }}
    >
      <div className="flex">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Dashboard;
