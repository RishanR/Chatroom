import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './infobar.css'

const InfoBar = (props) => {
    const [showRed, setShowRed] = useState(false);
    
    return(
        <div className="infoBar">
            <div className="infoRoom">
                <div className="infoOnlineIcon"></div>
                {props.room}
            </div>

            <div className="infoClose">
                {!showRed ? (
                    <div onClick={() => {
                        props.setShowUsers(!props.showUsers)
                        setShowRed(!showRed)    
                    }} className="infoUsersDefault"></div>
                )
                : (
                    <div onClick={() => {
                        props.setShowUsers(!props.showUsers)
                        setShowRed(!showRed)    
                    }} className="infoUsersRed"></div>
                )}
                <a href="/"><div className="infoCloseIcon"></div></a>
            </div>
        </div>
    );
}

export default InfoBar;