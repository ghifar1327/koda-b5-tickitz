import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getMovieGenresThunk,
  getMoviesThunk,
} from '../redux/slices/fetchMovie.slice';
import ChooseSeat from './ChooseSeat';
import ChooseSeatMobile from './mobile/ChooseSeatMobile';

export default function OrderTicket() {
  const [prieceForSeat, setPriceForSeat] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const reguler = 10;
  const loveSeat = 'F10/F11';

  useEffect(() => {
    let subTotal = 0;
    selectedSeats.forEach((seat) => {
      if (seat === loveSeat) {
        subTotal += 20;
      } else {
        subTotal += reguler;
      }
      setPriceForSeat(subTotal);
    });
  }, [selectedSeats]);

  const dispatch = useDispatch();
  const getMovies = useSelector((state) => state.movies);
  const movies = getMovies.movies;
  const genres = getMovies.genres;
  useEffect(() => {
    dispatch(getMoviesThunk());
    dispatch(getMovieGenresThunk());
  }, []);
  const { id } = useParams();
  const idParams = parseInt(id);
  const movie = movies.find((movie) => movie.id === idParams);
  console.log(movie);
  console.log(id);

  return (
    <>
      <div className="flex justify-center bg-[#A0A3BD33] pt-[31px]">
        <div className="hidden w-[450px] items-center justify-between gap-3 md:flex">
          <div className="flex w-200 flex-col items-center gap-2.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#008000]">
              <img src="/check.svg" alt="check" className="h-[10px] w-[15px]" />
            </div>
            <p className="text-[#4E4B66]">Dates And Times</p>
          </div>
          <div className="h-px w-full border border-dashed border-[#A0A3BD]"></div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              2
            </p>
            <p className="text-[#4E4B66]">Seat</p>
          </div>
          <div className="h-px w-full border border-dashed border-[#A0A3BD]"></div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A0A3BD] text-white">
              3
            </p>
            <p className="text-[#A0A3BD]">Payment</p>
          </div>
        </div>
      </div>
      <main className="grid grid-cols-1 gap-4 bg-[#A0A3BD33] pt-[31px] md:grid-cols-[2fr_1fr] md:px-[180px]">
        <div className="mb-[171px] bg-white p-[22px] py-[71px]">
          <article className="flex h-fit justify-between rounded-md border border-[#DEDEDE] p-[13px] px-6">
            <section className="flex flex-col w-full gap-4 text-center md:flex md:text-start">
              <div className='flex flex-col md:flex-row w-full items-center'>
              <figure className="h-[174px] w-full md:h-[117px] md:w-[184px]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                  alt={movie.title}
                  className="h-full w-full object-cover object-top"
                  />
              </figure>
              <div className="flex flex-col h-full justify-between">
                <h1>{movie.title}</h1>
                <section>
                  <div className="flex justify-center gap-3 md:justify-start">
                    {movie.genreId.slice(0, 2).map((id) => {
                      const genre = genres.find((g) => g.id === id);
                      return (
                        <p key={id} className="">
                          {genre?.name}
                        </p>
                      );
                    })}
                  </div>
                </section>
                <section>
                  <p>Reguler - 13:00 PM</p>
                </section>
                <div className='flex justify-center'>
                  <button className="w-[113px] rounded-full bg-[#1D4ED833] p-1 px-3 text-primary md:hidden">
                    Change
                  </button>
                </div>
                        </div>
              </div>
            </section>
            <div className="flex items-end">
              <button className="hidden rounded-md bg-primary p-1 px-3 text-white md:flex">
                Change
              </button>
            </div>
          </article>
          <ChooseSeat
            setSelectedSeats={setSelectedSeats}
            selectedSeats={selectedSeats}
          />
          <ChooseSeatMobile/>
        </div>
        <div className='hidden md:flex flex-col'>
          <article className="rounded-md bg-white">
            <section>
              <div className="flex flex-col gap-2 p-6 py-10">
                <div className="flex flex-col items-center gap-2 pb-2">
                  <img
                    src="/cineone.svg"
                    alt="cine one"
                    className="h-4 w-[124px]"
                  />
                  <h1 className="text-center text-[30px]">CineOne21 Cinema</h1>
                </div>
                <div className="flex justify-between text-[14px]">
                  <p className="text-[#6B6B6B]">Movie selected</p>
                  <p className="line-clamp-1 w-[60%] text-end font-bold">
                    {movie.title}
                  </p>
                </div>
                <div className="flex justify-between text-[14px]">
                  <p className="text-[#6B6B6B]">Tuesdey, 07 July 2020</p>
                  <p className="font-bold">13 : 00 PM</p>
                </div>
                <div className="flex justify-between text-[14px]">
                  <p className="text-[#6B6B6B]">One Ticket Price</p>
                  <p className="font-bold">$ 10</p>
                </div>
                <div className="flex justify-between text-[14px]">
                  <p className="text-[#6B6B6B]">Seat Choosed</p>
                  <p className="line-clamp-6 font-bold">
                    {' '}
                    {selectedSeats.join(', ')}
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between p-6">
                <p className="font-bold">Total Payment</p>
                <p className="font-bold text-primary">{`$ ${prieceForSeat}`}</p>
              </div>
            </section>
          </article>
          <button className="mt-10 w-full rounded-md bg-primary p-3 text-center text-white">
            Checkout Now
          </button>
        </div>
      </main>
    </>
  );
}
