import { useDispatch, useSelector } from 'react-redux';
import { toggleSeat } from '../redux/slices/purchase.slice';

export default function ChooseSeat() {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.purchases.choosed_seats);

  const handleSeatChange = (seat) => {
    console.log(seat)
    dispatch(toggleSeat(seat));
  };

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

  return (
    <>
      <h1 className="mt-10 text-2xl font-bold">Choose Seat</h1>

      <form className="mt-8 hidden justify-between md:flex">
        <section>
          <div className="flex">
            <div className="flex flex-col gap-2">
              <p className="flex h-8 w-8 items-center justify-center">A</p>
              <p className="flex h-8 w-8 items-center justify-center">B</p>
              <p className="flex h-8 w-8 items-center justify-center">C</p>
              <p className="flex h-8 w-8 items-center justify-center">D</p>
              <p className="flex h-8 w-8 items-center justify-center">E</p>
              <p className="flex h-8 w-8 items-center justify-center">F</p>
              <p className="flex h-8 w-8 items-center justify-center">G</p>
            </div>
            <section className="grid grid-cols-7 gap-2">
              {seatLeft.map((seat) => (
                <label key={seat} className="cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSeats.includes(seat)}
                    onChange={() => handleSeatChange(seat)}
                    className="peer hidden"
                  />
                  <div className="peer-checked:bg-primary h-8 w-8 rounded bg-gray-300" />
                </label>
              ))}
            </section>
          </div>
          <div className="flex gap-2">
            <p className="flex h-8 w-8 items-center"></p>
            <p className="flex h-8 w-8 items-center">1</p>
            <p className="flex h-8 w-8 items-center">2</p>
            <p className="flex h-8 w-8 items-center">3</p>
            <p className="flex h-8 w-8 items-center">4</p>
            <p className="flex h-8 w-8 items-center">5</p>
            <p className="flex h-8 w-8 items-center">6</p>
            <p className="flex h-8 w-8 items-center">7</p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-7 gap-2 w-fit">
            {seatRight.map((seat) => (
              <label
                key={seat}
                className={`cursor-pointer ${
                  seat === 'F10/F11' ? 'col-span-2' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => handleSeatChange(seat)}
                  className="peer hidden"
                />
                <div
                  className={`peer-checked:bg-primary h-8 rounded ${
                    seat === 'F10/F11'
                      ? 'w-full bg-pink-300'
                      : 'w-8 bg-gray-300'
                  }`}
                />
              </label>
            ))}
          </div>
          <div className="flex gap-2">
            <p className="flex h-8 w-8 items-center justify-center">8</p>
            <p className="flex h-8 w-8 items-center justify-center">9</p>
            <p className="flex h-8 w-8 items-center justify-center">10</p>
            <p className="flex h-8 w-8 items-center justify-center">11</p>
            <p className="flex h-8 w-8 items-center justify-center">12</p>
            <p className="flex h-8 w-8 items-center justify-center">13</p>
            <p className="flex h-8 w-8 items-center justify-center">14</p>
          </div>
        </section>
      </form>
      <div className='mt-8'>
        <h1 className=' text-[18px] font-semibold'>Seating key</h1>
        <div className='flex justify-evenly mt-8 text-[#4E4B66]'>
          <section className='flex items-center gap-4'><div className='w-8 h-8 rounded bg-[#D6D8E7]'></div><p>Available</p></section>
          <section className='flex items-center gap-4'><div className='w-8 h-8 rounded bg-primary'></div><p>Selected</p></section>
          <section className='flex items-center gap-4'><div className='w-8 h-8 rounded bg-[#F589D7]'></div><p>Love nest</p></section>
          <section className='flex items-center gap-4'><div className='w-8 h-8 rounded bg-[#6E7191]'></div><p>Sold</p></section>
        </div>
      </div>
    </>
  );
}
