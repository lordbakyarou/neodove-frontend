import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = ({ userId, recipientId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const userData = useSelector((state) => state.user);
  const ws = new WebSocket(`ws://localhost:9000?userId=${userData._id}`);

  useEffect(() => {
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
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

export default Dashboard;
