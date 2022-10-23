import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Process extends Component {
    render() {
        return (
            <section className="process-section centred">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="top-title">How it’s Possible</span>
                        <h2>Three Steps of Artemis</h2>
                        <p>... only three steps to the new job</p>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 process-block">
                            <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="00ms"
                                 data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="icon-box">
                                        <img src="assets/images/icons/icon-16.png" alt=""/>
                                            <span>01</span>
                                            <div className="anim-icon">
                                                <div className="icon-1"
                                                     style={{backgroundImage: "url(assets/images/shape/pattern-8.png)"}}></div>
                                                <div className="icon-2 rotate-me"
                                                     style={{backgroundImage: "url(assets/images/icons/anim-icon-2.png)"}}></div>
                                                <div className="icon-3 rotate-me"
                                                     style={{backgroundImage: "url(assets/images/icons/anim-icon-2.png)"}}></div>
                                            </div>
                                    </figure>
                                    <div className="lower-content">
                                        <h3>Initiation</h3>
                                        <p>You  contact us or send us your documents by e-mail or post </p>
                                        <Link to="/careers">More Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 process-block">
                            <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="300ms"
                                 data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="icon-box">
                                        <img src="assets/images/icons/icon-17.png" alt=""/>
                                            <span>02</span>
                                            <div className="anim-icon">
                                                <div className="icon-1"
                                                     style={{backgroundImage: "url(assets/images/shape/pattern-8.png)"}}></div>
                                                <div className="icon-2 rotate-me"
                                                     style={{backgroundImage: "url(assets/images/icons/anim-icon-2.png)"}}></div>
                                                <div className="icon-3 rotate-me"
                                                     style={{backgroundImage: "url(assets/images/icons/anim-icon-2.png)"}}></div>
                                            </div>
                                    </figure>
                                    <div className="lower-content">
                                        <h3>Interview</h3>
                                        <p>We arrange a face-to-face meeting on site or a telephone interview.</p>
                                        <Link to="/careers">More Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 process-block">
                            <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="600ms"
                                 data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="icon-box">
                                        <img src="assets/images/icons/icon-18.png" alt=""/>
                                            <span>03</span>
                                            <div className="anim-icon">
                                                <div className="icon-1"
                                                     style={{backgroundImage: "url(assets/images/shape/pattern-8.png)"}}></div>
                                                <div className="icon-2 rotate-me"
                                                     style={{backgroundImage: "url(assets/images/icons/anim-icon-2.png)"}}></div>
                                                <div className="icon-3 rotate-me"
                                                     style={{backgroundImage: "url(assets/images/icons/anim-icon-2.png)"}}></div>
                                            </div>
                                    </figure>
                                    <div className="lower-content">
                                        <h3>Promise</h3>
                                        <p>We find the right employer and your dream job.</p>
                                        <Link to="/careers">More Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Process;
