import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "./config";
import { FiMessageSquare } from "react-icons/fi";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import 'react-chatbot-kit/build/main.css';
import "./bot.css";

const Bot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const chatIcon = <FiMessageSquare />; // Icono del chat

  return (
    <div className="bot-container">
      {isChatOpen && (
        <div className="chat-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button className="toggle_button" onClick={toggleChat}>
        {isChatOpen ? "Cerrar chat" : "Abrir chat"} {chatIcon}
      </button>
    </div>
  );
};

export default Bot;
