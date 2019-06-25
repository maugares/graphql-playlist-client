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

// Define the graphql query to get a specific book
const getBookQuery= gql`
  query($id: ID!){
    book(id: $id){
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery }