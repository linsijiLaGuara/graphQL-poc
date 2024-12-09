import { authors } from "../data/authors";
import { books } from "../data/books"
import { reviews } from "../data/reviews"

//aca importo los arreglos , agrego los Query a consultar
export const resolvers = {
  Query: {
    ping() {
      return 'pong'
    },


    books() {
      return books;
    },
    authors() {
      return authors;
    },
    reviews() {
      return reviews;
    }
  },
  Book: {
    author: ({ author }) => {
      return authors.find(authorLibro => {
        return authorLibro.id === author
      })
    }, 
    reviews:(parent)=>{
      return reviews.filter(review =>{
        return review.book === parent.id
      })
    }
  },
  Reviews: {
    book (parent){
      return books.find(book=>{
        return book.id === parent.book
      })
    }
  }
};
