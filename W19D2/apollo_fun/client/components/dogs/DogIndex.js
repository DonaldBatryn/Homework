import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';


const FETCH_DOGS = gql`
  query FetchDogs {
    dogs {
      _id
      name
    }
  }
`;

const DogIndex = () => (
    <Query query={FETCH_DOGS}>
        {({ loading, error, data }) => {
            if (loading) return <h1>Loading...</h1>;
            if (error) return <h1>{error}</h1>;
            console.log(data);
            return (
                <div>
                    <h1>DogIndex</h1>
                    <ul>
                        {data.dogs.map(dog => (
                            <li key={dog._id}>
                                <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }}
    </Query>
);

export default DogIndex;