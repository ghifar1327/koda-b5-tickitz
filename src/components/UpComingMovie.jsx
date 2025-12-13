import { useMovies, useMoviesId } from "../hooks/useFetch";

export default function UpComingMovie({startSlice, endSlice}) {
  const {movies} = useMovies('https://api.themoviedb.org/3/movie/popular?api_key=')
  const {genres} = useMoviesId('https://api.themoviedb.org/3/genre/movie/list?api_key=')

  return (
    <>
      <article className="mt-12 px-6 flex justify-between md:px-[180px]">
        {movies.slice(startSlice,endSlice).map((item, index) => {
          return (
            <figure ley={index} className="min-w-[265px] shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                className="w-[265px]"
              />
              <h2 className="mt-2 text-sm wrap-break-word max-w-[200px]">
                {item.title}
              </h2>
              <section className="flex gap-3">{item.genre_ids.slice(0,2).map((id)=>{
                const genre = genres.find((g)=> g.id === id)
                return(
                  <p key={id} className="border">
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
