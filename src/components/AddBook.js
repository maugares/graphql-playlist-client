import React from 'react'

export default function AddBook(props) {
  return (
    <form>

      <div className="field">
        <label>Book Name</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author</label>
        <select>
          <option key={props.author.id}>Select author</option>
          {props.author}
        </select>
      </div>

      <button>+</button>

    </form>
  )
}
