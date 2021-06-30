// Header of website

import React from 'react';
import './header.styles.scss';

// Used to implement routing
import  {Link} from 'react-router-dom'; 


// Function component is used .
const Header = () => {
    return(
    <div className='header'>
     <Link  className='logo-container' to='/'>     
    </Link>
    <div className='options'>
        <Link className='option' to='/overview'>Overview</Link>
        <Link className='option' to='/contagion'>Contagion</Link>
        <Link className='option' to='/symptoms'>Symptoms</Link>
        <Link className='option' to='/prevention'>Prevention</Link>
        <button className='option-button'>Contact</button>
    </div>
    </div>
    )
};

export default Header;