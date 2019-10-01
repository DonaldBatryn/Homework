import React from "react";
import { Mutation } from "react-apollo";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Mutations from '../../graphql/mutations';
import AddDomain from '../domains/AddDomain';
import DeleteDomain from '../domains/DeleteDomain';

class DomainsDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            domains: this.props.domains || ""
        }
    }

    render(){
        let domainList = this.props.domains.map(domain => {
            return <li key={domain}>
                <h4>{domain}</h4>
                <DeleteDomain god={this.props.god} domain={domain} />
            </li>
        })
        return (
            <div>
                <h3>Domains:</h3>
                <ul>{domainList}</ul>
                <br/>
                <AddDomain id={this.props.god.id} />
            </div>
        )
    }
}

export default DomainsDetail;