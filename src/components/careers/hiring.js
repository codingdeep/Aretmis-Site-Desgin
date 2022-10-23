import React from 'react';

function Hiring(props) {
    return (
        <section className="hiring-section">
            <div className="image-layer">
                <figure className="image-1"><img src="assets/images/resource/hiring-1.png" alt=""/></figure>
                <figure className="image-2"><img src="assets/images/resource/hiring-2.png" alt=""/></figure>
            </div>
            <div className="outer-container clearfix">
                <div className="left-column pull-left clearfix">
                    <div className="inner-box pull-right">
                        <div className="icon-box"><i className="flaticon-factory"></i></div>
                        <h2>Industries Hiring</h2>
                        <p>Find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                        <a href="service.html">Industries</a>
                    </div>
                </div>
                <div className="right-column pull-right clearfix">
                    <div className="inner-box pull-left">
                        <div className="icon-box"><i className="flaticon-working-man"></i></div>
                        <h2>Professions Hiring</h2>
                        <p>Chooses to enjoy a pleasure that has no annoying one who avoids a pain that produces.</p>
                        <a href="service.html">Professions</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hiring;
