import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer bg-color-1">
                <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/pattern-11.png)"}}></div>
                <div className="auto-container">

                    {/*<div className="footer-subscribe">*/}
                    {/*    <div className="text centred"><h3>Subscribe Us & Get Our Recruitment Updates in Your Inbox</h3>*/}
                    {/*    </div>*/}
                    {/*    <form action="" method="post"*/}
                    {/*          className="subscribe-form">*/}
                    {/*        <div className="form-group">*/}
                    {/*            <input type="email" name="email" placeholder="Enter your email address here ..."*/}
                    {/*                   required=""/>*/}
                    {/*                <button type="submit"><i className="flaticon-right-arrow"></i>Subscribe US</button>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    <div className="footer-bottom clearfix">
                        <div className="copyright pull-left"><p>&copy; 2022 <Link to="/">Artemis</Link>, All Rights
                            Reserved.</p></div>
                        <ul className="footer-nav pull-right clearfix">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
