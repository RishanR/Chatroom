import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './join.css';

const backgroundImage = Math.floor((Math.random() * 8) + 1);

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(
        <div className={`joinOuter joinOuterContainer${backgroundImage}`}>
            <div className="joinTint">
                <div className="joinInnerContainer">
                    <h1 className="joinHeading">J o i n&nbsp;&nbsp;&nbsp;R o o m</h1>
                    <input id="inName" className="inputName" placeholder="&#xf2b9;&nbsp;&nbsp;Name" onChange={event => setName(event.target.value)}/>
                    <input id="inRoom" className="inputRoom" placeholder="&#xf015;&nbsp;&nbsp;Room" onChange={event => setRoom(event.target.value)}/>
                    <br />
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={ `/chat?name=${name}&room=${room}`}>
                        <button className="joinButton" type="submit">JOIN</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Join;