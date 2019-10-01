import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { FETCH_GOD } = Queries;
const { REMOVE_GOD_DOMAIN } = Mutations;


const linkStyle = {
    cursor: "pointer",
    fontSize: "10px",
    color: "red"
};


const DeleteDomain = props => {
    return (
        <Mutation
            mutation={REMOVE_GOD_DOMAIN}
            refetchQueries={() => {
                return [
                    {
                        query: FETCH_GOD,
                        variables: { id: props.god.id }
                    }
                ];
            }}
        >
            {(removeGodDomain, { data }) => (
                <a
                    style={linkStyle}
                    onClick={e => {
                        e.preventDefault();
                        removeGodDomain({ variables: { godId: props.god.id, domain: props.domain } });
                    }}
                >
                    <p>Delete</p>
                </a>
            )}
        </Mutation>
    );
};
export default DeleteDomain;