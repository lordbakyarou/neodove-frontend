import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const ChatWindow = () => {
  const chatData = useSelector((state) => state.currentChat);
  const loggedInUser = useSelector((state) => state.user);

  const [chats, setChats] = useState([]);

  const [chatInput, setChatInput] = useState("");

  const [messageSent, setMessageSent] = useState(false);

  const [ws, setWs] = useState(null);

  useEffect(() => {
    if (!loggedInUser?._id) return;

    const webSocket = new WebSocket(
      `ws://localhost:9000?userId=${loggedInUser._id}`
    );
    setWs(webSocket);

    webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message, "this is message");
      setChats((prevChats) => [...prevChats, message]);
    };

    webSocket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    webSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      webSocket.close();
    };
  }, [chatData._id]);

  useEffect(() => {
    async function getMyChatsWithUser() {
      const myChats = await axios.get(
        `${URL}/message/get-all-message/${loggedInUser._id}/${chatData._id}`,
        { withCredentials: true }
      );

      if (Array.isArray(myChats.data.message)) {
        setChats([...myChats.data.message]);
      } else {
        setChats([]);
      }
    }

    getMyChatsWithUser();
  }, [chatData._id]);

  console.log(chats);

  async function sendChat() {
    const data = await axios.post(
      `${URL}/message/send-message`,
      {
        senderId: loggedInUser._id,
        receiverId: chatData._id,
        message: chatInput,
      },
      {
        withCredentials: true,
      }
    );

    setMessageSent(!messageSent);

    if (ws && ws.readyState === WebSocket.OPEN) {
      const message = {
        type: "private_message",
        recipientId: chatData._id,
        text: chatInput,
      };
      console.log(message);
      ws.send(JSON.stringify(message));
      setChatInput("");
    } else {
      console.log("WebSocket is not open");
    }
  }

  return (
    <div className="md:ml-72 w-full h-screen min-h-screen relative">
      <Navbar />
      <div className="flex flex-col h-full overflow-y items-center">
        <div className="flex flex-col gap-5 absolute bottom-16 justify-end overflow-y-auto h-full pt-96 flex-grow p-4 space-y-2">
          <div className="self-center bg-[#ffeecd] rounded-xl p-2 flex flex-wrap gap-1 items-center justify-center text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <IoIosLock /> Messages are end-to-end encrypted.
            </div>
            This is start of your conversasion
          </div>
          {chats.map((chat, index) => {
            if (chat.sender == loggedInUser._id)
              return <MyChat className="self-end" key={index} chat={chat} />;
            else
              return (
                <SenderChat className="self-start" key={index} chat={chat} />
              );
          })}
        </div>
        <div className="absolute bottom-5 w-full">
          <div className="relative mx-10 align-items-center rounded-xl bg-white">
            <FaRegFaceSmileWink className="absolute left-2 top-2.5 flex items-center text-xl text-gray-500" />
            <Input
              className="pl-10"
              placeholder="Message"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <IoSend
              className="absolute right-2 top-2.5 flex items-center text-xl text-blue-200 hover:text-[#8BABD8]"
              onClick={sendChat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
