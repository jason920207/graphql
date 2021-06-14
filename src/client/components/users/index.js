import React from 'react'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users{
      username
      age
    }
  }
`;

const Users = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h2>All Users</h2>
            <h4>username and age</h4>
            {
                data.users.map((user) => (
                    <div>
                        <div>{user.username}</div>
                        <div>{user.age}</div>
                    </div>
                ))
            }
        </div>
    )
}

export { Users }