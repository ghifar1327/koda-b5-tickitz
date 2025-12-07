import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function DetailMovie() {
  const { id } = useParams();
  const apiKey = "b8892ef17f94739e8b1c3cb44d901d97";

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    fetchDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    {/* <Header/> */}
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>

        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <div>
            {movie.genres.map((g) => (
              <span key={g.id}>
                {g.name}
              </span>
            ))}
          </div>

          <p>
            Release Date: {movie.release_date}
          </p>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
