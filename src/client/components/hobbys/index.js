import React from 'react'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const GET_HOBBIES = gql`
  query GetHobbies {
    hobbies{}
  }
`;

const Hobbies = () => {
    const { loading, error, data } = useQuery(GET_HOBBIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h2>All Users</h2>
            <h4>username and age</h4>
        </div>
    )
}

export { Hobbies }