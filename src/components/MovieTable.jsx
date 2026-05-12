
import React from 'react'
import './MovieTable.css'

function MovieTable({ movies, loading }) {
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
            {loading ? Array.from({length: 10}).map((_, i)=>(
              <tr key={i} className="loading-row">
               <td colSpan={4}>Loading...</td>
              </tr>
            )) :
            movies.map((movie)=>{
                return (
                    <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default MovieTable