import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import Mutations from '../../graphql/mutations';
import Queries from '../../graphql/queries';
const { NEW_GOD } = Mutations;
const { FETCH_GODS } = Queries;

class GodCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            type: "",
            description: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e, newGod){
        e.preventDefault();
        let name = this.state.name;

        newGod({
            variables: {
                name: name,
                type: this.state.type,
                description: this.state.description
            }
        })
        .then(data => {
            console.log(data);
            this.setState({
                message: `New god "${name}" created successfully`,
                name: "",
                type: 'god',
                description: ""
            })
        })
    }

    updateCache(cache, { data: { newGod } }) {
        let gods;
        try {
            gods = cache.readQuery({ query: FETCH_GODS });
        } catch (err) {
            return;
        }

        if (gods) {
            let godArray = gods.gods;
            cache.writeQuery({
                query: FETCH_GODS,
                data: { gods: godArray.concat(newGod) }
            });
        }
    }

    render(){
        return (
            <div>
            <Mutation
                mutation={NEW_GOD}
                update={(cache, data) => this.updateCache(cache, data)} >
                {(newGod, { data }) => (
                    <div>
                        <form onSubmit={(e) => this.handleSubmit(e, newGod)}>
                            <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')}/>
                            <select value={this.state.type} onChange={this.update('type')}>
                                <option disabled>Select a type</option>
                                <option value="goddess">Goddess</option>
                                <option value="god">God</option>
                            </select>
                            <textarea value={this.state.description} placeholder="Description" onChange={this.update('description')}/>
                            <button type="submit">Create God</button>
                        </form>
                        <p>{this.state.message}</p>
                    </div>
                )}
            </Mutation>
            <Link to="/">Back to Gods Index</Link>
            </div>
        )
    }
}

export default GodCreate;