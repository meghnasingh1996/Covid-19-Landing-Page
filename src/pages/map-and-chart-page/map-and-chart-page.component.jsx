import React from 'react';
import './map-and-chart-page.styles.scss';

import WorldMap from '../../components/world-map/world-map.component';
import Report from '../../assets/Report.png';


const MapAndChart = () => {
    return(
        <div className='Map-and-chart-container'>
            <WorldMap/>
            <img src={Report} alt='Live Reports' />
        </div>
    );
}

export default MapAndChart ; 