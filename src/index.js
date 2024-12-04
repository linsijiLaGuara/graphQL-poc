import { GraphQLServer } from 'graphql-yoga'
import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from '../graphql/typeDefs';
import { resolvers } from '../graphql/resolvers';

const server = new GraphQLServer({
typeDefs,
resolvers
});

server.start({ port: 3000 }, ({port}) => {

    console.log('server is running', port)
});