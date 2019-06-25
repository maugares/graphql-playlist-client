import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// import { getBooksQuery } from '../queries/queries'

// React component
class BookDetails extends Component {

  render() {
    return (
      <div id="book-details">
        <p>Output book details here</p>       
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)