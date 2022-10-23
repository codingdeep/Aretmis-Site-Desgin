import React, {Component} from 'react';
import PageTitle from "../components/pageTitle";
import AboutAgency from "../components/about/aboutAgency";
import ProcessAbout from "../components/about/processAbout";
import History from "../components/about/history";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="About Company" subtitle="THE ARTEMIS IS A WELL TRUSTED, MULTI-VERTICAL RECRUITMENT AGENCY"/>
                <AboutAgency/>
                <ProcessAbout />
                <History />
            </React.Fragment>
        );
    }
}

export default About;
