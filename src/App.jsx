
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
//Loading Text State//
  const [loading, setLoading] = useState(false);

     useEffect(()=>{
      async function getMovies() {
        try {
          setLoading(true);
          {/*This is to get Loading text when we refresh the page*/}
          const from = page * pageSize;
          const to = from + pageSize - 1;

          const { data, count } = await supabase.from("movies").select("*", { count: "exact" }).range(from, to);
          //console.log(data)
          setNumberOfPages(Math.ceil(count / pageSize) - 1);
          setMovies(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getMovies();
     }, [page])
     //console.log(numberOfPages);

  return (
    <div className="app">
      <h1>CRUD (Movies Table)</h1>
      <h2>Movie List</h2>
      <MovieTable movies={movies} loading={loading}/>
      <Pagination setPage={setPage} page={page} numberOfPages={numberOfPages} />
    </div>
  )
}

export default App
