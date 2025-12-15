import FormSubscribe from "../components/FormSubscribe";
import { Link } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieGenresThunk,
  getMoviesThunk,
} from "../redux/slices/fetchMovie.slice";
import PartialSlideMovies1 from "../components/PartialSlideMovies1";
import PartialSlideMovies2 from "../components/PartialSlideMovies2";

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
      <main className="mt-[49px] text-center md:text-start  md:mt-10">
        <hero className="gap-[19px] flex flex-col md:flex-row md:justify-between px-6 md:px-[180px]">
          <section className="flex flex-col gap-4 justify-center md:max-w-[568px]">
            <p className="text-[#1D4ED8] text-[25px]">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </p>
            <p className=" text-[40px] font-medium md:text-[48px] ">
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
            <p className="text-[#1D4ED8] font-bold">WHY CHOOSE US</p>
            <div className="max-w-[438px]">
              <p className="text-[32px]">
                Unleashing the Ultimate Movie Experience
              </p>
            </div>
          </section>
          <section className="flex flex-col md:flex-row gap-[33px] mt-[33px]">
            <div className=" flex flex-col gap-[19px] items-center md:items-start">
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
        <article className="text-center flex flex-col gep-[14px] mt-[33.5px]">
          <p className="text-[#1D4ED8] text-[18px] font-bold">MOVIES</p>
          <p className="text-[38px] ">
            Exciting Movies That Should Be Watched Today
          </p>
        </article>
        <PartialSlideMovies1 movies={movies} genres={genres} />
        {/* <PartialSlideMoviesMobile1 movies={movies} genres={genres} /> */}
        <div>
          <Link
            to="/movie"
            className="hidden md:flex justify-center items-center gap-3 text-[#1D4ED8] text-[18px] mt-[38px]"
          >
            <p>View All</p>
            <img src="/arrow-up.png" alt="" />
          </Link>
        </div>
        <p className="mt-[62px] md:px-[180px] text-[#1D4ED8] text-[18px] font-bold">
          UPCOMING MOVIES
        </p>
        {/* <PartialSlideMoviesMobile2 movies={movies} genres={genres} /> */}
        <PartialSlideMovies2 movies={movies} genres={genres} />
        <FormSubscribe />
      </main>
    </>
  );
}
