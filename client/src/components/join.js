import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/join.css';

const backgroundImage = Math.floor((Math.random() * 8) + 1);

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(
        <div className={`joinOuter joinOuterContainer${backgroundImage}`}>
            <div className="joinTint">
                <form className="joinInnerContainer" onSubmit={(event) => {
                    event.preventDefault();
                    console.log(`Name: ${name}\nRoom: ${room}`);
                }}>
                    <h1>J o i n&nbsp;&nbsp;&nbsp;R o o m</h1>
                    <input id="inName" className="inputName" placeholder="&#xf2b9;&nbsp;&nbsp;Name" onChange={event => setName(event.target.value)}/>
                    <input id="inRoom" className="inputRoom" placeholder="&#xf015;&nbsp;&nbsp;Room" onChange={event => setRoom(event.target.value)}/>
                    <br />
                    <button className="joinButton" type="submit">JOIN</button>
                </form>
            </div>
        </div>
    );
}

export default Join;