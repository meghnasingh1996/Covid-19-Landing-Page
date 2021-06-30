import React from 'react';
import './prevention.styles.scss';
import MAIN_DATA from './prevention.data';

// Importing images from assets folder
import  AvoidContacts from '../../assets/avoidContacts.png';
import UseNoseRag from '../../assets/useNoseRag.png';
import WashHands from '../../assets/washHands.png';
import WearMaskImage from '../../assets/wearMaskImage.png';
import CovidImage from '../../assets/covid-pic.png';


class Prevention extends React.Component{
    constructor(){
        super();
        this.state={
            main_data : MAIN_DATA
        }
    }
    render(){
        const {main_data} = this.state;
        return(
            <div className='prevention-container'>
            <div className='prevention-subcontainer'>
                <div className='prevention-alert'>
                    {main_data.map(({alert}) => <p>{alert}</p>)}
                </div>
                <div className='prevention-heading'>
                    {main_data.map(({title}) => <h2>{title}</h2>)}
                </div>
                <div className='prevention-message'>
                    {main_data.map(({message}) => <p>{message}</p>)}
                </div>
                <div className='prevention-subcontainer-one-and-three'>
                <div className='subcontainer-left'>
                <h3>01</h3>
                </div>
                <div className='subcontainer-middle'>
                <h2 className='heading-class'>Wear Masks</h2>
                Continually seize impactful vortals rather than future-proof supply <br/>
                <br/>
                chains. Uniquely exploit emerging niches via fully tested <br/>
                <br/>
                meta-services. Competently pursue standards compliant leadership <br/>
                <br/>
                skills vis-a-vis pandemic "outside the box" thinking. Objectively 
                </div>
                <div className='subcontainer-right'>
                <img src={WearMaskImage}  alt=''/>
                </div>
                </div>
                <div className='prevention-subcontainer-two-and-four'>
                    <div className='subcontainer-left'>
                    <img src={WashHands}  alt=''/>
                    </div>
                    <div className='subcontainer-middle'>
                     <h3>02</h3>
                    </div>
                    <div className='subcontainer-right'>
                    <h2 className='heading-class'>Wash Your Hands</h2>
                    Continually seize impactful vortals rather than future-proof <br />
                    <br />
                    supply chains. Uniquely exploit emerging niches via fully <br />
                    <br />
                    tested meta-services. Competently pursue standards <br />
                    <br />
                    compliant leadership skills vis-a-vis pandemic "outside the <br />
                    <br />
                    box" thinking. Objectively Continually seize impactful vortals.
                    </div>
                </div>
                <div className='prevention-subcontainer-one-and-three'>
                <div className='subcontainer-left'>
                <h3>03</h3>
                </div>
                <div className='subcontainer-middle'>
                <h2 className='heading-class'>Use Nose - Rag</h2>
                Continually seize impactful vortals rather than future-proof supply <br/>
                <br />
                chains. Uniquely exploit emerging niches via fully tested <br />
                <br />
                meta-services. Competently pursue standards compliant leadership <br/>
                <br/>
                skills vis-a-vis pandemic "outside the box" thinking. Objectively 
                </div>
                <div className='subcontainer-right'>
                <img src={UseNoseRag} alt='' />
                </div>
                </div>
                <div className='prevention-subcontainer-two-and-four'>
                    <div className='subcontainer-left'>
                    <img src={AvoidContacts} alt='' />
                    </div>
                    <div className='subcontainer-middle'>
                    <h3>04</h3>
                    </div>
                    <div className='subcontainer-right'>
                    <h2 className='heading-class'>Avoid Contacts</h2>
                    Continually seize impactful vortals rather than future-proof supply <br/>
                    <br />
                    chains. Uniquely exploit emerging niches via fully tested <br />
                    <br />
                    meta-services. Competently pursue standards compliant leadership <br />
                    <br />
                    skills vis-a-vis pandemic.          
                </div>
            </div>
            </div>
            <div className='back-image'>
            <img alt='' src={CovidImage} />
            </div>
            </div>
        )
    }
}

export default Prevention;