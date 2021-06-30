// footer of whole website

import React from 'react';
import './footer.styles.scss';

//Link is used to implement routing
import  {Link} from 'react-router-dom'; 
import SocialFollow from '../social-follow/social-follow.component';

// this is how wo import images from assets folder in react
import CovidLogo from '../../assets/covid-logo.png';

export const Footer = () => {
    return (
        <div className='footer-container'>
        <div className="footer-subcontainer">
            <div className='options'>
            <div className='covid-logo'>
            <img src={CovidLogo}  alt=''/>
             </div>
                <Link className='option' to='/overview'>Overview</Link>
                <Link className='option' to='/symptoms'>Symptoms</Link>
                <Link className='option' to='/prevention'>Prevention</Link>
                <Link className='option' to='/treatment'>Treatment</Link>
            </div>
            <div >
                <SocialFollow />
            </div>
        </div>
        <div className='copyright'>
            <p>2020 @ All rights reserved by pixelsparl.co</p>
        </div>
        </div>
    );
}