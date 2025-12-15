export default function PartialSlideMoviesMobile1({movies, genres}) {

  return (
    <>
      <article className="md:hidden px-6 hide-scrollbar flex overflow-x-scroll gap-[18px] mt-7 md:px-[180px]">
        {movies.map((item, index) => {
          return (
            <figure key={index} className="min-w-[265px] shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.image}`}
                className="w-[265px]"
              />
              <h2 className="mt-2 text-sm wrap-break-word font-bold text-start ">
                {item.title}
              </h2>
              <section className="flex gap-3">{item.genreId.slice(0,2).map((id)=>{
                const genre = genres.find((g)=> g.id === id)
                return(
                  <p key={id}  className="mt-2 p-px bg-gray-200 px-3 text-gray-400 rounded-r-full rounded-l-full">
                    {genre?.name}
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
