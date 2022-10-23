import React, {Component} from 'react';

class AboutAgency extends Component {
    render() {
        return (
            <section className="about-style-two about-page">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="image_block_1">
                                    <div className="image-box">
                                        <div className="pattern-layer"
                                             style={{backgroundImage: "url(assets/images/shape/pattern-14.png)"}}></div>
                                        <div className="video-inner"
                                             style={{backgroundImage: "url(assets/images/resource/video-bg-1.jpg)"}}>
                                            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                                               className="lightbox-image video-btn" data-caption="">
                                                <i className="flaticon-play"></i>
                                            </a>
                                            <div className="border"></div>
                                        </div>
                                        <figure className="image-1"><img src="assets/images/resource/about-2.jpg"
                                                                         alt=""/></figure>
                                        <figure className="image-2 wow slideInLeft animated animated"
                                                data-wow-delay="00ms"><img
                                            src="assets/images/resource/briefcase-1.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="content_block_3">
                                    <div className="content-box">
                                        <div className="sec-title">
                                            <span className="top-title">About Our Agency</span>
                                            <h2>We have your dream job! We know who is a good fit!</h2>
                                        </div>
                                        <div className="text">
                                            <p style={{marginBottom: '10px'}}>Artemis is proud of its ability to adapt to changing trends while always maintaining the highest level of recruiting standards for both our clients and our candidates.</p>
                                            <p>Our team of knowledgeable professionals provides customized recruiting services to clients and candidates, including direct hire, temporary-to-hire, and temporary placement, and we approach each type with the same degree of professional assessment. Our refined and collaborative style is unmatched in the staffing industry. We’re able to see beyond the surface to create matches that result in successful careers for our candidates and valuable talent for our clients.</p>
                                        </div>
                                        <div className="author-box">
                                            <div className="author-text">
                                                <h3>Pathway for both employer and employee.</h3>
                                            </div>
                                            <div className="author-info">
                                                <figure className="author-thumb"><img
                                                    src="assets/images/resource/author-1.jpg"
                                                    alt=""/></figure>
                                                <h4>Kunle Badmus</h4>
                                                <span className="designation">Founder</span>
                                                <figure className="signature"><img
                                                    src="assets/images/icons/signature-1.png" alt=""/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutAgency;
