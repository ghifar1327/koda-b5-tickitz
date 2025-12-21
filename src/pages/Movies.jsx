// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import FilterMovie from '../components/FilterMovie';
import FormSubscribe from '../components/FormSubscribe';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import {
  getMovieGenresThunk,
  getMoviesThunk,
} from '../redux/slices/fetchMovie.slice';

export default function Movies() {
  const dispatch = useDispatch();
  const { movies, genres } = useSelector((state) => state.movies);

  const [search, setSearch] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    dispatch(getMoviesThunk());
    dispatch(getMovieGenresThunk());
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) => {
    const filterTitle = movie.title.toLowerCase().includes(search.toLowerCase());

    const fleterGenre =
      selectedGenres.length === 0 ||
      movie.genreId.some((id) => selectedGenres.includes(id));

    return filterTitle && fleterGenre;
  });
  return (
    <>
      <hero>
        <div className="relative h-[462px] w-full items-center bg-[url(/MaskGroup.png)] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60">
            <section className="flex h-full flex-col justify-center gap-4 px-10 md:w-[838px] md:pl-[180px]">
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
      <FilterMovie
        search={search}
        setSearch={setSearch}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
      />
      <article className="mt-14 flex justify-center">
        <div className="flex gap-4 overflow-x-scroll p-5 md:grid md:grid-cols-4">
          {filteredMovies.slice(0, 12).map((item, index) => {
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
                      <button className="border-primary bg-primary h-12 w-[188px] rounded-md border text-white">
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
        <div className="bg-primary flex h-10 w-10 justify-center rounded-full text-white">
          <button className="bg-primary h-10 w-10 rounded-full text-white">
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
        <div className="bg-primary flex h-10 w-10 justify-center rounded-full">
          <button className="">
            <img src="/arrow-white.png" alt="" className="h-6 w-6 rotate-180" />
          </button>
        </div>
      </section>
      <FormSubscribe />
    </>
  );
}
