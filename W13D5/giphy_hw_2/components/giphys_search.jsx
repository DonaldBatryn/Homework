import React from 'react';

import GiphysIndex from './giphys_index';

export default class GiphysSearch extends React.Component {
    constructor(){
        super();
        this.state = { searchTerm: 'puppies'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchSearchGiphys('puppies')
    }



    handleChange(e){
        // e.preventDefault()
        this.setState({searchTerm: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault()
        let searchTerm = this.state.searchTerm.split(" ").join("+")
        this.props.fetchSearchGiphys(searchTerm);
    }
    
    render(){
        let {giphys} = this.props
        return (
            <div>
                <form className="search-bar">
                    <label>Enter a search term
                    <input onChange={this.handleChange} type="text" value={this.state.searchTerm}/>
                    </label>
                    <button type="submit" onClick={this.handleSubmit}>Search</button>
                </form>
                <GiphysIndex giphys={giphys} />
            </div>
        )
    }
}