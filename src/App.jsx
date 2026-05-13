
import { useState } from 'react'
import './App.css'
import MovieTable from './components/MovieTable';
import Pagination from './components/Pagination';
import MovieForm from './components/MovieForm';
import useMovies from './day2Hooks/useMovies';
import AuthForm from './day2components/AuthForm';

const PAGE_SIZE = 10;

function App() {
//Pagination State//
  const [page, setPage] = useState(0);
//Track the Genre State//
  const [genre, setGenre] = useState("");
//GET the hooks State//Hooks:useMovies.js//
  const {movies, numberOfPages, loading} = useMovies(page, genre);

    

  return (
    <div className="app">
      <h1>CRUD (Movies Table)</h1>
      <AuthForm />
      <h2>Movie List</h2>
      <MovieForm setGenre={setGenre} />
      <MovieTable movies={movies} loading={loading} pageSize={PAGE_SIZE} />
      <Pagination setPage={setPage} page={page} numberOfPages={numberOfPages} />
    </div>
  )
}

export default App
