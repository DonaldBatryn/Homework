import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FETCH_TOYS = gql`
    query FetchToys {
        toys {
            _id
            name
        }
    }
`;

const ToyIndex = () => (
    <Query query={FETCH_TOYS}>
        {({ loading, error, data }) => {
            if (loading) return <h1>Loading...</h1>;
            if (error) return <h1>{error}</h1>;
            console.log(data);
            return (
                <div>
                    <h1>ToyIndex</h1>
                    <ul>
                        {data.toys.map(toy => (
                            <li key={toy._id}>
                                <p>{toy.name}</p>
                                <p>{toy.color}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }}
    </Query>
);

export default ToyIndex;