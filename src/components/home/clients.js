import React, {Component} from 'react';


class Clients extends Component {
    componentDidMount() {
        window.clients()
    }
    render() {
        return (
            <section className="clients-section">
                <div className="outer-container">
                    <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <figure className="clients-logo-box">
                            <a href="index-2.html"><img src="assets/images/clients/clients-logo-1.png" alt=""/></a>
                            <span className="logo-title"><a href="index-2.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index-2.html"><img src="assets/images/clients/clients-logo-2.png" alt=""/></a>
                            <span className="logo-title"><a href="index-2.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index-2.html"><img src="assets/images/clients/clients-logo-3.png" alt=""/></a>
                            <span className="logo-title"><a href="index-2.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index-2.html"><img src="assets/images/clients/clients-logo-4.png" alt=""/></a>
                            <span className="logo-title"><a href="index-2.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index-2.html"><img src="assets/images/clients/clients-logo-5.png" alt=""/></a>
                            <span className="logo-title"><a href="index-2.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index-2.html"><img src="assets/images/clients/clients-logo-6.png" alt=""/></a>
                            <span className="logo-title"><a href="index-2.html">Visit Website</a></span>
                        </figure>
                    </div>
                </div>
            </section>
        );
    }
}



export default Clients;
