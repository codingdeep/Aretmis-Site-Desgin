import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    useEffect(()=>{
        window.initToggle()
        window.closeToggle()
    },[])
    return (
        <header className="main-header">
            <div className="header-lower">
                <div className="outer-box clearfix">
                    <div className="menu-area pull-left clearfix">
                        <figure className="logo-box"><Link to="/"><img src="assets/images/logo.png" alt=""/></Link></figure>

                        <div className="mobile-nav-toggler">
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <ul className="menu-right-content pull-right clearfix">
                        <li>
                            <div className="search-btn">
                                <button type="button" className="search-toggler"><i className="flaticon-loupe-1"></i></button>
                            </div>
                        </li>
                        <li>
                            <div className="language">
                                <div className="lang-btn">
                                    <i className="icon flaticon-planet-earth"></i>
                                    <span className="txt">EN</span>
                                    <span className="arrow fa fa-angle-down"></span>
                                </div>
                                <div className="lang-dropdown">
                                    <ul>
                                        <li><a href="#">German</a></li>
                                        <li><a href="#">Italian</a></li>
                                        <li><a href="#">Chinese</a></li>
                                        <li><a href="#">Russian</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="theme-btn-one">Appointment</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sticky-header">
                <div className="outer-box clearfix">
                    <div className="menu-area pull-left">
                        <figure className="logo-box"><a href="index-2.html"><img src="assets/images/logo.png" alt=""/></a></figure>
                        <nav className="main-menu clearfix">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <ul className="menu-right-content pull-right clearfix">
                        <li>
                            <div className="search-btn">
                                <button type="button" className="search-toggler"><i className="flaticon-loupe-1"></i></button>
                            </div>
                        </li>

                        <li>
                            <div className="language">
                                <div className="lang-btn">
                                    <i className="icon flaticon-planet-earth"></i>
                                    <span className="txt">EN</span>
                                    <span className="arrow fa fa-angle-down"></span>
                                </div>
                                <div className="lang-dropdown">
                                    <ul>
                                        <li><a href="#">German</a></li>
                                        <li><a href="#">Italian</a></li>
                                        <li><a href="#">Chinese</a></li>
                                        <li><a href="#">Russian</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="theme-btn-one">Appointment</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
