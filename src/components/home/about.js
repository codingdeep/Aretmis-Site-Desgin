import React, {Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/pattern-5.png)"}}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="content_block_2">
                                    <div className="content-box centred">
                                        <figure className="image-box"><img src="assets/images/resource/about-1.jpg"
                                                                           alt=""/></figure>
                                        <div className="inner-box">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-3.png"
                                                                              alt=""/></figure>
                                            <h3>Educational Resources <br/>for Job Seekers</h3>
                                            <a href="index-2.html">Guides & E-books<i
                                                className="flaticon-direct-download"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="content_block_3">
                                    <div className="content-box">
                                        <div className="sec-title">
                                            <span className="top-title">About Our Agency</span>
                                            <h2>We have your dream job! We know who is a good fit!</h2>
                                        </div>
                                        <div className="text">
                                            <p>Artemis Talent Search is the cutting edge of talent acquisition. We do things differently than traditional recruiting firms. First, we specialize in cold calling the most desirable candidates and engaging them to make the switch to your company..</p>
                                        </div>
                                        <div className="link"><Link to="/about"><i
                                            className="flaticon-right-arrow"></i>More About Us</Link></div>
                                        <div className="author-box">
                                            <div className="author-text">
                                                <h3>Pathway for both employer and employee.</h3>
                                            </div>
                                            <div className="author-info">
                                                <figure className="author-thumb"><img
                                                    src="assets/images/resource/author-1.jpg" alt=""/></figure>
                                                <h4>Kunle Badmus</h4>
                                                <span className="designation">Founder</span>
                                                <figure className="signature"><img
                                                    src="assets/images/icons/signature-1.png" alt=""/></figure>
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

export default About;
