
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import './App.css'
import MovieTable from './components/MovieTable';

function App() {
     const [movies, setMovies] = useState([]);

     useEffect(()=>{
      async function getMovies() {
        try {
          const { data } = await supabase.from("movies").select("*");
          //console.log(data)
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      }
      getMovies();
     })

  return (
    <div className="app">
      <h1>CRUD (Movies Table)</h1>
      <h2>Movie List</h2>
      <MovieTable movies={movies} />
    </div>
  )
}

export default App
