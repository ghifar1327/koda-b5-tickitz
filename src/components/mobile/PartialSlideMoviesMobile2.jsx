import { format } from "date-fns";

export default function PartialSlideMoviesMobile1({ movies, genres }) {
  return (
    <>
      <div className="md:hidden text-center">
          <p className="text-[32px] px-15 mt-5">Exiting Movie Comming Soon</p>
      </div>
      <article className="md:hidden px-6 hide-scrollbar flex overflow-x-scroll gap-[18px] mt-7 md:px-[180px]">
        {movies.map((item, index) => {
          return (
            <figure key={index} className="min-w-[265px] shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.image}`}
                className="w-[265px]"
              />
              <div className="flex flex-col gap-2">
              <h2 className="font-bold text-sm text-start wrap-break-word">
                {item.title}
              </h2>
              <h3 className="text-blue-600 text-start font-bold">
                {format(item.release, "MMMM yyyy")}
              </h3>
              <section className="flex gap-3">
                {item.genreId.slice(0, 2).map((id) => {
                  const genre = genres.find((g) => g.id === id);
                  return (
                    <p
                      key={id}
                      className="p-px bg-gray-200 px-3 text-gray-400 rounded-r-full rounded-l-full"
                    >
                      {genre?.name}
                    </p>
                  );
                })}
              </section>
              </div>
            </figure>
          );
        })}
      </article>
    </>
  );
}
