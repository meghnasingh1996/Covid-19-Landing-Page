import React from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
import './world-map.styles.scss';

class WorldMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
            latitude: 17.442120,
            longitude: 78.391384,
            width: '70%',
            height: 400,
            }
    }
}
render() {
    const ACCESS_TOKEN = "pk.eyJ1IjoibWVnaG5hc2luZ2gxOTk2IiwiYSI6ImNrcWZmZzd4MTBvc3UydXNjamFzdXFjOGsifQ.TMxsVFqOEGwGrXulNBI-Lg";
    const {viewport} = this.state;
    return (
    <MapGL className='map-class'
    { ...viewport}
    onViewportChange={(viewport) => this.setState({viewport})}
    mapStyle="mapbox://styles/meghnasingh1996/ckqfkhk8z6kzh18nuaap1xwxj"
    mapboxApiAccessToken={ACCESS_TOKEN}>
    <div className='map-position'>
    <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
    </div>
    </MapGL>
    );
}
}

export default WorldMap;

