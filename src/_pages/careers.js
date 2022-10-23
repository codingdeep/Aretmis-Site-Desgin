import React, {Component} from 'react';
import PageTitle from "../components/pageTitle";
import FindJob from "../components/careers/findJob";
import Hiring from "../components/careers/hiring";
import Contact from "../components/careers/contact";

class Careers extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="Job Openings" subtitle="Our Team Moves Faster, Keeping you Current on What's Hot"/>
                <FindJob />
                {/*<Hiring/>*/}


            </React.Fragment>
        );
    }
}

export default Careers;
