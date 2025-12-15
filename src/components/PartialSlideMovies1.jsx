import { Link } from "react-router";

export default function PartialSlideMovies1({ movies, genres }) {
  return (
    <>
      <article className="overflow-x-scroll px-6 hide-scrollbar justify-between flex gap-[18px] mt-7 md:px-[180px]">
        {movies.slice(0, 4).map((item, index) => {
          return (
            <figure key={index} className="min-w-[265px] shrink-0">
              <div className="relative group h-fit w-fit">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.image}`}
                  className="w-[265px]  rounded-md"
                />
                <div className=" rounded-md flex flex-col gap-2 justify-center items-center opacity-0  group-hover:opacity-100 bg-black/50 absolute z-1 h-full w-full top-0">
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
              <h2 className="mt-2 text-sm text-start line-clamp-1 mb-2 text-bold text-[24px] max-w-[200px]">
                {item.title}
              </h2>
              <section className="flex gap-3">
                {item.genreId.slice(0, 2).map((id) => {
                  const genre = genres.find((g) => g.id === id);
                  return (
                    <p
                      key={id}
                      className="p-px bg-gray-200 px-3 text-gray-400 rounded-r-full rounded-l-full">
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
