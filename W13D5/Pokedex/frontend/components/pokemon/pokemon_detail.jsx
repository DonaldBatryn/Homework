import React from 'react'
import ItemDetailContainer from './item_detail_container'
import { Route, Link } from 'react-router-dom';
import ItemDetail from './item_detail'


export default class PokemonDetail extends React.Component {
    constructor(props){
        super(props)
       
    }

    componentDidMount(){
        let pokeId = this.props.match.params.pokemonId
        this.props.requestSinglePokemon(pokeId)
    }

    componentDidUpdate(prevProps){
        if (this.props.pokemon.id !== prevProps.pokemon.id){
            this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
    }

    render() { //this is initial mount
        // let id = ownProps.match.params.pokemonId
        const pokemon = this.props.pokemon
        if (!pokemon) {
            console.log("returning");
            return null;
        }
        
        let pokeMoves = pokemon.moves.map((move, i) => {
            return <h4><li key={i} >{move}</li></h4>
        })
        debugger
        let allItems = this.props.items.map(item => {
            // return <a href={`#/pokemon/${pokemon.id}/item/${item}`}>{item}</a>
            return <Link key={item} to={`/pokemon/${pokemon.id}/item/${item}`}><img src={item.image_url} className="item-img"/></Link>
        })
       
        // let allItems = this.props.items.map(item => {
        //     return <Link key={item.id} to={`/pokemon/${pokemon.id}/item/${item.id}`}>{item.image_url}</Link>
        // })
       
        return (
            <div>
                <h3>name: {pokemon.name}</h3>
                <img src={pokemon.image_url} className="poke-img"/>
                <h3>attack: {pokemon.attack}</h3>
                <h3>defence: {pokemon.defense}</h3>
                <h3>type: {pokemon.poke_type}</h3>
                <h3>moves:</h3>
                <ul>{pokeMoves}</ul>
               
                <ul className="toy-list">ITEMS:{allItems}</ul>
                <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
            </div>
        )
    }
}