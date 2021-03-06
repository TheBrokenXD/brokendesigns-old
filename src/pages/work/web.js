import React from 'react';
//components
import Footer from "../../components/Footer";
//assets
import workoneweb from '../../assets/img/workoneweb.svg';

function web() {
    return (
        <div className="web-row">

            <div className="row-1-web">
                <img src={workoneweb} className="web-1-banner" alt="work" />
                <div className="web-1-details">
                    <h3>Allens’ Bots</h3>
                    <p>Sort-of an Ecommerce site for a bot-creation tech group! <br/>
                    Site: allensmarketingbots.tech</p>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default web
