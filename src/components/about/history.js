import React, {Component} from 'react';

class History extends Component {
    render() {
        return (
            <section className="history-section">
                <figure className="image-layer"><img src="assets/images/resource/history-1.png" alt=""/></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 column">
                            <div className="sec-title">
                                <span className="top-title">Our History</span>
                                <h2>Taking a Look Back of Our History</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 column">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/resource/history-1.jpg" alt=""/>
                                        <div className="dots-box"></div>
                                </figure>
                                <div className="content-box">
                                    <div className="dots-box active"></div>
                                    <div className="year-box">
                                        <h3>2010</h3>
                                        <div className="pattern-1"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-37.png)"}}></div>
                                        <div className="pattern-2"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-38.png)"}}></div>
                                    </div>
                                    <div className="text">
                                        <h3>Fast Growing Company</h3>
                                        <p>To take a trivial example, which of us ever undertake laborius physical
                                            exercise
                                            except to obtain some advantage from it.</p>
                                    </div>
                                </div>
                                <figure className="image-box ">
                                    <img src="assets/images/resource/history-2.jpg" alt=""/>
                                        <div className="dots-box"></div>
                                </figure>
                                <div className="content-box mr-0">
                                    <div className="dots-box"></div>
                                    <div className="year-box">
                                        <h3>2014</h3>
                                        <div className="pattern-1"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-37.png)"}}></div>
                                        <div className="pattern-2"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-38.png)"}}></div>
                                    </div>
                                    <div className="text">
                                        <h3>1000 Companies Tie-up</h3>
                                        <p>Must explain to you how all this mistaken idea of denouncing pleasure and
                                            praising
                                            pain was born and account.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 column">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="year-box">
                                        <h3>2008</h3>
                                        <div className="pattern-1"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-37.png)"}}></div>
                                        <div className="pattern-2"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-38.png)"}}></div>
                                    </div>
                                    <div className="text">
                                        <h3>Started in Houston</h3>
                                        <p>Must explain to you how all this mistaken idea of denouncing pleasure and
                                            praising
                                            pain was born and account.</p>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/history-3.jpg" alt=""/>
                                </figure>
                                <div className="content-box">
                                    <div className="year-box">
                                        <h3>2011</h3>
                                        <div className="pattern-1"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-37.png)"}}></div>
                                        <div className="pattern-2"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-38.png)"}}></div>
                                    </div>
                                    <div className="text">
                                        <h3>Best Staffing Talent Award </h3>
                                        <p>To take a trivial example, which of us ever undertake laborius physical
                                            exercise
                                            except to obtain some advantage from it.</p>
                                    </div>
                                </div>
                                <figure className="image-box mr-0"><img src="assets/images/resource/history-4.jpg"
                                                                        alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default History;
