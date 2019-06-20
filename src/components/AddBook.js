import React from 'react'

export default function AddBook(props) {
  console.log(props)
  return (
    <form>

      <div className="field">
        <label>Book Name</label>
        <input
          type="text"
          name="name"
          onChange={props.onChange}
        />
      </div>

      <div className="field">
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          onChange={props.onChange}
        />
      </div>

      <div className="field">
        <label>Author</label>
        <select name="authorId" onChange={props.onChange} >
          <option key={props.author.id}> Select author </option>
          {props.author}
        </select>
      </div>

      <button>+</button>

    </form>
  )
}
