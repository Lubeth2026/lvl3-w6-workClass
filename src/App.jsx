
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import './App.css'
import MovieTable from './components/MovieTable';
import Pagination from './components/Pagination';

function App() {
     const [movies, setMovies] = useState([]);
//Pagination State//
     const [page, setPage] = useState(0);
     const [numberOfPages, setNumberOfPages] = useState(0);
     const pageSize = 10;

     useEffect(()=>{
      async function getMovies() {
        try {
          const from = page * pageSize;
          const to = from + pageSize - 1;

          const { data, count } = await supabase.from("movies").select("*", { count: "exact" }).range(from, to);
          //console.log(data)
          setNumberOfPages(Math.ceil(count / pageSize) - 1);
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      }
      getMovies();
     })
     //console.log(numberOfPages);

  return (
    <div className="app">
      <h1>CRUD (Movies Table)</h1>
      <h2>Movie List</h2>
      <MovieTable movies={movies} />
      <Pagination setPage={setPage} page={page} numberOfPages={numberOfPages} />
    </div>
  )
}

export default App
