import { gql } from "graphql-tag";
//como obtiene los datos y definer el tipo de dato
export const typeDefs = gql`
  type Query {
    ping: String!
    books: [Book!]!
    authors: [Author!]!
    reviews: [Reviews!]!
  }
    type Book {
    id:ID!
    title: String!
    author:Author!
    reviews: [Reviews!]!
    }
   type Author {
    id:ID!
    name: String!
    }
    type Reviews {
    id:ID!
    text: String!
    book:Book!
    }   
`;
