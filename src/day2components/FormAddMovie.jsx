
import React, { useState } from 'react'
import './FormAddMovie.css'

function FormAddMovie() {
//ADD movie to MoviesList/App State//
//Tracks the diff types of Input Fields//
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [details, setDetails] = useState("");

  return (
    <div>
      <form >
        <h3>Add Movie</h3>
        <label htmlFor="title">Title:
            <input type="text" name="title" id="title" value={title} 
            onChange={(event)=> setTitle(event.target.value)}/>
        </label>
        <label htmlFor="genre">Genre: 
            <input type="text" name="genre" id="genre" value={genre}
            onChange={(event)=> setGenre(event.target.value)}/>
        </label>
        <label htmlFor="year">Year:
            <input type="number" name="year" id="year" value={year} 
            onChange={(event)=> setYear(event.target.value)}/>
        </label>
        <label htmlFor="details">Details:
            <input type="text" name="details" id="details" value={details}
            onChange={(event)=> setDetails(event.target.value)}/>
        </label>
      </form>  
    </div>
  )
}

export default FormAddMovie