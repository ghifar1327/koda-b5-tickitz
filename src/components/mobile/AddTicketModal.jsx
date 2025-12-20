import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function AddTicketModal({ toogle, submitPurchase, selectedSeats}) {
  const { id } = useParams();
  const idParams = parseInt(id);
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie.id === idParams);

  const purchase = useSelector((state) => state.purchases);
//   const selectedSeats = purchase.choosed_seats;
  const priceForSeat = purchase.subtotal;

  
  return (
    <div
      className={`${toogle ? 'hidden' : 'flex'} fixed top-0 left-0 z-1 h-screen w-full items-center justify-center bg-black/50`}
    >
      <div className="flex-col md:flex">
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
              <p className="text-primary font-bold">{`$ ${priceForSeat}`}</p>
            </div>
          </section>
        </article>
        <button className="border-primary text-primary mt-5 w-full rounded-md border-3 bg-white p-3 text-center">
          Confirm Order
        </button>
        <button
          className="bg-primary mt-2 w-full rounded-md p-3 text-center text-white"
          onClick={submitPurchase}
        >
          Cancle
        </button>
      </div>
    </div>
  );
}
