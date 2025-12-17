import FormSubscribe from '../components/FormSubscribe';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovieGenresThunk,
  getMoviesThunk,
} from '../redux/slices/fetchMovie.slice';
import PartialSlideMovies1 from '../components/PartialSlideMovies1';
import PartialSlideMovies2 from '../components/PartialSlideMovies2';

export default function HomePage() {
  const dispatch = useDispatch();
  const getMovies = useSelector((state) => state.movies);
  const movies = getMovies.movies;
  const genres = getMovies.genres;
  useEffect(() => {
    dispatch(getMoviesThunk());
    dispatch(getMovieGenresThunk());
  }, []);

  return (
    <>
      <main className="mt-[49px] text-center md:mt-10 md:text-start">
        <hero className="flex flex-col gap-[19px] px-6 md:flex-row md:justify-between md:px-[180px]">
          <section className="flex flex-col justify-center gap-4 md:max-w-[568px]">
            <p className="text-[25px] text-primary">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </p>
            <p className="text-[40px] font-medium md:text-[48px]">
              Experience the Magic of Cinema: Book Your Tickets Today
            </p>
            <p className="text-[20px]">
              Sign up and get the ticket with a lot of discount
            </p>
          </section>
          <figure className="grid grid-flow-col grid-rows-5 gap-3">
            <img src="/imgGrid1.png" alt="" className="row-span-2 w-full" />
            <img src="/imgGrid2.png" alt="" className="row-span-3 h-full" />
            <img src="/imgGrid3.png" alt="" className="row-span-3 h-full" />
            <img src="/imgGrid4.png" alt="" className="row-span-2 w-full" />
          </figure>
        </hero>
        <article className="px-6 md:px-[180px]">
          <section className="mt-[70px]">
            <p className="font-bold text-primary">WHY CHOOSE US</p>
            <div className="max-w-[438px]">
              <p className="text-[32px]">
                Unleashing the Ultimate Movie Experience
              </p>
            </div>
          </section>
          <section className="mt-[33px] flex flex-col gap-[33px] md:flex-row">
            <div className="flex flex-col items-center gap-[19px] md:items-start">
              <img src="/Group 233.png" alt="" />
              <p>Guaranteed</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam alias velit, ipsum soluta est sit dolorem nulla id
                dolore, impedit mollitia voluptates eaque vel veniam, et eveniet
                iste perferendis ab!
              </p>
            </div>
            <div className="flex flex-col items-center gap-[19px] md:items-start">
              <img src="/Group 233.png" alt="" />
              <p>Affordable</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam alias velit, ipsum soluta est sit dolorem nulla id
                dolore, impedit mollitia voluptates eaque vel veniam, et eveniet
                iste perferendis ab!
              </p>
            </div>
            <div className="flex flex-col items-center gap-[19px] md:items-start">
              <img src="/Group 235.png" alt="" />
              <p>24/7 Customer Support</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam alias velit, ipsum soluta est sit dolorem nulla id
                dolore, impedit mollitia voluptates eaque vel veniam, et eveniet
                iste perferendis ab!
              </p>
            </div>
          </section>
        </article>
        <article className="gep-[14px] mt-[33.5px] flex flex-col text-center">
          <p className="text-[18px] font-bold text-primary">MOVIES</p>
          <p className="text-[38px]">
            Exciting Movies That Should Be Watched Today
          </p>
        </article>
        <PartialSlideMovies1 movies={movies} genres={genres} />
        {/* <PartialSlideMoviesMobile1 movies={movies} genres={genres} /> */}
        <div>
          <Link
            to="/movie"
            className="mt-[38px] hidden items-center justify-center gap-3 text-[18px] text-primary md:flex"
          >
            <p>View All</p>
            <img src="/arrow-up.png" alt="" />
          </Link>
        </div>
        <p className="mt-[62px] text-[18px] font-bold text-primary md:px-[180px]">
          UPCOMING MOVIES
        </p>
        {/* <PartialSlideMoviesMobile2 movies={movies} genres={genres} /> */}
        <PartialSlideMovies2 movies={movies} genres={genres} />
        <FormSubscribe />
      </main>
    </>
  );
}
