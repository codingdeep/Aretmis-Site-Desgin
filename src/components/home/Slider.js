import React from 'react';
import {Link} from "react-router-dom";

class Slider extends React.Component{

    componentDidMount() {
        window.initBanner()
    }

    render() {
        return (
            <section className="banner-section style-one">
                <div className="banner-carousel owl-theme owl-carousel owl-dots-none owl-nav-none">
                    <div className="slide-item style-one">
                        <div className="image-layer" style={{backgroundImage: 'url(assets/images/banner/banner-1.jpg)'}}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1"
                                 style={{backgroundImage: 'url(assets/images/shape/pattern-1.png)'}}></div>
                            <div className="pattern-2"
                                 style={{backgroundImage: 'url(assets/images/shape/pattern-2.png)'}}></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                                    <div className="content-box">
                                        <span>Delivering the best in</span>
                                        <h1>Work, Workforce<br/>and Workplaces.</h1>
                                        <p>IT Services, Talent as a Service, Infrastructure Management.</p>
                                        <div className="btn-box">
                                            <Link to="/about" className="theme-btn-two">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item style-two">
                        <div className="image-layer" style={{backgroundImage: "url(assets/images/banner/banner-2.jpg)"}}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1"
                                 style={{backgroundImage: "url(assets/images/shape/pattern-3.png)"}}></div>
                            <div className="pattern-2"
                                 style={{backgroundImage: "url(assets/images/shape/pattern-4.png)"}}></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                                    <div className="content-box">
                                        <span>Engaged with Staffing</span>
                                        <h1>Big ideas. Amazing talent. The recruiting software that brings them together.</h1>
                                        <p>Find and hire the right person for every job.</p>
                                        <div className="btn-box">
                                            <Link to="/careers" className="theme-btn-two">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item style-one">
                        <div className="image-layer" style={{backgroundImage: "url(assets/images/banner/banner-3.jpg)"}}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1"
                                 style={{backgroundImage: "url(assets/images/shape/pattern-1.png)"}}></div>
                            <div className="pattern-2"
                                 style={{backgroundImage: "url(assets/images/shape/pattern-2.png)"}}></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-7 col-lg-12 col-md-12 content-column">
                                    <div className="content-box">
                                        <span>Save your time</span>
                                        <h1>We send on average 2 high calibre candidates per job.</h1>
                                        <p>By way of us you can achieve what you want.</p>
                                        <div className="btn-box">
                                            <Link to="/contact" className="theme-btn-two">Learn More</Link>
                                        </div>
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

export default Slider;
