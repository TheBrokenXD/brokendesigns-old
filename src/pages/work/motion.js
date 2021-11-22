import React from 'react';
//components
import Footer from "../../components/Footer";
//assets
import workone from '../../assets/img/workone.svg';
import worktwo from '../../assets/img/worktwo.svg';
import workthree from '../../assets/img/workthree.svg';
import workfour from '../../assets/img/workfour.svg';
import workfive from '../../assets/img/workfive.svg';
import worksix from '../../assets/img/worksix.svg';
import workseven from '../../assets/img/workseven.svg';
import workeight from '../../assets/img/workeight.svg';
import worknine from '../../assets/img/worknine.svg';
import workten from '../../assets/img/workten.svg';

function motion() {
    return (
        <div className="motion-row">
            
            <div className="row-1">
                <img src={workone} className="work-1-banner" alt="work" />
                <div className="work-1-details">
                    <h3>Motion Practice</h3>
                    <p>The fact that you can do so much more with After Effects prompted me to undertake more 3D <br/>
                    work in AE. </p>
                </div>
            </div>

            <div className="row-2">

                <div className="work-2">
                    <img src={worktwo} className="work-2-banner" alt="work" />
                    <div className="work-2-details">
                        <h3>Brand Identity “BROKEN”</h3>
                        <p>A little more about my logo - OK?</p>
                    </div>
                </div>
                <div className="work-3">
                    <img src={workthree} className="work-3-banner" alt="work" />
                    <div className="work-3-details">
                        <h3>Notifications</h3>
                        <p>Turn on notifications!</p>
                    </div>
                </div>

            </div>

            <div className="row-3">

                <div className="work-4">
                    <img src={workfour} className="work-4-banner" alt="work" />
                    <div className="work-4-details">
                        <h3>Nineteen - 19</h3>
                        <p>An animation I'm hoping to do for my birthday.</p>
                    </div>
                </div>
                <div className="work-5">
                    <img src={workfive} className="work-5-banner" alt="work" />
                    <div className="work-5-details">
                        <h3>Team Decoderz</h3>
                        <p>Brand & Animation</p>
                    </div>
                </div>

            </div>

            <div className="row-4">

                <div className="work-6">
                    <img src={worksix} className="work-6-banner" alt="work" />
                    <div className="work-6-details">
                        <h3>Vincenzo - Stream Package</h3>
                        <p>A simple Fan-made stream package <br/>
                        for Vincenzo</p>
                    </div>
                </div>
                <div className="work-7">
                    <img src={workseven} className="work-7-banner" alt="work" />
                    <div className="work-7-details">
                        <h3>Scholarship Application</h3>
                        <p>Scholarship program offered by <br/>
                        School of motion</p>
                    </div>
                </div>
                <div className="work-8">
                    <img src={workeight} className="work-8-banner" alt="work" />
                    <div className="work-8-details">
                        <h3>Promo - Jayanth Kageri</h3>
                        <p>Promotional video for a client</p>
                    </div>
                </div>

            </div>

            <div className="row-5">

                <div className="work-9">
                    <img src={worknine} className="work-9-banner" alt="work" />
                    <div className="work-9-details">
                        <h3>Fabicon V2</h3>
                        <p>Motion design entry</p>
                    </div>
                </div>
                <div className="work-10">
                    <img src={workten} className="work-10-banner" alt="work" />
                    <div className="work-10-details">
                        <h3>Fabicon V1</h3>
                        <p>Motion design entry</p>
                    </div>
                </div>

            </div>

            <Footer />
            
        </div>
    )
}

export default motion;
