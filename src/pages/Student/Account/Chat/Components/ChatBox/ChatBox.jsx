import React from 'react';
import './ChatBox.scss';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from './Configure';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatBox = () => {
  return (
    <div className='chatbot'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default ChatBox