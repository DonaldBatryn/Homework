import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { Query } from "react-apollo";
import Mutations from "../../graphql/mutations";
const { UPDATE_GOD_ABODE } = Mutations;
import Queries from "../../graphql/queries";
const { FETCH_ABODES } = Queries;

class AbodeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            abodes: [],
            editing: false,
            abodeName: this.props.god.abode.name || "",
            abode: this.props.god.abode || ""
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
                <Mutation
                    mutation={UPDATE_GOD_ABODE}
                >
                    {(updateGodAbode, data) => (
                        <div>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    let newAbode = this.abodes.filter(abode => abode.id === this.state.abode)[0].name
                                    updateGodAbode({
                                        variables: { godId: this.props.god.id, abodeId: this.state.abode }
                                    }).then(() => this.setState({
                                        editing: false,
                                        abodeName: newAbode
                                    }));
                                }}>
                                <Query query={FETCH_ABODES}>
                                    {({ loading, error, data }) => {
                                        if (loading) return <p>Loading...</p>;
                                        if (error) return <p>Error</p>;
                                        this.abodes = data.abodes
                                        const options = data.abodes.map(abode => <option key={abode.id} value={abode.id}>{abode.name}</option>)
                                        return (<div>
                                            <select value={this.state.abode} onChange={this.fieldUpdate("abode")}>
                                                {options}
                                            </select>
                                        </div>
                                        )
                                    }}
                                </Query>
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
                        style={{
                            fontSize: "10px",
                            cursor: "pointer",
                            display: "inline"
                        }}
                    >
                        <IconContext.Provider value={{ className: "custom-icon" }}>
                            <FaPencilAlt />
                        </IconContext.Provider>
                    </div>
                    <h2>Abode: {this.state.abodeName}</h2>
                </div>
            );
        }
    }
}

export default AbodeDetail;
