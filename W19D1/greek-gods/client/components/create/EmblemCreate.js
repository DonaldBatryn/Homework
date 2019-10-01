import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import Mutations from '../../graphql/mutations';
import Queries from '../../graphql/queries';
const { NEW_EMBLEM } = Mutations;
const { FETCH_EMBLEMS } = Queries;

class EmblemCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
                name: name
            }
        })
            .then(data => {
                console.log(data);
                this.setState({
                    message: `New emblem "${name}" created successfully`,
                    name: ""
                })
            })
    }

    updateCache(cache, { data: { newEmblem } }) {
        let emblems;
        try {
            emblems = cache.readQuery({ query: FETCH_EMBLEMS });
        } catch (err) {
            return;
        }

        if (emblems) {
            let emblemArray = emblems.emblems;
            cache.writeQuery({
                query: FETCH_EMBLEMS,
                data: { gods: emblemArray.concat(newEmblem) }
            });
        }
    }

    render() {
        return (
            <div>
                <Mutation
                    mutation={NEW_EMBLEM}
                    update={(cache, data) => this.updateCache(cache, data)} >
                    {(newEmblem, { data }) => (
                        <div>
                            <form onSubmit={(e) => this.handleSubmit(e, newEmblem)}>
                                <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')} />
                                <button type="submit">Create Emblem</button>
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

export default EmblemCreate;