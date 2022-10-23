import React, {Component} from 'react';
import Slider from "../components/home/Slider";
import Clients from "../components/home/clients";
import Welcome from "../components/home/welcome";
import About from "../components/home/about";
import Service from "../components/home/service";
import RecruitTech from "../components/home/recruitTech";
import Industries from "../components/home/industries";
import Process from "../components/home/process";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider/>
                <Clients/>
                <Welcome/>
                <About/>
                <Service/>
                <RecruitTech />
                <Industries/>
                <Process/>
            </React.Fragment>
        );
    }
}

export default Home;
