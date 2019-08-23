import React from 'react'

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    

    render() {

        const pokeLis = this.props.pokemon.map(el => {
            return(
                <li>
                    name:{el.name} 
                    url:{el.image_url}
                </li>
                )
        })
        return (
            <ul>{pokeLis}</ul>
        )
    }
}