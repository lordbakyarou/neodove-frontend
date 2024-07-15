import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Chat = ({ userId, recipientId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:9000?userId=${userId}`);

    console.log(ws, "inside useeffect");
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      console.log(message, "this is message");
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      ws.close();
    };
  }, [ws]);

  const sendMessage = () => {
    const message = {
      type: "private_message",
      recipientId,
      text: input,
    };
    ws.send(JSON.stringify(message));
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            hi
            {msg.senderId === userId
              ? `Me: ${msg.text}`
              : `User ${msg.senderId}: ${msg.text}`}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
