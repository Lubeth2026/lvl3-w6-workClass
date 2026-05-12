
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import './App.css'
import MovieTable from './components/MovieTable';
import Pagination from './components/Pagination';
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([]);
//Pagination State//
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pageSize = 10;
//Loading Text State//
  const [loading, setLoading] = useState(false);
//Track the Genre State//
  const [genre, setGenre] = useState("");

     useEffect(()=>{
      async function getMovies() {
        try {
          setLoading(true);
          {/*This is to get Loading text when we refresh the page*/}
          const from = page * pageSize;
          const to = from + pageSize - 1;
          {/*This will update query when user selects a Genre if it exists*/}
          let query = supabase.from("movies").select("*", { count: "exact" }).range(from, to);
          if(genre){query = query.eq("genre", genre);}

          const { data, count } = await query;
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
     }, [page, genre])
     //console.log(numberOfPages);

  return (
    <div className="app">
      <h1>CRUD (Movies Table)</h1>
      <h2>Movie List</h2>
      <MovieForm setGenre={setGenre} />
      <MovieTable movies={movies} loading={loading} pageSize={pageSize} />
      <Pagination setPage={setPage} page={page} numberOfPages={numberOfPages} />
    </div>
  )
}

export default App
