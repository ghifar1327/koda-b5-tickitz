import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export default function PartialSlideMovie() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
      );
      try {
        if (!response.ok) throw new Error(response.status, response.statusText);
        const data = await response.json();
        console.log(data.results);
        const arrMovie = await data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
            image: item.poster_path,
            decription: item.overview,
            release: item.release_date,
            genreId: item.genre_ids,
          };
        });
        console.log(arrMovie);

        setMovies(arrMovie);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`
      );
      const data = await res.json();
      setGenres(data.genres);
      console.log(data)
    })();
  }, []);

  return (
    <>
      <article className="px-6 hide-scrollbar flex overflow-x-scroll gap-[18px] mt-7 md:px-[180px]">
        {movies.map((item, index) => {
          return (
            <figure ley={index} className="min-w-[265px] shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.image}`}
                className="w-[265px]"
              />
              <h2 className="mt-2 text-sm wrap-break-word max-w-[200px]">
                {item.title}
              </h2>
              <h3>{format(item.release, 'MMMM yyyy')}</h3>
              <section className="flex gap-3">{item.genreId.slice(0,2).map((id)=>{
                const genre = genres.find((g)=> g.id === id)
                return(
                  <p key={id} className="">
                    {genre?.name}
                    {" "}
                  </p>
                )
              })}</section>
            </figure>
          );
        })}
      </article>
    </>
  );
}
