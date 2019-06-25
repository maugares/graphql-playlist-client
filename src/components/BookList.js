import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails';

// React component
class BookList extends Component {

  renderBooks() {
    const data = this.props.data
    return data.loading
      ? <div>Loading books...</div>
      : data.books.map(book => {
        return (
          <li key={book.id}>{book.name}</li>
        )
      })
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.renderBooks()}
        </ul>
        <BookDetails />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)