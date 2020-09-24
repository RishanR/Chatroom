import React from 'react';

import './message.css';

import ReactEmoji from 'react-emoji';

const Message = ({message, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(message.user === trimmedName){
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText">{trimmedName}</p>
                    <div className="messageBoxOutgoing">
                        <p className="messageText">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBoxIncoming">
                        <p className="messageText">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                    <p className="sentText">{message.user}</p>
                </div>

            )
    );
}

export default Message;
