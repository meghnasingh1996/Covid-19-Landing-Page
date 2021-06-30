import React from 'react';
import './landingpage.styles.scss';

import CustomButton from '../../components/button/button.component';
import LandingpageImage from '../../assets/landingpage-image.png';

const Landingpage = () => {
    return(
        <div className='container'>
        <div className='left-container'>
        <p className='alert'>COVID-19 Alert</p>
        <h1 className='alert-heading'>Stay At Home Quarantine To Stop Corona Virus</h1>
        <span className='message'>There is no specific medicine to prevent or treat 
        coronavirus disease (COVID-19). People may need supportive care to .</span>
        <CustomButton type='submit'>Let Us Help</CustomButton>
        </div>
        <div className='right-container'>
        <img src={LandingpageImage} alt="" />
        </div>
        </div>
    );
}

export default Landingpage;