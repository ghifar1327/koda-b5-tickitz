import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getMovieGenresThunk,
  getMoviesThunk,
} from "../redux/slices/fetchMovie.slice";
import ChooseSeat from "./ChooseSeat";

export default function OrderTicket() {
  const [prieceForSeat, setPriceForSeat] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const reguler = 10;
  const loveSeat = "F10/F11";

  useEffect(() => {
    let subTotal = 0;
    selectedSeats.forEach((seat) => {
      if (seat === loveSeat) {
        subTotal += 40;
      } else {
        subTotal += reguler;
      }
    });
    setPriceForSeat(subTotal);
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
        <div className="w-[450px] flex justify-between  items-center gap-3">
          <div className="flex flex-col items-center gap-2.5 w-200">
            <div className="w-12 h-12 bg-[#008000] flex justify-center items-center rounded-full">
              <img src="/check.svg" alt="check" className="w-[15px] h-[10px]" />
            </div>
            <p className="text-[#4E4B66]">Dates And Times</p>
          </div>
          <div className="h-px w-full border border-[#A0A3BD] border-dashed"></div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="w-12 h-12 bg-[#1D4ED8] flex justify-center items-center rounded-full text-white">
              2
            </p>
            <p className="text-[#4E4B66]">Seat</p>
          </div>
          <div className="h-px w-full border border-[#A0A3BD] border-dashed"></div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="w-12 h-12 bg-[#A0A3BD] flex justify-center items-center rounded-full text-white">
              3
            </p>
            <p className="text-[#A0A3BD]">Payment</p>
          </div>
        </div>
      </div>
      <main className="gap-4 grid grid-cols-[2fr_1fr] px-[180px] bg-[#A0A3BD33]  pt-[31px]">
        <div className=" bg-white p-[22px] py-[71px] mb-[171px]">
          <article className="flex justify-between h-fit p-[13px] px-6 border border-[#DEDEDE] rounded-md">
            {getMovies.fetchStatus.movies.isSuccess ? (
              <section className="flex gap-4">
                <figure className="w-[184px] h-[117px] overflow-">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                    alt={movie.title}
                    className="w-full h-full object-cover object-top"
                  />
                </figure>
                <div className="flex flex-col justify-between">
                  <h1>{movie.title}</h1>
                  <section>
                    <div className="flex gap-3">
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
                </div>
              </section>
            ) : (
              <div className="loader"></div>
            )}
            <div className="flex items-end">
              <button className="bg-[#1D4ED8] text-white p-1 px-3 rounded-md">
                Change
              </button>
            </div>
          </article>
          <ChooseSeat
            setSelectedSeats={setSelectedSeats}
            selectedSeats={selectedSeats}
          />
        </div>
        <div>
          <article className="bg-white rounded-md">
            <section>
              <div className="p-6 flex flex-col gap-2 py-10">
                <div className="flex flex-col items-center gap-2 pb-2">
                  <img
                    src="/cineone.svg"
                    alt="cine one"
                    className="w-[124px] h-4"
                  />
                  <h1 className="text-center text-[30px]">CineOne21 Cinema</h1>
                </div>
                <div className="flex justify-between text-[14px]">
                  <p className="text-[#6B6B6B]">Movie selected</p>
                  <p className="line-clamp-1 w-[60%] font-bold text-end">
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
                  <p className="font-bold line-clamp-6"> {selectedSeats.join(", ")}</p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between p-6">
                <p className="font-bold">Total Payment</p>
                <p className="font-bold text-[#1D4ED8]">{`$ ${prieceForSeat}`}</p>
              </div>
            </section>
          </article>
          <button className="text-white bg-[#1D4ED8] w-full text-center p-3 rounded-md mt-10">
            Checkout Now
          </button>
        </div>
      </main>
    </>
  );
}
