import React from 'react'
import Contact from './Contact/Contact'
import MessageList from './MessageList/MessageList'
import './ContactAndMessages.scss'

const ContactAndMessages = () => {
  return (
    <div className='contact-messages-content'>
        <Contact/>
        <MessageList/>
    </div>
  )
}

export default ContactAndMessages
