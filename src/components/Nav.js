import React from 'react';
import { NavLink } from 'react-router-dom';
//styles
import '../styles/app.scss';

function nav() {
    return (
        <div className="whole-nav">
            
                <div className="top-nav">
                    <div class="vl"></div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/work">work</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">about</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">contact</NavLink>
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
