import React from 'react';
import {Link} from "react-router-dom";

function Client(props) {
    return (
        <section className="clients-style-two" style={{backgroundImage: "url(assets/images/background/clients-1.jpg)"}}>
            <div className="auto-container">
                <div className="title-inner centred">
                    <h2>Need of Highly Qualified HR Personnel or Employment Opportunities</h2>
                    <div className="btn-box">
                        <Link to="/careers" className="btn-one">Hire</Link>
                        <Link to="/careers" className="btn-two">Apply</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Client;
