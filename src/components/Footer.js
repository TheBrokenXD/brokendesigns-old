import React, { Component } from 'react';
//styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

export default class text extends Component {

    constructor() {
        super()
        this.state={time:new Date()}
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }
    
    componentWillMount() {
        setInterval(()=>this.currentTime(),500)
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-container">

                    <div className="time-zone">
                        <h1>IST <FontAwesomeIcon className="about-right-arrow" icon={faLongArrowAltRight}/> <br/> {this.state.time.toLocaleTimeString()}</h1>
                    </div>
    
                    <div className="footer-flex">
                        <div className="feedback">
                            <span>Feedbacks? Much appreciated !</span>
                            <div className="footer-input">
                                <input type="text" placeholder="Your opinion"/>
                                <button className="feedback-btn">Send</button>
                            </div>
                        </div>
                        <div className="footer-socials">
                            <ul>
                                <li><a href=""><span><FontAwesomeIcon className="footer-icon" icon={faTwitter}/></span> <span>Twitter</span></a></li>
                                <li><a href=""><span><FontAwesomeIcon className="footer-icon" icon={faInstagram}/></span> <span>Instagram</span></a></li>
                                <li><a href=""><span><FontAwesomeIcon className="footer-icon" icon={faYoutube}/></span> <span>Youtube</span></a></li>
                                <li><a href=""><span><FontAwesomeIcon className="footer-icon" icon={faDiscord}/></span> <span>Discord</span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-mail">
                        <h3>Get in Touch</h3>
                        <a href="">hello@brokendesigns.studio</a>
                    </div>
    
                    <div className="credits">
                        <h1>&copy; 2021 Broken</h1>
                    </div>

                </div>
            </div>
        )
    }
}
