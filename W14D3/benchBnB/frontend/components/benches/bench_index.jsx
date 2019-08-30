import React from 'react';
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBenches({'southWest': { 'lat': 37.7418, lng: -122.4779 }, 'northEast': {'lat': 37.80971, 'lng': -122.3920}})
    }

    render(){
        let allBenches = this.props.benches.map(bench => {
            return <BenchIndexItem key={`${bench.id}`} bench={bench} />
        })
        return(
            <div>
                <h3>Here are your benches:</h3>
                <ul>
                    {allBenches}
                </ul>
            </div>
        )
    }
}

export default BenchIndex;