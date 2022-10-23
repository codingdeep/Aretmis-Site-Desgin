import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FindJob extends Component {
    render() {
        return (
            <section className="findjob-section">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="top-title">Recently Posted Jobs</span>
                        <h2>Find Your Job You Deserve It</h2>
                        <p>Long established fact that a reader will be distracted by the <br/>readable content of a page.
                        </p>
                    </div>
                    <div className="search-inner">
                        <form action="" method="post"
                              className="search-form">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 column">
                                    <div className="form-group">
                                        <i className="flaticon-search"></i>
                                        <input type="search" name="search-field"
                                               placeholder="Keyword (Title or Company)"
                                               required=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 column">
                                    <div className="form-group">
                                        <i className="flaticon-place"></i>
                                        <input type="search" name="search-field" placeholder="Location (City or State)"
                                               required=""/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 column">
                                    <div className="form-group">
                                        <i className="flaticon-folder"></i>
                                        <div className="select-box">
                                            <select className="wide">
                                                <option data-display="Desired Work Status">Desired Work Status</option>
                                                <option value="1">ATX Group</option>
                                                <option value="2">Ajax Company</option>
                                                <option value="3">Jhon Group</option>
                                                <option value="4">Nike Japan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 column">
                                    <div className="form-group message-btn">
                                        <button disabled className="theme-btn-one">Search Jobs</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="post-jobs">
                        <div className="single-job-post">
                            <div className="job-header clearfix">
                                <ul className="info pull-left">
                                    <li><Link to="/job-details">Direct Hire</Link></li>
                                    <li><i className="flaticon-clock"></i>Posted 2 Hrs ago</li>
                                </ul>
                                <div className="number pull-right"><p>Job Num: 2022ER</p></div>
                            </div>
                            <div className="job-inner clearfix">
                                <div className="job-title">
                                    <figure className="company-logo"><img src="assets/images/resource/logo-1.png"
                                                                          alt=""/></figure>
                                    <h3>Human Resources Manager</h3>
                                    <p><i className="flaticon-place"></i>Sunnyvale, California</p>
                                </div>
                                <div className="salary-box">
                                    <span>Salary</span>
                                    <p>$44,000 - $55,000 Per Year</p>
                                </div>
                                <div className="experience-box">
                                    <span>Experience Need</span>
                                    <p>1-3 Yrs</p>
                                </div>
                                <div className="apply-btn">
                                    <Link to="/job-details">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="single-job-post">
                            <div className="job-header clearfix">
                                <ul className="info pull-left">
                                    <li><Link to="/job-details">Contract to Hire</Link></li>
                                    <li><i className="flaticon-clock"></i>Posted 5 Hrs ago</li>
                                </ul>
                                <div className="number pull-right"><p>Job Num: 2021ER</p></div>
                            </div>
                            <div className="job-inner clearfix">
                                <div className="job-title">
                                    <figure className="company-logo"><img src="assets/images/resource/logo-2.png"
                                                                          alt=""/></figure>
                                    <h3>Software Engineer</h3>
                                    <p><i className="flaticon-place"></i>San Fransisco, California</p>
                                </div>
                                <div className="salary-box">
                                    <span>Salary</span>
                                    <p>$85,000 - $90,000 Per Year</p>
                                </div>
                                <div className="experience-box">
                                    <span>Experience Need</span>
                                    <p>3-5 Yrs</p>
                                </div>
                                <div className="apply-btn">
                                    <Link to="/job-details">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="single-job-post">
                            <div className="job-header clearfix">
                                <ul className="info pull-left">
                                    <li><Link to="/job-details">Contract</Link></li>
                                    <li><i className="flaticon-clock"></i>Posted 1 Day ago</li>
                                </ul>
                                <div className="number pull-right"><p>Job Num: 2020ER</p></div>
                            </div>
                            <div className="job-inner clearfix">
                                <div className="job-title">
                                    <figure className="company-logo"><img src="assets/images/resource/logo-3.png"
                                                                          alt=""/></figure>
                                    <h3>Administrative Coordinator</h3>
                                    <p><i className="flaticon-place"></i>Boston, Massachusetts</p>
                                </div>
                                <div className="salary-box">
                                    <span>Salary</span>
                                    <p>$62,000 - $75,000 Per Year</p>
                                </div>
                                <div className="experience-box">
                                    <span>Experience Need</span>
                                    <p>Freshers</p>
                                </div>
                                <div className="apply-btn">
                                    <Link to="/job-details">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="single-job-post">
                            <div className="job-header clearfix">
                                <ul className="info pull-left">
                                    <li><Link to="/job-details">Contract to Hire</Link></li>
                                    <li><i className="flaticon-clock"></i>Posted 2 Days ago</li>
                                </ul>
                                <div className="number pull-right"><p>Job Num: 2018ER</p></div>
                            </div>
                            <div className="job-inner clearfix">
                                <div className="job-title">
                                    <figure className="company-logo"><img src="assets/images/resource/logo-4.png"
                                                                          alt=""/></figure>
                                    <h3>Talent Acquisition Specialist</h3>
                                    <p><i className="flaticon-place"></i>San Fransisco, California</p>
                                </div>
                                <div className="salary-box">
                                    <span>Salary</span>
                                    <p>$85,000 - $90,000 Per Year</p>
                                </div>
                                <div className="experience-box">
                                    <span>Experience Need</span>
                                    <p>3-5 Yrs</p>
                                </div>
                                <div className="apply-btn">
                                    <Link to="/job-details">Apply</Link>
                                </div>
                            </div>
                        </div>
                        <div className="single-job-post">
                            <div className="job-header clearfix">
                                <ul className="info pull-left">
                                    <li><Link to="/job-details">Direct Hire</Link></li>
                                    <li><i className="flaticon-clock"></i>Posted 2 Hrs ago</li>
                                </ul>
                                <div className="number pull-right"><p>Job Num: 2022ER</p></div>
                            </div>
                            <div className="job-inner clearfix">
                                <div className="job-title">
                                    <figure className="company-logo"><img src="assets/images/resource/logo-5.png"
                                                                          alt=""/></figure>
                                    <h3>Human Resources Manager</h3>
                                    <p><i className="flaticon-place"></i>Sunnyvale, California</p>
                                </div>
                                <div className="salary-box">
                                    <span>Salary</span>
                                    <p>$44,000 - $55,000 Per Year </p>
                                </div>
                                <div className="experience-box">
                                    <span>Experience Need</span>
                                    <p>3-5 Yrs</p>
                                </div>
                                <div className="apply-btn">
                                    <Link to="/job-details">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="single-job-post">
                            <div className="job-header clearfix">
                                <ul className="info pull-left">
                                    <li><Link to="/job-details">Contract to Hire</Link></li>
                                    <li><i className="flaticon-clock"></i>Posted 5 Hrs ago</li>
                                </ul>
                                <div className="number pull-right"><p>Job Num: 2021ER</p></div>
                            </div>
                            <div className="job-inner clearfix">
                                <div className="job-title">
                                    <figure className="company-logo"><img src="assets/images/resource/logo-6.png"
                                                                          alt=""/></figure>
                                    <h3>Software Engineer</h3>
                                    <p><i className="flaticon-place"></i>San Fransisco, California</p>
                                </div>
                                <div className="salary-box">
                                    <span>Salary</span>
                                    <p>$85,000 - $90,000 Per Year</p>
                                </div>
                                <div className="experience-box">
                                    <span>Experience Need</span>
                                    <p>3-5 Yrs</p>
                                </div>
                                <div className="apply-btn">
                                    <Link to="/job-details">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FindJob;
