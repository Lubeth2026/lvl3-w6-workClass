
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import './App.css'

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
    </div>
  )
}

export default App
