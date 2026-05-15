
import React, { useState } from 'react'
import './MovieForm.css'

//THIS FORM HANDLES THE FILTER ON THE TABLE//

function MovieForm({setGenre}) {
//Which Genre Option is Selected State//
    const [selectedGenre, setSelectedGenre] = useState("");
//Controlled Form//
    const handleChange = (event)=>{
        event.preventDefault();
        const value = event.target.value;
        setSelectedGenre(value);
        setGenre(value);
        };

  return (
    <div className="movie-form">
      <p>Filter by genre: </p>
      <select value={selectedGenre} onChange={handleChange}>
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Thriller">Thriller</option>
      </select>
    </div>
  );
}

export default MovieForm