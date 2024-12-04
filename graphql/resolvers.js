import { ApolloServer, gql } from 'apollo-server';
export const resolvers={
    Query:{
        ping(){
            return 'pong'
        }
    }
}