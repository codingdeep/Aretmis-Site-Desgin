import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Welcome extends Component {
    componentDidMount() {
        window.initTab()
    }

    render() {
        return (
            <section className="welcome-section">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="top-title">Welcome to Artemis</span>
                        <h2>A REVOLUTION IN RECRUITING</h2>
                        <p>the recruitment experience you deserve at a price you’d never expect.</p>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <figure className="image-box js-tilt"><img src="assets/images/resource/welcome-1.png"
                                                                       alt=""/></figure>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div id="content_block_1">
                                <div className="content-box">
                                    <div className="tabs-box">
                                        <div className="tab-btn-box">
                                            <ul className="tab-btns tab-buttons clearfix">
                                                <li className="tab-btn active-btn" data-tab="#tab-1">
                                                    <i className="employ-icon flaticon-employer"></i>
                                                    <h5>For Employees</h5>
                                                    <i className="arrow-icon flaticon-up-arrow-2"></i>
                                                </li>
                                                <li className="tab-btn" data-tab="#tab-2">
                                                    <i className="employ-icon flaticon-businessman"></i>
                                                    <h5>For Employers</h5>
                                                    <i className="arrow-icon flaticon-up-arrow-2"></i>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="tabs-content">
                                            <div className="tab" id="tab-2">
                                                <div className="inner-box">
                                                    <h5>Find the Employees</h5>
                                                    <h2>Hire Your Next Candidate On Artemis</h2>
                                                    <p>We are an IT Services, Staff Augmentation, and Infrastructure Management company, and carve the right digital path for enterprises across industries. We deliver cutting edge IT solutions and staff augmentation services for clients across industries.</p>
                                                    <ul className="list clearfix">
                                                        <li>
                                                            <figure className="icon-box"><img
                                                                src="assets/images/icons/icon-1.png" alt=""/></figure>
                                                            <h4>Understand Your Needs</h4>
                                                        </li>
                                                        <li>
                                                            <figure className="icon-box"><img
                                                                src="assets/images/icons/icon-2.png" alt=""/></figure>
                                                            <h4>Find the Perfect Candidate</h4>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="tab active-tab" id="tab-1">
                                                <div className="inner-box">
                                                    <h5>Find Your Right Place</h5>
                                                    <h2>Explore Your Career Path With Artemis</h2>
                                                    <p>Not sure what you’re looking for? We can still help!
                                                        Submit your resume and we’ll reach out if we have a great match.</p>
                                                    <ul className="list clearfix">
                                                        <li>
                                                            <figure className="icon-box"><img
                                                                src="assets/images/icons/icon-71.png" alt=""/></figure>
                                                            <h4>Executive Opportunities</h4>
                                                        </li>
                                                        <li>
                                                            <figure className="icon-box"><img
                                                                src="assets/images/icons/icon-72.png" alt=""/></figure>
                                                            <h4>Non Excecutive Opportunities</h4>
                                                        </li>
                                                    </ul>
                                                    <div className="link"><Link to="/careers"><i
                                                        className="flaticon-right-arrow"></i>Your Required Talent</Link>
                                                    </div>
                                                </div>
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

export default Welcome;
