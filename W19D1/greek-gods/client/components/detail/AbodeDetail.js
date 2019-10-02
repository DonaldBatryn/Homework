import React from "react";
import { Mutation, Query } from "react-apollo";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Mutations from '../../graphql/mutations';
import Queries from '../../graphql/queries';
const { FETCH_ABODES } = Queries;
const { UPDATE_GOD_ABODE } = Mutations;

class AbodeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            abode: this.props.abode || ""
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        this.setState({ editing: true });
    }

    fieldUpdate(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
      
        if (this.state.editing) {
            return (
                <Mutation mutation={UPDATE_GOD_ABODE}>
                    {(updateGodAbode, data) => (
                        <div>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    updateGodAbode({
                                        variables: { godId: this.props.id, abodeId: this.state.abode.id }
                                    }).then(() => this.setState({ editing: false }));
                                }}
                            >
                                <select value={this.state.abode} onChange={this.fieldUpdate('abode')}>
                                    <Query query={FETCH_ABODES}>
                                        {({ loading, error, data }) => {
                                            if (loading) return "Loading...";
                                            if (error) return "Error";

                                            return data.abodes.map(({ id, name }) => (
                                                <option key={id} value={name}>
                                                    {name}
                                                </option>
                                            ))
                                        }}
                                    </Query>
                                </select>
                                <button type="submit">Update Abode</button>
                            </form>
                        </div>
                    )}
                </Mutation>
            );
        } else {
            return (
                <div>
                    <div
                        onClick={this.handleEdit}
                        style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
                    >
                        <IconContext.Provider value={{ className: "custom-icon" }}>
                            <FaPencilAlt />
                        </IconContext.Provider>
                    </div>
                    <h2>Abode:&nbsp;{this.state.abode.name}</h2>
                </div>
            );
        }
    }
}

export default AbodeDetail;