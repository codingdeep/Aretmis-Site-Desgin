import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Industries extends Component {
    render() {
        return (
            <section className="industries-section bg-color-1">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/pattern-7.png)'}}></div>
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="row clearfix">
                            <div className="col-xl-4 col-lg-12 col-sm-12 btn-column">
                                <div className="sec-title light">
                                    <span className="top-title">Our Service areas</span>
                                    <h2>Industries Hiring</h2>
                                </div>
                                <div className="tab-btn-box">
                                    <ul className="tab-btns tab-buttons clearfix">
                                        <li className="tab-btn active-btn" data-tab="#tab-3">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-10.png"
                                                                              alt=""/></figure>
                                            <h3>Logistics & Services</h3>
                                        </li>
                                        <li className="tab-btn" data-tab="#tab-4">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-11.png"
                                                                              alt=""/></figure>
                                            <h3>Hospitality</h3>
                                        </li>
                                        <li className="tab-btn" data-tab="#tab-5">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-12.png"
                                                                              alt=""/></figure>
                                            <h3>Manufacturing</h3>
                                        </li>
                                        <li className="tab-btn" data-tab="#tab-6">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-13.png"
                                                                              alt=""/></figure>
                                            <h3>Education & Government</h3>
                                        </li>
                                        <li className="tab-btn" data-tab="#tab-7">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-14.png"
                                                                              alt=""/></figure>
                                            <h3>Software/IT</h3>
                                        </li>
                                        <li className="tab-btn" data-tab="#tab-8">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-15.png"
                                                                              alt=""/></figure>
                                            <h3>Front Line Support</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-sm-12 content-column">
                                <div className="tabs-content">
                                    <div className="tab active-tab" id="tab-3">
                                        <div className="inner-box">
                                            <figure className="image-box"><img
                                                src="assets/images/resource/industries-1.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h2>Logistics & Services Industries</h2>
                                                    <span>26 Jobs in 10 Different Companies</span>
                                                </div>
                                                <div className="line"></div>
                                                <div className="link"><Link to="/careers"><i
                                                    className="flaticon-right-arrow-angle"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-4">
                                        <div className="inner-box">
                                            <figure className="image-box"><img
                                                src="assets/images/resource/industries-2.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h2>Hospitality</h2>
                                                    <span>26 Jobs in 10 Different Companies</span>
                                                </div>
                                                <div className="line"></div>
                                                <div className="link"><Link to="/careers"><i
                                                    className="flaticon-right-arrow-angle"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-5">
                                        <div className="inner-box">
                                            <figure className="image-box"><img
                                                src="assets/images/resource/industries-3.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h2>Manufacturing</h2>
                                                    <span>26 Jobs in 10 Different Companies</span>
                                                </div>
                                                <div className="line"></div>
                                                <div className="link"><Link to="/careers"><i
                                                    className="flaticon-right-arrow-angle"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-6">
                                        <div className="inner-box">
                                            <figure className="image-box"><img
                                                src="assets/images/resource/industries-4.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h2>Education & Government</h2>
                                                    <span>26 Jobs in 10 Different Companies</span>
                                                </div>
                                                <div className="line"></div>
                                                <div className="link"><Link to="/careers"><i
                                                    className="flaticon-right-arrow-angle"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-7">
                                        <div className="inner-box">
                                            <figure className="image-box"><img
                                                src="assets/images/resource/industries-5.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h2>Software/IT</h2>
                                                    <span>26 Jobs in 10 Different Companies</span>
                                                </div>
                                                <div className="line"></div>
                                                <div className="link"><Link to="/careers"><i
                                                    className="flaticon-right-arrow-angle"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-8">
                                        <div className="inner-box">
                                            <figure className="image-box"><img
                                                src="assets/images/resource/industries-6.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h2>Front Line Support</h2>
                                                    <span>26 Jobs in 10 Different Companies</span>
                                                </div>
                                                <div className="line"></div>
                                                <div className="link"><Link to="/careers"><i
                                                    className="flaticon-right-arrow-angle"></i></Link></div>
                                            </div>
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

export default Industries;
