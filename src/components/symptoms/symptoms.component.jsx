// Symptoms components

import React from 'react';
import './symptoms.styles.scss';

// Importing data from data.js file
import SYMPTOMS_DATA from './symptoms.data';

// Importing the image from assets
import SymptomsImage from '../../assets/symptoms.png';
import LeafImage from '../../assets/leaf1.png';
import LeafImageTwo from '../../assets/leaf2.png';


// Defining class component
class Symptoms extends React.Component{
    constructor(){
        super();
        this.state = {
            // data holds data values from symptoms.data.js file
            data : SYMPTOMS_DATA
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div className='symptoms-container'>
            <div className='symptoms-alert'>
                {data.map(({alert}) => <p>{alert}</p>)}
            </div>
            <div className='symptoms-heading'>
                {data.map(({title}) => <h2>{title}</h2>)}
            </div>
            <div className='symptoms-message'>
                {data.map(({message}) => <p>{message}</p>)}
            </div>
            <div className='symptoms-image'>
            <div className='leaf-class'><img alt='' src={LeafImage} /></div>
            <img alt=" " src={SymptomsImage} />
            <div className='leaf-class-two'><img alt='' src={LeafImageTwo} /></div>
            </div>
            </div>
        );
    }
}

export default Symptoms;