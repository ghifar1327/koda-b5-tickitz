import { useEffect, useState } from "react";
import FilterMovie from "../components/FilterMovie";
import FormSubscribe from "../components/FormSubscribe";
import { Link } from "react-router";

export default function HomeViewAllMovies() {
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
        // console.log(data.results);
        const arrMovie = await data.results.map((item) => {
          return {
            id: item.id,
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
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`
      );
      const data = await res.json();
      setGenres(data.genres);
      console.log(data);
    })();
  }, []);
  return (
    <>
      <hero>
        <div className="relative items-center bg-[url(/MaskGroup.png)] bg-cover bg-center h-[462px] w-full">
          <div className="absolute inset-0 bg-black/60">
            <section className=" h-full w-[838px] pl-[180px] flex flex-col justify-center gap-4">
              <p className="font-bold text[18px] text-white">
                LIST MOVIE OF THE WEEK
              </p>
              <p className="text-[48px] font-medium text-white">
                Experience the Magic of Cinema: Book Your Tickets Today
              </p>
            </section>
          </div>
        </div>
      </hero>

      <FilterMovie />
      <article className="flex justify-center mt-14">
        <div className="grid grid-cols-4 gap-4">
          {movies.slice(0, 12).map((item, index) => {
            return (
              <Link to={`/detail/${item.id}`}>
                <figure ley={index} className="min-w-[265px] shrink-0">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.image}`}className="w-[265px]"/>
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
              </Link>
            );
          })}
        </div>
      </article>
      <section className="flex justify-center my-[63px] gap-5">
        <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex justify-center">
          <button className="bg-blue-500 text-white w-10 h-10 rounded-full ">
            1
          </button>
        </div>
        <div className="bg-[#F9FAFB] text-[#A0A3BD] w-10 h-10 rounded-full flex justify-center">
          <button className="bg-[#F9FAFB] text-[#A0A3BD] w-10 h-10 rounded-full ">
            2
          </button>
        </div>
        <div className="bg-[#F9FAFB] text-[#A0A3BD] w-10 h-10 rounded-full flex justify-center">
          <button className="bg-[#F9FAFB] text-[#A0A3BD] w-10 h-10 rounded-full ">
            3
          </button>
        </div>
        <div className="bg-[#F9FAFB] text-[#A0A3BD] w-10 h-10 rounded-full flex justify-center">
          <button className="bg-[#F9FAFB] text-[#A0A3BD] w-10 h-10 rounded-full ">
            4
          </button>
        </div>
        <div className="bg-blue-500 w-10 h-10 rounded-full flex justify-center">
          <button className="">
            <img src="/arrow-white.png" alt="" className="rotate-180 w-6 h-6" />
          </button>
        </div>
      </section>
      <FormSubscribe />
    </>
  );
}
