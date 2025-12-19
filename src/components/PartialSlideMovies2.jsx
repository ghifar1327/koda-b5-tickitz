import { format } from 'date-fns';
import { useState } from 'react';
import { Link } from 'react-router';

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
      <section className="items-center justify-between gap-4 px-6 md:flex md:px-[180px]">
        <div>
          <p className="text-[32px]">Exiting Movie Comming Soon</p>
        </div>
        <div className="hidden gap-[9px] md:flex">
          <button
            onClick={arrowLeft}
            className="flex h-[69px] w-[69px] items-center justify-center rounded-[50%] bg-[#A0A3BD]"
          >
            <img src="/arrow-white.png" alt="" className="h-6 w-6" />
          </button>
          <button
            onClick={arrorRight}
            className="bg-primary flex h-[69px] w-[69px] items-center justify-center rounded-[50%]"
          >
            <img src="/arrow-white.png" alt="" className="h-6 w-6 rotate-180" />
          </button>
        </div>
      </section>
      <article className="no-scrollbar mt-12 flex justify-between overflow-x-scroll px-6 md:px-[180px]">
        {movies.slice(startSlice, endSlice).map((item, index) => {
          return (
            <figure key={index} className="min-w-[265px] shrink-0">
              <div className="group relative h-fit w-fit">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.image}`}
                  className="w-[265px] rounded-md"
                />
                <div className="absolute top-0 z-1 flex h-full w-full flex-col items-center justify-center gap-2 rounded-md bg-black/50 opacity-0 group-hover:opacity-100">
                  <Link to={`/detail/${item.id}`}>
                    <button className="h-12 w-[188px] rounded-md border border-white text-white">
                      detail
                    </button>
                  </Link>
                  <Link to={`/order/${item.id}`}>
                    <button className="border-primary bg-primary h-12 w-[188px] rounded-md border text-white">
                      Buy Ticket
                    </button>
                  </Link>
                </div>
              </div>
              <h2 className="text-bold mt-2 line-clamp-1 max-w-[200px] text-start text-[24px]">
                {item.title}
              </h2>
              <h3 className="text-primary mb-2 text-start font-bold">
                {format(item.release, 'MMMM yyyy')}
              </h3>
              <section className="flex gap-3">
                {item.genreId.slice(0, 2).map((id) => {
                  const genre = genres.find((g) => g.id === id);
                  return (
                    <p
                      key={id}
                      className="rounded-l-full rounded-r-full bg-gray-200 p-1 px-3 text-gray-400"
                    >
                      {genre?.name}{' '}
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
