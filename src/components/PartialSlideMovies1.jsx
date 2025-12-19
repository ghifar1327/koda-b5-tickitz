import { Link } from 'react-router';

export default function PartialSlideMovies1({ movies, genres }) {
  return (
    <>
      <article className="no-scrollbar mt-7 flex justify-between gap-[18px] overflow-x-scroll px-6 md:px-[180px]">
        {movies.slice(0, 4).map((item, index) => {
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
                    <button className="h-12 w-[188px] rounded-md border border-primary bg-primary text-white">
                      Buy Ticket
                    </button>
                  </Link>
                </div>
              </div>
              <h2 className="text-bold mt-2 mb-2 line-clamp-1 max-w-[200px] text-start text-sm text-[24px]">
                {item.title}
              </h2>
              <section className="flex gap-3">
                {item.genreId.slice(0, 2).map((id) => {
                  const genre = genres.find((g) => g.id === id);
                  return (
                    <p
                      key={id}
                      className="rounded-l-full rounded-r-full bg-gray-200 p-px px-3 text-gray-400"
                    >
                      {genre?.name}
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
