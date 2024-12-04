import { gql } from "graphql-tag";
//como obtiene los datos y definer el tipo de dato
export const typeDefs = gql`
  type Query {
    ping: String!
    books: [Book!]!
    authors: [Author!]!
  }
    type Book {
    id:ID!
    title: String!
    author:Author!
    }
   type Author {
    id:ID!
    name: String!
    }
`;
