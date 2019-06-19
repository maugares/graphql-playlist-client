import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

// Define the graphql query to getting all the books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`
// React component
class BookList extends Component {

  renderBooks() {
    var data = this.props.data;
    return data.loading
      ? <div>Loading books...</div>
      : data.books.map(book => {
        return (
          <li key={book.id}>{book.name}</li>
        )
      });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">
          {this.renderBooks()}
        </ul>
      </div>
    )
  }
};

export default graphql(getBooksQuery)(BookList);