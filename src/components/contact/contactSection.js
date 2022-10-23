import React, {Component} from 'react';

class ContactSection extends Component {
    render() {
        return (
            <section className="contactinfo-section contact-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div id="content_block_6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <span className="top-title">Endless Opportunities</span>
                                        <h2>It’s Your Turn</h2>
                                        <p>Visit our <span>Employer FAQ</span> or <span>Employee FAQ</span> page for
                                            answers to common questions.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <figure className="icon-box"><img src="assets/images/icons/icon-39.png"
                                                                              alt=""/></figure>
                                            <div className="inner">
                                                <h4>Location</h4>
                                                <p>United States <br/>866 Wilshire, 2nd Street <br/>Los Angeles 90024.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><img src="assets/images/icons/icon-40.png"
                                                                              alt=""/></figure>
                                            <div className="inner">
                                                <h4>Call or Email</h4>
                                                <p>
                                                    <a href="tel:8004561234">(800) 456-1234</a><br/>
                                                    <a href="mailto:contact@example.com">contact@example.com</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><img src="assets/images/icons/icon-41.png"
                                                                              alt=""/></figure>
                                            <div className="inner">
                                                <h4>Office Hrs</h4>
                                                <p>Mon - Sat: 9.00am to 7.00pm<br/>Sunday: Closed</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <h2>What are you looking for?</h2>
                                <form method="post" action=""
                                      id="contact-form" className="default-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Your Name *" required=""/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email Address *" required=""/>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" required="" placeholder="Phone *"/>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Hiring Employees">Hiring Employees</option>
                                                    <option value="1">Category 01</option>
                                                    <option value="2">Category 02</option>
                                                    <option value="3">Category 03</option>
                                                    <option value="4">Category 04</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="subject" required="" placeholder="Subject"/>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Message ..."></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button disabled className="theme-btn-one" type="submit" name="submit-form">Send
                                                Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;
