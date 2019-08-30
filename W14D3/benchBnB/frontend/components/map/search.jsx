import React from 'react';
import BenchMap from './benchmap';
import BenchIndex from '../benches/bench_index';

export default class Search extends React.Component {

    render(){
        let allBenches = this.props.benches
        let fetchB = this.props.fetchBenches
       
        return (
            <div>
                <BenchMap updateBounds={this.props.updateBounds} benches={allBenches}/>
                <BenchIndex benches={allBenches} fetchBenches={fetchB}/>
            </div>
        )
    }
}