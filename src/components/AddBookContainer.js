import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import AddBook from './AddBook';
import { getAuthorsQuery } from '../queries/queries'

// React component
class AddBookContainer extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  }

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

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: this.state.name,
      genre: this.state.genre,
      authorId: this.state.authorId
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <AddBook
          author={this.renderAuthors()}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBookContainer)