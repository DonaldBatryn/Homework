import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Query } from "react-apollo";
import Queries from '../../graphql/queries';
const { FETCH_GOD } = Queries;
import NameDetail from '../detail/NameDetail';
import TypeDetail from '../detail/TypeDetail';
import DescriptionDetail from '../detail/DescriptionDetail';
import DomainsDetail from '../detail/DomainsDetail';


const GodDetail = props => {

        return (
            // there we are getting the `id` for our query from React Router
            <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;

                    return (
                        <div className="detail">
                            <NameDetail id={data.god.id} name={data.god.name} />
                            <TypeDetail id={data.god.id} type={data.god.type} />
                            <DescriptionDetail id={data.god.id} description={data.god.description} />
                            <DomainsDetail god={data.god} domains={data.god.domains} />
                        </div>
                    )
                }}
            </Query>
        );
    
}

export default withRouter(GodDetail);