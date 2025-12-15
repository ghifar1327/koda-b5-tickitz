// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterMovie from "../components/FilterMovie";
import FormSubscribe from "../components/FormSubscribe";
import { Link } from "react-router";
import { useEffect } from "react";
import {
  getMovieGenresThunk,
  getMoviesThunk,
} from "../redux/slices/fetchMovie.slice";

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
              <figure key={index} className="min-w-[265px] shrink-0">
                <div className="relative group h-fit w-fit">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.image}`}
                    className="w-[265px]"
                  />
                  <div className="flex flex-col gap-2 justify-center items-center opacity-0  group-hover:opacity-100 bg-black/50 absolute z-1 h-full w-full top-0">
                    <Link to={`/detail/${item.id}`}>
                      <button className="border rounded-md w-[188px] h-12 text-white border-white">
                        detail
                      </button>
                    </Link>
                    <Link to={`/order/${item.id}`}>
                      <button className="border rounded-md w-[188px] h-12 text-white border-[#1D4ED8] bg-[#1D4ED8]">
                        Buy Ticket
                      </button>
                    </Link>
                  </div>
                </div>
                <h2 className="mt-2 line-clamp-1 text-start text-bold text-[24px] wrap-break-word max-w-[200px]">
                  {item.title}
                </h2>
                <section className="flex gap-3 my-2">
                  {item.genreId.slice(0, 2).map((id) => {
                    const genre = genres.find((g) => g.id === id);
                    return (
                      <p key={id} className="p-1 bg-gray-200 px-3 text-gray-400 rounded-r-full rounded-l-full">
                        {genre?.name}
                      </p>
                    );
                  })}
                </section>
              </figure>
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
