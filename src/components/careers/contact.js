import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact-section">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="top-title">Get Touch With US</span>
                        <h2>Send Your Message Us</h2>
                    </div>
                    <div className="form-inner">
                        <div className="pattern-layer"
                             style={{backgroundImage: "url(assets/images/shape/pattern-42.png)"}}></div>
                        <form action="http://st.ourhtmldemo.com/new/Eazyrecruitz/service.html" method="post"
                              className="default-form">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="name" placeholder="Your Name *" required=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Email Address *" required=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="phone" placeholder="Phone *" required=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <div className="select-box">
                                        <select className="wide">
                                            <option data-display="Hiring Employees">Hiring Employees</option>
                                            <option value="1">ATX Group</option>
                                            <option value="2">Ajax Company</option>
                                            <option value="3">Jhon Group</option>
                                            <option value="4">Nike Japan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="location" placeholder="Location" required=""/>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder="Message ..."></textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <button type="submit" className="theme-btn-one">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
