import React, { Component } from 'react';
import { gql } from 'apollo-boost';

// Define the graphql query to getting all the books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

export default class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book-list">
          <li>Book List</li>
        </ul>
      </div>
    )
  }
};