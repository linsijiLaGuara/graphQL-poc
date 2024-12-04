import { books } from "../data/books"

export const resolvers = {
  Query: {
    ping() {
      return 'pong'
    },


    books() {
      return books
    }

  }
};
