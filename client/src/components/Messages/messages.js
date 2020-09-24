import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/message'

import './messages.css';

const Messages = ({messages, name}) => {
    return(
        <div>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </div>
    );
}

export default Messages;
