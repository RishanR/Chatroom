import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';

import './chat.css';

import InfoBar from '../InfoBar/infobar';
import Input from '../Input/input';
import Messages from '../Messages/messages';
import Users from '../Users/users'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [usersRoom, setUsersRoom] = useState([]);
    const [showUsers, setShowUsers] = useState(false);

    const ENDPOINT = "https://chatroom-messaging.herokuapp.com/";

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(msgs=>[...msgs, message]);

        });

        socket.on('roomData', (roomInfo) => {
            setUsersRoom(roomInfo.users);
        });
    }, []);

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        
        if (message){
            socket.emit('sendMessage', message, () => setMessage(""));
        }
    }

    console.log(message, messages);
    console.log(usersRoom);

    return(
        <div className="chatOuterContainer">
            <InfoBar className="infoBar" room={room} setShowUsers={setShowUsers} showUsers={showUsers}/>
            <div className="chatContainer">
                <ScrollToBottom className="chatMessageContainer">
                    <Messages messages={messages} name={name}/>
                </ScrollToBottom>
                
                {!showUsers ? (
                    <div className="usersCardClosed">
                        <Users usersRoom={usersRoom}/>
                    </div>
                )
                : (
                    <div className="usersCardOpened">
                        <Users usersRoom={usersRoom}/>
                    </div>  
                )}
                
            </div>
            <div className="inputNew">
                <Input  message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

export default Chat;