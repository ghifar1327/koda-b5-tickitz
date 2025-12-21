import { useDispatch, useSelector } from 'react-redux';
import { setChoosedSeat } from '../redux/slices/purchase.slice';
import { useState } from 'react';
import ModalAddTicket from './modal/ModalAddTicket';

export default function ChooseSeatMobile() {
  const [column, setColumn] = useState('');
  const [row, setRow] = useState('');
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.purchases.choosed_seats);

  const seatLeft = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'E1',
    'E2',
    'E3',
    'E4',
    'E5',
    'E6',
    'E7',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'G1',
    'G2',
    'G3',
    'G4',
    'G5',
    'G6',
    'G7',
  ];

  const seatRight = [
    'A8',
    'A9',
    'A10',
    'A11',
    'A12',
    'A13',
    'A14',
    'B8',
    'B9',
    'B10',
    'B11',
    'B12',
    'B13',
    'B14',
    'C8',
    'C9',
    'C10',
    'C11',
    'C12',
    'C13',
    'C14',
    'D8',
    'D9',
    'D10',
    'D11',
    'D12',
    'D13',
    'D14',
    'E8',
    'E9',
    'E10',
    'E11',
    'E12',
    'E13',
    'E14',
    'F8',
    'F9',
    'F10/F11',
    'F12',
    'F13',
    'F14',
    'G8',
    'G9',
    'G10',
    'G11',
    'G12',
    'G13',
    'G14',
  ];

  function handleInput(e) {
    e.preventDefault();

    let seat = `${column}${row}`;

    if (column === 'F' && (row === '10' || row === '11')) {
      seat = 'F10/F11';
    }

    dispatch(setChoosedSeat(seat));
  }

  const [toogle, setToogle] = useState(true);
  function submitPurchase() {
    setToogle((prevToogle) => !prevToogle);
  }
  return (
    <>
      <p className="mt-4 md:hidden">Selected Seats:</p>
      <div className="h-1 w-full rounded-full bg-[#CF0F0F] md:hidden"></div>

      <article className="flex w-full justify-between md:hidden">
        {/* LEFT SEATS */}
        <div className="flex gap-2">
          <div className="my-2 w-1 rounded-full bg-[#BBCB64]"></div>
          <div>
            <section className="mt-4 mb-2 grid w-fit grid-cols-7 gap-2">
              {seatLeft.map((item) => {
                const isSelected = selectedSeats.includes(item);
                return (
                  <div
                    key={item}
                    className={`${isSelected ? 'bg-primary' : 'bg-[#D6D8E7]'} h-6 w-6 rounded-sm`}
                  ></div>
                );
              })}
            </section>
            <div className="h-1 w-full rounded-full bg-amber-700"></div>
          </div>
        </div>

        <div>
          <section className="mt-4 mb-2 grid w-fit grid-cols-7 gap-2">
            {seatRight.map((item) => {
              const isSelected = selectedSeats.includes(item);
              const isLoveNest = item === 'F10/F11';
              return (
                <div
                  key={item}
                  className={`h-6 rounded-sm ${
                    isLoveNest
                      ? 'col-span-2 w-full bg-[#F589D7]'
                      : 'w-6 bg-[#D6D8E7]'
                  } `}
                >
                  <div
                    className={`h-6 w-full ${isSelected ? 'bg-primary' : ''} rounded-sm`}
                  ></div>
                </div>
              );
            })}
          </section>
          <div className="h-1 w-full rounded-full bg-amber-700"></div>
        </div>
      </article>

      <article className="mt-4 flex flex-col gap-6 md:hidden">
        <h2>Seating Key</h2>

        <section className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <img src="/ForwardArrow.svg" alt="" className="h-6 w-6 rotate-90" />
            <p>A - G</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/ForwardArrow.svg" alt="" className="h-6 w-6" />
            <p>1 - 14</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#D6D8E7]"></div>
            <p>Available</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary"></div>
            <p>Selected</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#F589D7]"></div>
            <p>Love Nest</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#6E7191]"></div>
            <p>Sold</p>
          </div>
        </section>

        <div>
          <p>Choosed</p>
          <p>{selectedSeats.join(', ') || '-'}</p>
        </div>
        <form onSubmit={handleInput}>
          <div className="flex justify-between">
            <div className="flex">
              <select
                name="column"
                value={column}
                onChange={(e) => setColumn(e.target.value)}
                className="h-13 w-30 rounded-l-md bg-[#EFF0F6] px-5 outline-0"
              >
                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <div className="h-full w-5 rounded-r-md bg-[#EFF0F6]"></div>
            </div>

            <div className="flex">
              <select
                name="row"
                value={row}
                onChange={(e) => setRow(e.target.value)}
                className="h-13 w-30 rounded-l-md bg-[#EFF0F6] px-5 outline-0"
              >
                {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <div className="h-full w-5 rounded-r-md bg-[#EFF0F6]"></div>
            </div>
          </div>
          <button
            type="submit"
            className="text-primary border-primary mt-10 w-full rounded-xl border-2 p-5 font-semibold"
          >
            Add new seat
          </button>
        </form>
        <div className="relative">
          <button
            onClick={submitPurchase}
            className="bg-primary absolute top-30 flex w-full justify-center rounded-md p-5 text-center text-white md:hidden"
          >
            Submit
          </button>
        </div>
      </article>

      <ModalAddTicket
        toogle={toogle}
        submitPurchase={submitPurchase}
        selectedSeats={selectedSeats}
      />
    </>
  );
}
