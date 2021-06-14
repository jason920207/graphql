const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const axios = require('axios');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    username: String!
    age: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User!]!
    hobbies: [String!]!
  }

`;

const resolvers = {
    Query: {
        users: async () => {
            const responseFromDataSource = await axios.get(
                `http://localhost:3000/users`
            );
            console.log(responseFromDataSource)
            return responseFromDataSource?.data
        },
        hobbies: async () => {
            const responseFromDataSource = await axios.get(
                `http://localhost:3000/hobbies`
            );
            console.log(responseFromDataSource)
            return responseFromDataSource?.data
        }
    },
};


const port = 5000;
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});
apolloServer.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen({ port }, () => {
    console.log(
        `Graphql endpoint is at http://localhost:${port}${apolloServer.graphqlPath}`
    );
});