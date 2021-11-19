import React from 'react';
import { Link } from "react-router-dom";
//styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';


function about() {
    return (
        <div>
            <div className="about-container">
                <h1>Hey! I’m Noah, a freelance <br />
                motion, web designer.</h1>
                <p>For the past year and a half, I've worked hard to improve  <br />
                my skills in motion design, graphic design, and web design.</p>
                
                    <div className="about-link">
                    <Link to="/reel"><h2>2021 Motion reel</h2></Link>
                    <Link to="/reel"><FontAwesomeIcon className="about-right-arrow" icon={faLongArrowAltRight}/></Link>
                    </div>
                
                <div className="about-social">
                    <a href="https://twitter.com/TheBroken_XD" target="_blank"><FontAwesomeIcon className="about-icon" icon={faTwitter}/></a>
                    <a href="https://www.instagram.com/thebroken_xd" target="_blank"><FontAwesomeIcon className="about-icon" icon={faInstagram}/></a>
                    <a href="https://www.youtube.com/channel/UCki-ndr3RW_KooIDTheJOgA" target="_blank"><FontAwesomeIcon className="about-icon" icon={faYoutube}/></a>
                    <a href="#"><FontAwesomeIcon className="about-icon" icon={faDiscord}/></a>
                </div>
            </div>
        </div>
    )
}

export default about;
