import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Queries from "../../graphql/queries";
const { FETCH_GOD } = Queries;
import Mutations from "../../graphql/mutations";
const { ADD_GOD_DOMAIN } = Mutations;


class AddDomain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: ""
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
                    mutation={ADD_GOD_DOMAIN}
                    refetchQueries={() => {
                        return [
                            {
                                query: FETCH_GOD,
                                variables: { id: this.props.id }
                            }
                        ];
                    }}
                >
                    {(addGodDomain, data) => (
                        <div>
                            <form onSubmit={e => {
                                e.preventDefault();
                                addGodDomain({
                                    variables: { godId: this.props.id, domain: this.state.name }
                                }).then(() => this.setState({ editing: false, name: "" }))
                            }}>
                                <input
                                    value={this.state.name}
                                    placeholder="Add new domain"
                                    onChange={this.fieldUpdate("name")}
                                />
                                <button type="submit">Add Domain</button>
                            </form>
                        </div>
                    )}
                </Mutation>
            );
        } else {
            return (
                <div onClick={this.handleEdit}>
                    <div style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}>
                        <IconContext.Provider value={{ className: "custom-icon" }}>
                            <FaPencilAlt /> <div style={{ fontSize: "15px" }}>Add Domain</div>
                        </IconContext.Provider>
                    </div>
                </div>
            );
        }
    }
}

export default AddDomain;