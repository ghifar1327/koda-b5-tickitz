import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookTicketInput from '../components/BookTicketInput';

export default function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState('');
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  console.log(id);
  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_API_KEY
          }`,
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
        const cre = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
            import.meta.env.VITE_API_KEY
          }`,
        );
        const creditData = await cre.json();
        const dir = creditData.crew.find(
          (credits) => credits.job === 'Director',
        );
        // console.log(dir);
        setDirector(dir ? dir.name : 'Unknown');
        setCast(creditData.cast.slice(0, 5));

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchDetail();
  }, [id]);

  if (loading)
    return (
      <>
        <div className="absolute inset-0 z-100 flex h-[1024px] w-full items-center justify-center backdrop-blur-sm transition-all duration-500 ease-in-out">
          <div className="loader"></div>
        </div>
      </>
    );

  return (
    <>
      <div
        className={`h-[461px] w-full bg-cover bg-center`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      ></div>
      <article className="relative -top-80 px-5 md:-top-32 md:px-[180px]">
        <div className="flex flex-col items-center gap-[19px] md:flex-row md:items-end">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="h-[406px] w-[264px]"
          />
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold">{movie.title}</h1>
            <div className="mt-[23px] flex gap-[7px]">
              {movie.genres.slice(0, 2).map((genre) => (
                <p
                  key={genre.id}
                  className="rounded-2xl bg-[#A0A3BD1A] px-[18px] py-px text-[16px] text-[#A0A3BD]"
                >
                  {genre.name}
                </p>
              ))}
            </div>
            <section className="flex gap-[66px] mt-5">
              <div className='flex flex-col gap-2'>
                <div>
                  <p>Release Date</p>
                  <p>{format(movie.release_date, 'MMMM yyyy')}</p>
                </div>
                <div>
                  <p>Duration</p>
                  <p>{movie.runtime}</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div>
                  <p>Derected by</p>
                  <p>{director}</p>
                </div>
                <div>
                  <p>Cast</p>
                  <p className="">
                    {cast
                      .slice(0, 3)
                      .map((actor) => actor.name)
                      .join(', ')}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="mt-8 max-w-[821px]">
          <h2 className="text-[20px] font-bold">Synopsis</h2>
          <p>{movie.overview}</p>
        </section>
      <BookTicketInput id={id} />
      </article>
    </>
  );
}
