// This is a landing page which imports all other components. 

import React from 'react';
import './homepage.styles.scss';

// Importing our components
import Header from '../../components/header/header.component';
import Landingpage from '../landingpage/landingpage.component';
import Overview from '../../components/overview/overview.component';
import Contagion from '../../components/contagion/contagion.component';
import Symptoms from '../../components/symptoms/symptoms.component';
import Prevention from '../../components/prevention/prevention.component';
import { Footer } from '../../components/footer/footer.component';
import Contact from '../../components/contact/contact.component';
import MapAndChart from '../map-and-chart-page/map-and-chart-page.component';


// Importing Image
import  CovidImage from '../../assets/covid-pic.png';
import CovidFullImage from '../../assets/covidFullpic.png';


const HomePage = () => {
    return (
    <div className='homepage'>
    <Header/>
    <Landingpage />
    <div className='overview-class'>
    <Overview />
    <img src={CovidImage} alt=''/>
    </div>
    <div className='contagion-class'>
    <img src={CovidFullImage} alt=''/>
    <Contagion />
    </div>
    <Symptoms />
    <Prevention />
    <MapAndChart />
    <div className='contact-class'>
    <Contact />
    <img alt='' src={CovidFullImage} />
    </div>
    <div className='footer-class'>
    <Footer />
    <img alt='' src={CovidImage} />
    </div>
    </div>
    );
}

export default HomePage;