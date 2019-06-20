import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import BookList from './components/BookList'
import AddBookContainer from './components/AddBookContainer';

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBookContainer />
      </div>
    </ApolloProvider>
  )
}

export default App