import { useEffect, useState } from 'react';
import ModalPayment from '../components/modal/ModalPayment';
import { useSelector, useDispatch } from 'react-redux';
import { resetPurchase} from '../redux/slices/purchase.slice';
import { useHistory } from '../contexts/HistoryContex';

export default function PaymentRequest() {
  const dispatch = useDispatch();
  const { history ,addHistory } = useHistory();
  const purchase = useSelector((state) => state.purchases);
  console.log(purchase)
  const priceForSeat = purchase.subtotal;
  const seat = purchase.choosed_seats;
  const [toggle, setToggle] = useState(true);
  const eWallet = [
    { name: 'googlepay', logo: 'google-pay.svg' },
    { name: 'visa.svg', logo: 'visa.svg' },
    { name: 'gopay', logo: 'gopay.svg' },
    { name: 'paypal', logo: 'paypal.svg' },
    { name: 'dana', logo: 'dana.svg' },
    { name: 'bca', logo: 'bca.svg' },
    { name: 'bri', logo: 'bri.svg' },
    { name: 'ovo', logo: 'ovo.svg' },
  ];
  function submitPayment() {
    addHistory({
      movie: purchase.movie,
      cinema: purchase.cinema,
      location: purchase.location,
      dates: purchase.dates,
      seats: purchase.choosed_seats,
      subtotal: purchase.subtotal,
    });
    
    setToggle((prevToggle) => !prevToggle);
    dispatch(resetPurchase());
    console.log(toggle);
    console.log(history)
  }
  useEffect(() => {
  console.log("HISTORY:", history);
}, [history]);
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
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#008000]">
              <img src="/check.svg" alt="check" className="h-2.5 w-[15px]" />
            </div>
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
      <main className="flex justify-center bg-[#A0A3BD33] p-5">
        <article className="mb-10 flex w-[732px] flex-col gap-10 rounded-md bg-white px-[37px] py-[52px]">
          <h1 className="text-[24px] font-bold">Payment Info</h1>
          <section className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[#8692A6]">DATE & TIME</h2>
              <p>Tuesdey , 07 Juli 2020 at 02:00pm</p>
              <div className="h-px w-full bg-[#E6E6E6]" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[#8692A6]">MOVIE TITLE</h2>
              <p>{purchase.movie}</p>
              <div className="h-px w-full bg-[#E6E6E6]" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[#8692A6]">CINEMA NAME</h2>
              <p>Cineone21 Cinema</p>
              <div className="h-px w-full bg-[#E6E6E6]" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[#8692A6]">
                NUMBER OF TICKETS
              </h2>
              <p>{`${seat.length} peace`}</p>
              <div className="h-px w-full bg-[#E6E6E6]" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[#8692A6]">TOTAL PAYMENT</h2>
              <p>${priceForSeat}</p>
              <div className="h-px w-full bg-[#E6E6E6]" />
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h1 className="text-[24px] font-bold">Personal Informasi</h1>
            <label htmlFor="name" className="flex flex-col gap-3">
              <p className="text-[16px] font-semibold text-[#8692A6]">
                Full Name
              </p>
              <input
                type="text"
                name="name"
                id="name"
                className="h-16 w-full border border-[#DEDEDE] px-5 text-2xl text-[#4E4B66] outline-0"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-3">
              <p className="text-[16px] font-semibold text-[#8692A6]">Email</p>
              <input
                type="text"
                name="email"
                id="email"
                className="h-16 w-full border border-[#DEDEDE] px-5 text-2xl text-[#4E4B66] outline-0"
              />
            </label>
            <label htmlFor="phone" className="flex flex-col gap-3">
              <p className="text-[16px] font-semibold text-[#8692A6]">
                Phone Number
              </p>
              <div className="flex h-16 items-center border border-[#DEDEDE] py-3 text-2xl text-[#4E4B66]">
                <p className="px-5">+62</p>
                <div className="h-full w-px bg-[#DEDEDE]"></div>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="w-full px-5 outline-0"
                />
              </div>
            </label>
          </section>
          <section className="flex flex-col gap-3">
            <h1 className="text-[24px] font-bold">Payment Method</h1>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {eWallet.map((item) => {
                return (
                  <label key={item.name} htmlFor={item.name}>
                    <input
                      type="radio"
                      name="payment-methode"
                      id={item.name}
                      className="peer hidden"
                    />
                    <div className="peer-checked:border-primary flex h-12 justify-center rounded-md border-3 border-[#DEDEDE] p-3">
                      <img src={`/eWallet/${item.logo}`} alt={item.name} />
                    </div>
                  </label>
                );
              })}
            </div>
          </section>
          <button
            onClick={submitPayment}
            className="bg-primary w-full rounded-md p-3 text-white"
          >
            Pay your order
          </button>
        </article>
      </main>
      <ModalPayment toggle={toggle} />
    </>
  );
}
