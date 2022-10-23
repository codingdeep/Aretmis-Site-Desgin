import React, {Component} from 'react';

class Locations extends Component {
    componentDidMount() {
        //window.locationSliderInit()
    }

    render() {
        return (
            <section className="locations-section bg-color-2">
                <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/pattern-50.png)"}}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="00ms"
                                 data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Philadelphia</h3>
                                        <p>United States, 205 Wilshire, 2nd Str Philadelphia 19019.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <a href="mailto:eazyph@example.com">artemis@example.com</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <a href="tel:2674561234">(267) 456-1234</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="300ms"
                                 data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>New Orleans</h3>
                                        <p>United States, 102 Wilshire, 3rd Str New Orleans 70032.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <a href="mailto:eazyph@example.com">artemis@example.com</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <a href="tel:5044561234">(504) 456-1234</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="600ms"
                                 data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Minneapolis</h3>
                                        <p>United States, 405 Wilshire, 2nd Str Minneapolis 55111.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <a href="mailto:eazyph@example.com">artemis@example.com</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <a href="tel:6124561234">(612) 456-1234</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Locations;
