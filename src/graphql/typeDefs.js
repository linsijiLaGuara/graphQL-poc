import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    ping: String!
    books: [Book!]!
  }
    type Book {
    id:ID!
    title: String!
    }
`;
