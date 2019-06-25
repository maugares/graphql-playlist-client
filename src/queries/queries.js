import { gql } from 'apollo-boost'

// Define the graphql query to getting all the books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`
// GraphQL query to get the author of a book
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

// Mutation request to add a book to the database
const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId){
      id
    }
  }
`

export { getBooksQuery, getAuthorsQuery, addBookMutation }