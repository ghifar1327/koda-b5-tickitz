import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router";

export default function PartialSlideMovies2({ movies, genres }) {
  const [startSlice, SetStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(4);

  function arrowLeft() {
    if (startSlice > 0) {
      SetStartSlice(startSlice - 4);
      setEndSlice(endSlice - 4);
    }
  }
  function arrorRight() {
    if (endSlice < 20) {
      SetStartSlice(startSlice + 4);
      setEndSlice(endSlice + 4);
    }
  }
  return (
    <>
      <section className="px-6 gap-4 md:px-[180px] md:flex justify-between items-center">
        <div>
          <p className="text-[32px]">Exiting Movie Comming Soon</p>
        </div>
        <div className="hidden md:flex gap-[9px]">
          <button
            onClick={arrowLeft}
            className="w-[69px] h-[69px] bg-[#A0A3BD] rounded-[50%] flex justify-center items-center"
          >
            <img src="/arrow-white.png" alt="" className="w-6 h-6" />
          </button>
          <button
            onClick={arrorRight}
            className="w-[69px] h-[69px]  rounded-[50%] bg-[#1D4ED8] flex justify-center items-center"
          >
            <img src="/arrow-white.png" alt="" className="w-6 h-6 rotate-180" />
          </button>
        </div>
      </section>
      <article className="mt-12 px-6 hide-scrollbar flex overflow-x-scroll justify-between md:px-[180px]  ">
        {movies.slice(startSlice, endSlice).map((item, index) => {
          return (
            <figure key={index} className="min-w-[265px] shrink-0 ">
              <div className="relative group h-fit w-fit">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.image}`}
                  className="w-[265px] rounded-md"
                />
                <div className="flex flex-col gap-2  rounded-md justify-center items-center opacity-0  group-hover:opacity-100 bg-black/50 absolute z-1 h-full w-full top-0">
                    <Link to={`/detail/${item.id}`}>
                    <button className="border rounded-md w-[188px] h-12 text-white border-white">detail</button>
                    </Link>
                    <Link to={`/order/${item.id}`}>
                    <button className="border rounded-md w-[188px] h-12 text-white border-[#1D4ED8] bg-[#1D4ED8]">Buy Ticket</button>
                    </Link>
                </div>
              </div>
              <h2 className="mt-2 line-clamp-1 text-start text-bold text-[24px] max-w-[200px]">
                {item.title}
              </h2>
              <h3 className="text-blue-600 font-bold text-start mb-2">
                {format(item.release, "MMMM yyyy")}
              </h3>
              <section className="flex gap-3">
                {item.genreId.slice(0, 2).map((id) => {
                  const genre = genres.find((g) => g.id === id);
                  return (
                    <p
                      key={id}
                      className="p-1 bg-gray-200 px-3 text-gray-400 rounded-r-full rounded-l-full"
                    >
                      {genre?.name}{" "}
                    </p>
                  );
                })}
              </section>
            </figure>
          );
        })}
      </article>
    </>
  );
}
