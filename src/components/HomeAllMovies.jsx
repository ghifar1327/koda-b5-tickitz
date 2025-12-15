// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterMovie from "./FilterMovie";
import FormSubscribe from "./FormSubscribe";
import { Link } from "react-router";
import { useEffect } from "react";
import { getMovieGenresThunk, getMoviesThunk} from "../redux/slices/fetchMovie.slice";

export default function HomeAllMovies() {
  const dispatch = useDispatch();
  const getMovies = useSelector((state) => state.movies);
  const movies = getMovies.movies;
  const genres = getMovies.genres;
  useEffect(() => {
    dispatch(getMoviesThunk());
    dispatch(getMovieGenresThunk());
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
                <figure key={index} className="min-w-[265px] shrink-0">
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
                          {genre?.name}
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
