import { authors } from "../data/authors";
import { books } from "../data/books"
//aca importo los arreglos
export const resolvers = {
  Query: {
    ping() {
      return 'pong'
    },


    books() {
      return books
    },
    authors() {
      return authors
    }
  },
  Book: {
    author: ({author}) => {
      return authors.find(author=>{
        return author.id === author
      })
    }
  }
};
