import { format } from "date-fns";
import { useMovies, useMoviesId } from "../hooks/useFetch";

export default function PartialSlideMovie() {
  const {movies} = useMovies('https://api.themoviedb.org/3/movie/popular?api_key=')
  const {genres} = useMoviesId('https://api.themoviedb.org/3/genre/movie/list?api_key=')

  return (
    <>
      <article className="px-6 hide-scrollbar flex overflow-x-scroll gap-[18px] mt-7 md:px-[180px]">
        {movies.map((item, index) => {
          return (
            <figure key={index} className="min-w-[265px] shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                className="w-[265px]"
              />
              <h2 className="mt-2 text-sm wrap-break-word max-w-[200px]">
                {item.title}
              </h2>
              <h3>{format(item.release_date, 'MMMM yyyy')}</h3>
              <section className="flex gap-3">{item.genre_ids.slice(0,2).map((id)=>{
                const genre = genres.find((g)=> g.id === id)
                return(
                  <p key={id} className="">
                    {genre?.name}
                    {" "}
                  </p>
                )
              })}</section>
            </figure>
          );
        })}
      </article>
    </>
  );
}
