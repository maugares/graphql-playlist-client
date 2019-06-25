import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'
import BookDetails from './BookDetails';

// React component
class BookDetailsContainer extends Component {

  render() {
    return (
      <div id="book-details">
        <BookDetails book={this.props.data.book} />
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetailsContainer)