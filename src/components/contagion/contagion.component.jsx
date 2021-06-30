// Contagion component
import React from 'react';
import './contagion.styles.scss';

// Importing data of cards from contagion.data.js
import CONTAGION_DATA from './contagion.data';

// Importing Card component from material-ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Importing images of card
import Card1Image from '../../assets/card1image.png';
import Card2Image from '../../assets/card2image.png';
import Card3Image from '../../assets/card3image.png';


// Class component is used.
class Contagion extends React.Component{
    constructor(){
        super();
        this.state={
            cardData : CONTAGION_DATA
        }
    }
    render(){
        const { cardData }  = this.state;
        return(
            <div className='contagion-container'>
            <div className='contagion-heading'>
            <p>Covid 19</p>
            <h2>Contagion</h2>
            <span>Corona viruses are a type of virus. 
                There are many different kinds, and some cause disease. 
                A newly identified type</span>
            </div>
            <div className='custom-card-container'>
            <Card className='separate-card-class'>
                    <CardMedia class='image-class'><img src={Card1Image} alt='' /></CardMedia>
                    <div className='card-content'>
                     {cardData.map(({title1}) => <CardContent className='title'>{title1}</CardContent>)}
                     {cardData.map(({message1}) => <CardContent className='message'>{message1}</CardContent>)}
                    </div>
            </Card>
            <Card className='separate-card-class'>
                <CardMedia class='image-class'><img src={Card2Image} alt='' /></CardMedia>
                <div className='card-content'>
                 {cardData.map(({title2}) => <CardContent className='title'>{title2}</CardContent>)}
                 {cardData.map(({message2}) => <CardContent className='message'>{message2}</CardContent>)}
                </div>
            </Card>
            <Card className='separate-card-class'>
            <CardMedia class='image-class'><img src={Card3Image} alt='' /></CardMedia>
            <div className='card-content'>
             {cardData.map(({title3}) => <CardContent className='title'>{title3}</CardContent>)}
             {cardData.map(({message3}) => <CardContent className='message'>{message3}</CardContent>)}
            </div>
            </Card>
            </div>
            </div>
        )
    }
}

export default Contagion;