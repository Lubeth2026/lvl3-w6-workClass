
import { useEffect, useState } from 'react';
import './App.css'
import { supabase } from './utils/supabase'

function App() {
  //READ from Database//
    const [movies, setMovies] = useState([]);
  //ADD/CREATE to Database//
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [details, setDetails] = useState("");
  //EDIT/UPDATE//
    const [editingMovie, setEditingMovie] = useState(null);

  async function getMovies() {
    try {
      const {data} = await supabase.from("movies").select("*").order("id");
      setMovies(data);
    } catch (error) {
      console.error(error)
      setMovies()
    }
  }
    useEffect(()=>{
      getMovies();
    }, []);
//Add/CREATE a movie//
async function handleAddSubmit(event) {
    event.preventDefault();
    await supabase.from("movies").insert({ title, genre, year, details })
    clearForm();
    getMovies();
}
//DELETE//
async function handleDelete(movie) {
  try {
    await supabase.from("movies").delete().eq("id", movie.id);
    getMovies();
  } catch (error) {
    console.log(error)
  }
}
//Handle UPDATE//
async function handleUpdate(event) {
  event.preventDefault();
   try {
     await supabase.from("movies").update({
      title: editingMovie.title,
      genre: editingMovie.genre,
      year: editingMovie.year,
      details: editingMovie.details,
     }).eq("id", editingMovie.id);
     setEditingMovie(null);
     getMovies();
   } catch (error) {
     console.log(error)
   }
}
//CLEAR Form//
function clearForm(){
  setTitle("");
  setGenre("");
  setYear("");
  setDetails("");
}

  return (
    <>
      <h1>Day 4</h1>
      {/*ADD/CREATE Form*/}
      <form onSubmit={handleAddSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(event)=> setTitle(event.target.value)}/>
        <input type="text" placeholder="Genre" value={genre} onChange={(event)=> setGenre(event.target.value)}/>
        <input type="number" value={year} onChange={(event)=> setYear(event.target.value)}/>
        <br />
        <textarea name="details" id="details" placeholder="Details" value={details} onChange={(event)=> setDetails(event.target.value)}></textarea> 
        <br />
        <button type="submit">Add</button>
      </form>
      <ul>
        {movies.map((movie)=>{
          return (
            <li key={movie.id}>
              {editingMovie?.id === movie.id ? (
                <form onSubmit={handleUpdate}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={editingMovie.title}
                    onChange={(event) =>
                      setEditingMovie({
                        ...editingMovie,
                        title: event.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Genre"
                    value={editingMovie.genre}
                    onChange={(event) =>
                      setEditingMovie({
                        ...editingMovie,
                        genre: event.target.value,
                      })
                    }
                  />
                  <input
                    type="number"
                    value={editingMovie.year}
                    onChange={(event) =>
                      setEditingMovie({
                        ...editingMovie,
                        year: event.target.value,
                      })
                    }
                  />
                  <br />
                  <textarea
                    name="details"
                    id="details"
                    placeholder="Details"
                    value={editingMovie.details}
                    onChange={(event) =>
                      setEditingMovie({
                        ...editingMovie,
                        details: event.target.value,
                      })
                    }
                  ></textarea>
                  <button type="submit">Save</button>
                </form>
              ) : (
                <>
                  {movie.title}
                  <br />
                  <button onClick={() => setEditingMovie(movie)}>Edit</button>
                  <button onClick={() => handleDelete(movie)}>Delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default App
