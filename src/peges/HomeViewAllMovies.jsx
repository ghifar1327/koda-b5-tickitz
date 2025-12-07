import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterMovie from "../components/FilterMovie";

export default function HomeViewAllMovies() {
  const apiKey = "b8892ef17f94739e8b1c3cb44d901d97";
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      try {
        if (!response.ok) throw new Error(response.status, response.statusText);
        const data = await response.json();
        // console.log(data.results);
        const arrMovie = await data.results.map((item) => {
          return {
            title: item.title,
            image: item.poster_path,
            decription: item.overview,
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
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
      );
      const data = await res.json();
      setGenres(data.genres);
      console.log(data);
    })();
  }, []);
  return (
    <>
      <Header />
      <FilterMovie/>
      <article className="flex justify-center mt-14">
        <div  className="grid grid-cols-4 gap-4">
          {movies.slice(0, 12).map((item, index) => {
            return (
              <figure ley={index} className="min-w-[265px] shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.image}`}
                  className="w-[265px]"
                />
                <h2 className="mt-2 text-sm wrap-break-word max-w-[200px]">
                  {item.title}
                </h2>
                <section className="flex gap-3">
                  {item.genreId.slice(0, 2).map((id) => {
                    const genre = genres.find((g) => g.id === id);
                    return (
                      <p key={id} className="border">
                        {genre?.name}{" "}
                      </p>
                    );
                  })}
                </section>
              </figure>
            );
          })}
        </div>
      </article>
      <Footer />
    </>
  );
}
