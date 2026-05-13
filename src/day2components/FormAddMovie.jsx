
import React, { useState } from 'react'
import { supabase } from '../utils/supabase'
import './FormAddMovie.css'

//ADD movie to MoviesList/App State//
//Tracks the diff types of Input Fields//
function FormAddMovie() {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [details, setDetails] = useState("");

async function handleSubmit(event){
      event.preventDefault();
      {/*This is where ADD movie to MovieTable happens with passing an object*/}
   await supabase.from("movies").insert({
     title, 
     genre, 
     year: Number(year), 
     details,
   });
   clearForm();
}
function clearForm(){
   setTitle("");
   setGenre("");
   setYear("");
   setDetails("");
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Movie</button>
      </form>  
    </div>
  )
}

export default FormAddMovie