import React from 'react';
//styles
import '../styles/app.scss';
//assets
import line from '../assets/img/line.svg'

function nav() {
    return (
        <div className="whole-nav">
            
                <div className="top-nav">
                    <img src={line} alt="line"/>

                    <nav>
                        <ul>
                            <li>
                                <a href="">home</a>
                            </li>
                            <li>
                                <a href="">work</a>
                            </li>
                            <li>
                                <a href="">about</a>
                            </li>
                            <li>
                                <a href="">contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="bottom-nav">
                    <p>01</p>
                    <hr />
                </div>

        </div>
    )
}

export default nav
