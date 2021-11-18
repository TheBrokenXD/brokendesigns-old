import React from 'react';
import { Link } from "react-router-dom";
//assets
import ok from '../assets/img/OK.svg';

function Logo() {
    return (
        <div>
            <Link to="/"><img src={ok} alt="logo" className="logo"/></Link>
        </div>
    )
}

export default Logo
