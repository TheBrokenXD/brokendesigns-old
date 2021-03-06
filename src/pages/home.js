import React from 'react';
import { Link } from "react-router-dom";
//styles
import '../styles/app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

function home() {
    return (
        <div className="container">
            <div className="headline-project">
                <h1>2021</h1>
                <Link to="/reel"><div className="secondary-headline">
                    <h2>Motion Reel</h2>
                    <FontAwesomeIcon className="right-arrow" icon={faLongArrowAltRight}/>
                </div></Link>
                <h5>2021 was an awesome year! Look how it reflected on my motion design skills ;)</h5>
            </div>
        </div>
    )
}

export default home
