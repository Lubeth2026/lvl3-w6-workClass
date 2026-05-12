
import React, { useState, Fragment } from 'react'
import './MovieTable.css'

function MovieTable({ movies, loading, pageSize }) {
//Movies Details Data State//
     const [expandedMovieDetails, setExpandedMovieDetails] = useState([]);
//Toggle State//
     const expandDetails = (id)=>{
      const selectedMovie = movies.find((movie)=> movie.id === id);
      if(expandedMovieDetails.id === id){
        setExpandedMovieDetails({});
      } else {
        setExpandedMovieDetails(selectedMovie);
      } };

  return (
    <div>
        <table className="movie-table">
          <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {loading ? Array.from({length: pageSize}).map((_, i)=>(
              <tr key={i} className="loading-row">
               <td colSpan={4}>Loading...</td>
              </tr>
            )) :
            movies.map((movie)=>{
              {/*This Fragment will create an expand screen to display Movie Details*/}
                return (
                  <Fragment key={movie.id}>
                    <tr className="clickable-row" onClick={() => expandDetails(movie.id)}>
                      <td>{movie.id}</td>
                      <td>{movie.title}</td>
                      <td>{movie.genre}</td>
                      <td>{movie.year}</td>
                    </tr>
                    {expandedMovieDetails.id === movie.id && (
                      <tr className="details-row">
                        <td colSpan={4}>{movie.details}</td>
                      </tr>
                    )}
                  </Fragment>
                );
            })}
          </tbody>
        </table>
    </div>
  )
}

export default MovieTable