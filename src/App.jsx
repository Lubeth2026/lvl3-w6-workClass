
import { useState } from 'react'
import './App.css'
import MovieTable from './components/MovieTable';
import Pagination from './components/Pagination';
import MovieForm from './components/MovieForm';
import useMovies from './day2Hooks/useMovies';
import AuthForm from './day2components/AuthForm';
import FormAddMovie from './day2components/FormAddMovie';

const PAGE_SIZE = 10;

function App() {
//Pagination State//
  const [page, setPage] = useState(0);
//Track the Genre State//
  const [genre, setGenre] = useState("");
//GET the hooks State//Hooks:useMovies.js//
  const {movies, numberOfPages, loading} = useMovies(page, genre);
//Reference check to see if user exists & is logged in to app//STATE//
  const [currentUser, setCurrentUser] = useState(null);
    

  return (
    <div className="app">
      <h1>CRUD (Movies Table)</h1>
      <AuthForm setCurrentUser={setCurrentUser} currentUser={currentUser} />
      {/*This will ONLY show MovieList table if Logged In*/}
      {currentUser && (
      <>
      <FormAddMovie />
      <h2>Movie List</h2>
      <MovieForm setGenre={setGenre} />
      <MovieTable movies={movies} loading={loading} pageSize={PAGE_SIZE} />
      <Pagination setPage={setPage} page={page} numberOfPages={numberOfPages} />
      </>  )}
    </div>
  )
}

export default App
