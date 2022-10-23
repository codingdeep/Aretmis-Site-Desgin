import React, {Component} from 'react';

class ProcessAbout extends Component {
    render() {
        return (
            <section className="process-style-two alternet-2">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="pattern-layer"
                             style={{backgroundImage: "url(assets/images/shape/pattern-36.png)"}}></div>
                        <div className="sec-title light centred">
                            <span className="top-title">How We Work</span>
                            <h2>Our Plan & Working Style</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="inner-box">
                                        <span>Step</span>
                                        <h2>01...</h2>
                                        <figure className="icon-box"><img src="assets/images/icons/icon-51.png" alt=""/>
                                        </figure>
                                        <h3><a href="">Process Design</a></h3>
                                        <p>We build you a recruitment process that delivers a seamless, on-brand experience for you.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="inner-box">
                                        <span>Step</span>
                                        <h2>02...</h2>
                                        <figure className="icon-box"><img src="assets/images/icons/icon-52.png" alt=""/>
                                        </figure>
                                        <h3><a href="">Candidate Sourcing</a></h3>
                                        <p>Through digital, traditional, and grassroots campaigns, our recruitment marketing strategies find you the best of the best.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="inner-box">
                                        <span>Step</span>
                                        <h2>03...</h2>
                                        <figure className="icon-box"><img src="assets/images/icons/icon-53.png" alt=""/>
                                        </figure>
                                        <h3><a href="">Onboarding</a></h3>
                                        <p>We’re committed to making it great. We’ll oversee all new-start orientation functions for new associates–even drug and background checks!</p>

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

export default ProcessAbout;
