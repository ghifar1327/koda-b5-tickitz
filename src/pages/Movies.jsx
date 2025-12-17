// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import FilterMovie from '../components/FilterMovie';
import FormSubscribe from '../components/FormSubscribe';
import { Link } from 'react-router';
import { useEffect } from 'react';
import {
  getMovieGenresThunk,
  getMoviesThunk,
} from '../redux/slices/fetchMovie.slice';

export default function Movies() {
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
        <div className="relative h-[462px] w-full items-center bg-[url(/MaskGroup.png)] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60">
            <section className="flex h-full w-[838px] flex-col justify-center gap-4 pl-[180px]">
              <p className="text[18px] font-bold text-white">
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
      <article className="mt-14 flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          {movies.slice(0, 12).map((item, index) => {
            return (
              <figure key={index} className="min-w-[265px] shrink-0">
                <div className="group relative h-fit w-fit">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.image}`}
                    className="w-[265px]"
                  />
                  <div className="absolute top-0 z-1 flex h-full w-full flex-col items-center justify-center gap-2 bg-black/50 opacity-0 group-hover:opacity-100">
                    <Link to={`/detail/${item.id}`}>
                      <button className="h-12 w-[188px] rounded-md border border-white text-white">
                        detail
                      </button>
                    </Link>
                    <Link to={`/order/${item.id}`}>
                      <button className="h-12 w-[188px] rounded-md border border-primary bg-primary text-white">
                        Buy Ticket
                      </button>
                    </Link>
                  </div>
                </div>
                <h2 className="text-bold mt-2 line-clamp-1 max-w-[200px] text-start text-[24px] wrap-break-word">
                  {item.title}
                </h2>
                <section className="my-2 flex gap-3">
                  {item.genreId.slice(0, 2).map((id) => {
                    const genre = genres.find((g) => g.id === id);
                    return (
                      <p
                        key={id}
                        className="rounded-l-full rounded-r-full bg-gray-200 p-1 px-3 text-gray-400"
                      >
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
      <section className="my-[63px] flex justify-center gap-5">
        <div className="flex h-10 w-10 justify-center rounded-full bg-primary text-white">
          <button className="h-10 w-10 rounded-full bg-primary text-white">
            1
          </button>
        </div>
        <div className="flex h-10 w-10 justify-center rounded-full bg-[#F9FAFB] text-[#A0A3BD]">
          <button className="h-10 w-10 rounded-full bg-[#F9FAFB] text-[#A0A3BD]">
            2
          </button>
        </div>
        <div className="flex h-10 w-10 justify-center rounded-full bg-[#F9FAFB] text-[#A0A3BD]">
          <button className="h-10 w-10 rounded-full bg-[#F9FAFB] text-[#A0A3BD]">
            3
          </button>
        </div>
        <div className="flex h-10 w-10 justify-center rounded-full bg-[#F9FAFB] text-[#A0A3BD]">
          <button className="h-10 w-10 rounded-full bg-[#F9FAFB] text-[#A0A3BD]">
            4
          </button>
        </div>
        <div className="flex h-10 w-10 justify-center rounded-full bg-primary">
          <button className="">
            <img src="/arrow-white.png" alt="" className="h-6 w-6 rotate-180" />
          </button>
        </div>
      </section>
      <FormSubscribe />
    </>
  );
}
