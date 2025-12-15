import { format } from "date-fns";
import { useState } from "react";

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
      <article className="hidden mt-12 px-6 md:flex justify-between md:px-[180px]">
        {movies.slice(startSlice, endSlice).map((item, index) => {
          return (
            <figure key={index} className="min-w-[265px] shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.image}`}
                className="w-[265px]"
              />
              <h2 className="mt-2 text-sm wrap-break-word max-w-[200px]">
                {item.title}
              </h2>
              <h3 className="text-blue-600 font-bold">
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
