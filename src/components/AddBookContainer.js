import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import AddBook from './AddBook';

// GraphQL query to get the author of a book
const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

// React component
class AddBookContainer extends Component {

  renderAuthors() {
    const data = this.props.data
    return data.loading
      ? "Loading books..."
      : data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        )
      })
  }

  render() {
    return (
      <div>
        <AddBook author={this.renderAuthors()}/>
      </div>
    )
  }
}

export default graphql(getAuthorQuery)(AddBookContainer)