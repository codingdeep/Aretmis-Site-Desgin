import React, {Component} from 'react';

class Service extends Component {
    componentDidMount() {
        window.serviceInit()
    }
    render() {
        return (
            <section className="service-section">
                <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/pattern-6.png)"}}></div>
                <div className="anim-icon">
                    <div className="icon-1" style={{backgroundImage: "url(assets/images/icons/anim-icon-1.png)"}}></div>
                    <div className="icon-2"></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="top-title">Solutions We Provide</span>
                        <h2>Inspiring Staffing Solutions</h2>
                        <p>Working in close partnership with our clients to ensure we learn the culture, <br/> ambitions and introduce the very best talent.</p>
                    </div>
                    <div className="three-item-carousel owl-carousel owl-theme owl-nav-none owl-dot-style-one">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/service/service-1.jpg" alt=""/>
                                </figure>
                                <div className="lower-content">
                                    <div className="content-box">
                                        <div className="inner">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-4.png"
                                                                              alt=""/></figure>
                                            <h4>Remote</h4>
                                        </div>
                                        {/*<div className="link"><a href="temprory-staffing.html">More Details</a></div>*/}
                                    </div>
                                    <div className="overlay-content">
                                        <p>Working in close partnership with our clients to ensure we learn the culture, ambitions and introduce the very best talent.</p>
                                        {/*<a href="temprory-staffing.html"><i className="flaticon-right-arrow"></i>More*/}
                                        {/*    details</a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/service/service-2.jpg" alt=""/>
                                </figure>
                                <div className="lower-content">
                                    <div className="content-box">
                                        <div className="inner">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-5.png"
                                                                              alt=""/></figure>
                                            <h4>On-Site</h4>
                                        </div>
                                        {/*<div className="link"><a href="direct-hire.html">More Details</a></div>*/}
                                    </div>
                                    <div className="overlay-content">
                                        <p>Explain to you how this idea denouncing pleasure & praising pain was
                                            born.</p>
                                        {/*<a href="direct-hire.html"><i className="flaticon-right-arrow"></i>More details</a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/service/service-3.jpg" alt=""/>
                                </figure>
                                <div className="lower-content">
                                    <div className="content-box">
                                        <div className="inner">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-6.png"
                                                                              alt=""/></figure>
                                            <h4>Hybrid</h4>
                                        </div>
                                        {/*<div className="link"><a href="contract-hire.html">More Details</a></div>*/}
                                    </div>
                                    <div className="overlay-content">
                                        <p>Explain to you how this idea denouncing pleasure & praising pain was
                                            born.</p>
                                        {/*<a href="contract-hire.html"><i className="flaticon-right-arrow"></i>More*/}
                                        {/*    details</a>*/}
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

export default Service;
