import React from 'react';
import { FETCH_CART_ITEMS } from '../../graphql/queries';
import { Query, ApolloConsumer } from 'react-apollo';


class AddToCart extends React.Component {
    constructor(props){
        super(props);
    }

    // updateCache(cache, { data }) {
    //     let products;
    //     try {
    //         products = cache.readQuery({ query: FETCH_PRODUCTS });
    //     } catch (err) {
    //         return;
    //     }

    //     if (products) {
    //         let productArray = products.products;
    //         let newProduct = data.newProduct;
    //         cache.writeQuery({
    //             query: FETCH_PRODUCTS,
    //             data: { products: productArray.concat(newProduct) }
    //         });
    //     }
    // }

    render(){
        let { _id, cost } = this.props
        return (
            <ApolloConsumer>
                {(cache) => (
                    <Query query={FETCH_CART_ITEMS}>
                        {({ loading, error, data, client }) => {
                            if (loading) return "Loading...";
                            if (error) return `Error! ${error.message}`;

                            if (data.cart.includes(this.props._id)) {
                                return ""
                            } else {

                                return (
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        const { cart } = cache.readQuery({ query: FETCH_CART_ITEMS })
                                        const data = { cart: [...cart, { _id: _id, cost: cost }] }
                                        cache.writeQuery({ query: FETCH_CART_ITEMS, data })
                                        console.log(cache)
                                    }}>Add To Cart</button>
                                )
                            }
                        }}
                    </Query>
                )}
            </ApolloConsumer>
        )
    }
}

export default AddToCart;