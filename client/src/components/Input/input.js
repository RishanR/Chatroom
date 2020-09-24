import React from 'react';

import './input.css';

const Input = ({ message, setMessage, sendMessage}) => {
    return(
    <form className="form">
        <input 
        id="messageInput"
        className="inputInput" 
        type="text" 
        placeholder="Type a message..." 
        value={message} 
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage : null}/>
        <button className="inputSendButton" onClick={sendMessage}></button>
    </form>
    )
}

export default Input;

