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
const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

// 
const addBookMutation = gql`
  mutation {
    addBook(
      name:"",
      genre:"",
      authorId:""
      )
      name
      id    
  }
`

export { getBooksQuery, getAuthorQuery, addBookMutation }