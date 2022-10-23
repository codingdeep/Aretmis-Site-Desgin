/* eslint-disable */
import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from './_helpers';

import {Config} from './config';

import Header from "./components/header";
import Preloader from "./components/preloader";
import SearchPop from "./components/searchPop";
import MobileMenu from "./components/mobileMenu";
import Home from "./_pages/home";
import Footer from "./components/footer";
import About from "./_pages/about";
import Careers from "./_pages/careers";
import ContactUs from "./_pages/contactUs";
import JobDetails from "./_pages/jobDetails";

class App extends Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        window.initWow();
    }

    render() {

        return (
            <Router history={history}>
                <React.Fragment>
                    <Preloader/>
                    <SearchPop/>
                    <Header/>
                    <MobileMenu/>
                    <Route name="home" exact path="/" component={Home}/>
                    <Route name="about" exact path="/about" component={About}/>
                    <Route name="careers" exact path="/careers" component={Careers}/>
                    <Route name="contact" exact path="/contact" component={ContactUs}/>
                    <Route name="jobdetails" exact path="/job-details" component={JobDetails}/>
                    <Footer/>
                </React.Fragment>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    const {cartItems} = state.products;
    return {
        alert,
        cartItems
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};
