import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
//styles
import '../styles/app.scss';

function nav() {

    const {pathname} = useLocation;

    return (
        <div className="whole-nav">
            
                <div className="top-nav">
                    <div class="vl"></div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className="nav-link">home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/work" className={pathname === '/work' ? 'nav-link active' : 'nav-link'}>work</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={pathname === '/about' ? 'nav-link active' : 'nav-link'}>about</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={pathname === '/contact' ? 'nav-link active' : 'nav-link'}>contact</NavLink>
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
