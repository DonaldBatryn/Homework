import React from 'react';
import MarkerManager from '../../util/marker_manager'

export default class BenchMap extends React.Component {

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
        // debugger
        google.maps.event.addListener(this.map, 'idle', () => {
            let boundsObj = {}
            // debugger
            let latLng = this.map.getBounds();
            // debugger
            let northE = latLng.getNorthEast();
            let southW = latLng.getSouthWest();
            boundsObj["northEast"] = {lat: northE.lat(), lng: northE.lng()}
            boundsObj["southWest"] = {lat: southW.lat(), lng: southW.lng()}
            // debugger
            this.props.updateBounds(boundsObj)
            this.MarkerManager.updateMarkers(this.props.benches)
        })
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render(){

        return (
            <div id="map-container" ref={ map => this.mapNode = map }>
                
            </div>
        )
    }
}