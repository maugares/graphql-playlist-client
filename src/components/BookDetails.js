import React from 'react'

export default function BookDetails(props) {
  console.log(props.book)
  const {book} = props
  if (!props.book) {
    return <div> "No book selected..." </div>
  } else {
    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map(item => {
            return (
              <li key={item.id}>
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}