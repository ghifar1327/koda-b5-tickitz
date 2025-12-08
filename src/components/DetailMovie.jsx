import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState("");
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
        const cre = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const creditData = await cre.json();
        const dir = creditData.crew.find((c) => c.job === "Director");
        console.log(dir);
        setDirector(dir ? dir.name : "Unknown");
        setCast(creditData.cast.slice(0, 5));

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    fetchDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div
        className="bg-cover bg-center w-full h-[461px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      ></div>
      <article className="md:px-[180px] relative -top-48">
        <div className="flex flex-col md:flex-row gap-[19px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[264px] h-[406px]"
          />
          <div className="flex flex-col justify-end">
            <h1 className="text-[32px] font-bold">{movie.title}</h1>
            <div className="flex gap-[7px] mt-[23px]">
              {movie.genres.slice(0, 2).map((g) => (
                <p
                  key={g.id}
                  className="bg-[#A0A3BD1A] text-[#A0A3BD] px-[18px] py-px text-[16px] rounded-2xl"
                >
                  {g.name}
                </p>
              ))}
            </div>
            <section className=" flex gap-[66px]">
              <div>
                <div>
                  <p>Release Date</p>
                  <p>{format(movie.release_date, "MMMM yyyy")}</p>
                </div>
                <div>
                  <p>Duration</p>
                  <p>{movie.runtime}</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Derected by</p>
                  <p>{director}</p>
                </div>
                <div>
                  <p>Cast</p>
                  <div className="">
                    {cast.slice(0,3).map((actor) => actor.name).join(", ")}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="mt-8 w-[821px]">
          <h2 className="text-[20px] font-bold">Synopsis</h2>
          <p>{movie.overview}</p>
        </section>
      </article>
    </>
  );
}
