import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetailsContainer';

// React component
class BookList extends Component {
  state = {
    selected: null
  }

  renderBooks = () => {
    const data = this.props.data
    return data.loading
      ? <div>Loading books...</div>
      : data.books.map(book => {
        return (
          <li key={book.id} onClick={(e) => this.setState({ selected: book.id })}>{book.name}</li>
        )
      })
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.renderBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)