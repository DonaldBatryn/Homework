import React from 'react';
import { Query } from "react-apollo";
import { FETCH_PRODUCT } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart'

class ProductDetail extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        debugger
        return (
            <Query query={FETCH_PRODUCT} variables={{ id: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div>
                            <h2>{data.product.name}</h2><br/>
                            <p>Product description:&nbsp;{data.product.description}</p><br />
                            <h4>Product weight:&nbsp;{data.product.weight}</h4>
                            <br/>
                            <AddToCart _id={data.product._id} cost={data.product.cost}/>
                            <br/>
                            <Link to="/">Back to All Products</Link>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default ProductDetail;