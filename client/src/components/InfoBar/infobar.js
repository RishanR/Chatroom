import React from 'react';
import { Link } from 'react-router-dom';

import './infobar.css'

const InfoBar = (props) => {
    return(
        <div className="infoBar">
            <div className="infoRoom">
                <div className="infoOnlineIcon"></div>
                {props.room}
            </div>

            <div className="infoClose">
                <a href="/"><div className="infoCloseIcon"></div></a>
            </div>
        </div>
    );
}

export default InfoBar;