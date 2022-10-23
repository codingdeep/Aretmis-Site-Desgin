import React from 'react';
import {Link} from "react-router-dom";

function MobileMenu() {
    return (
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><i className="fas fa-times"></i></div>
            <nav className="menu-box">

                <div
                    className="menu-outer">
                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent" style={{marginTop: '100px'}}>
                        <ul className="navigation clearfix">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                        <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                        <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                        <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                        <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>

);
}

export default MobileMenu;
