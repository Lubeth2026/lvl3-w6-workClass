
import React, { useEffect, useState } from 'react'
import { supabase } from "../utils/supabase";

const PAGE_SIZE = 10;

function useMovies(page, genre) {
  const [movies, setMovies] = useState([]);
  //Pagination State//
  const [numberOfPages, setNumberOfPages] = useState(0);
  //Loading Text State//
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        {/*This is to get Loading text when we refresh the page*/}
        const from = page * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        {/*This will update query when user selects a Genre if it exists*/}
        let query = supabase
          .from("movies")
          .select("*", { count: "exact" })
          .range(from, to);
        if (genre) {
          query = query.eq("genre", genre);
        }

        const { data, count } = await query;
        //console.log(data)
        setNumberOfPages(Math.ceil(count / PAGE_SIZE) - 1);
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [page, genre]);
  //console.log(numberOfPages);
  return { movies, numberOfPages, loading };
}

export default useMovies