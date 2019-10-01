import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import Mutations from '../../graphql/mutations';
import Queries from '../../graphql/queries';
const { NEW_ABODE } = Mutations;
const { FETCH_ABODES } = Queries;

class AbodeCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            coordinates: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e, newEmblem) {
        e.preventDefault();
        let name = this.state.name;

        newEmblem({
            variables: {
                name: name,
                coordinates: this.state.coordinates
            }
        })
            .then(data => {
                console.log(data);
                this.setState({
                    message: `New emblem "${name}" created successfully`,
                    name: "",
                    coordinates: ""
                })
            })
    }

    updateCache(cache, { data: { newAbode } }) {
        let abodes;
        try {
            abodes = cache.readQuery({ query: FETCH_ABODES });
        } catch (err) {
            return;
        }

        if (abodes) {
            let abodeArray = abodes.abodes;
            cache.writeQuery({
                query: FETCH_ABODES,
                data: { gods: abodeArray.concat(newAbode) }
            });
        }
    }

    render() {
        return (
            <div>
                <Mutation
                    mutation={NEW_ABODE}
                    update={(cache, data) => this.updateCache(cache, data)} >
                    {(newAbode, { data }) => (
                        <div>
                            <form onSubmit={(e) => this.handleSubmit(e, newAbode)}>
                                <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')} />
                                <input type="text" value={this.state.coordinates} placeholder="Coordinates" onChange={this.update('coordinates')} />
                                <button type="submit">Create Abode</button>
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

export default AbodeCreate;