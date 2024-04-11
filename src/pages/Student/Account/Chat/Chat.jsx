import React from 'react';
import './Chat.scss';
import Sidebar from '../../../../components/sidebar/Sidebar'
import ChatBox from './Components/ChatBox/ChatBox';

const Chat = () => {
  return (
    <div className='chat'>
      <Sidebar/>
      <ChatBox/>
    </div>
  )
}

export default Chat