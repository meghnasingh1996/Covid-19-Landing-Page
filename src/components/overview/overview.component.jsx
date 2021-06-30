// Overview Component

import React from 'react';
import './overview.styles.scss';

// Importing data so that we can show it dynamically because we dont ahve API as of now
import OVERVIEW_DATA from './overview.data';

// Importing the image 
import OverviewImage from '../../assets/overview-image.svg';


// Class component is used as we need to maintain state
class Overview extends React.Component{
    constructor(){
        super();
        this.state={
            // collection key is holding data from overview.data.js file
            collections: OVERVIEW_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='overview-container'>
                <div className='overview-left'>
                    <img  alt='' src={OverviewImage}/>
                </div>
                <div className='overview-right'>
                    <p className='right-alert'>What is Covid-19</p>
                    <div className='right-heading'>
                        {collections.map(({title}) => <h2>{title}</h2>)}
                    </div>
                    <span className='right-message' >
                        {collections.map(({message}) =><p>{message}</p>)}
                    </span>
                    <button className='overview-button'>Learn More</button>
                </div>
            </div>
        )
    }
}

export default Overview;