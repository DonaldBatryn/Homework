import React from 'react'

export default class MarkerManager{
    constructor(map){
        this.map = map;
        // debugger
        this.markers = {};
    }

    updateMarkers(benches){
        let benchObj = {}
        benches.forEach(bench => {
            this.createMarkerFromBench(bench)
        })
    }

    createMarkerFromBench(bench){
        if (!this.markers[bench.id]) {
            let marker = new google.maps.Marker({
                position: { lat: bench.lat, lng: bench.lng },
                map: this.map,
                title: bench.description
            })
            this.markers[bench.id] = marker;
            marker.setMap(this.map);
        }
    }
}