import React, {Component} from 'react';
import PageTitle from "../components/pageTitle";
import ContactSection from "../components/contact/contactSection";
import Locations from "../components/contact/locations";
import Client from "../components/contact/client";

class ContactUs extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="Get In Touch" subtitle="Smarter Business Solutions. Better Customer Relations."/>
                <ContactSection/>
                {/*<Locations />*/}
                <Client/>
            </React.Fragment>
        );
    }
}

export default ContactUs;
