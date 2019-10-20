import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { IS_LOGGED_IN } from '../graphql/queries';
import { ApolloConsumer } from "react-apollo";

const Nav = props => {
    return (
        <ApolloConsumer>
            {client => (
                <Query query={IS_LOGGED_IN}>
                    {({ data }) => {
                        if (data.isLoggedIn) {
                            return (
                                <div>
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            localStorage.removeItem("auth-token");
                                            client.writeData({ data: { isLoggedIn: false } });
                                            props.history.push("/");
                                        }}
                                    >Logout
                                    </button>
                                    <Link to="/">Home</Link><br/>
                                    <Link to="/products/new">Add Product</Link>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Sign Up</Link>
                                    
                                </div>
                            );
                        }
                    }}
                </Query>
            )}
        </ApolloConsumer>
    );
};

export default withRouter(Nav);