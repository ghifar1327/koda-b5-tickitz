export default function ChooseSeat({ setSelectedSeats, selectedSeats }) {
  const handleSeatChange = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
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
      <h1 className="mt-[37px] text-[30px] font-bold">Choose Seat</h1>
      <article className="hidden flex-col md:flex">
        <h2 className="mt-[37px] text-center text-[#4E4B66]">Screen</h2>
        <form action="" className="mt-[30px] flex justify-between">
          <div className="flex">
            <div className="mr-2 flex flex-col gap-2 text-[#4E4B66]">
              <p className="flex h-8 w-8 items-center justify-center">A</p>
              <p className="flex h-8 w-8 items-center justify-center">B</p>
              <p className="flex h-8 w-8 items-center justify-center">C</p>
              <p className="flex h-8 w-8 items-center justify-center">D</p>
              <p className="flex h-8 w-8 items-center justify-center">E</p>
              <p className="flex h-8 w-8 items-center justify-center">F</p>
              <p className="flex h-8 w-8 items-center justify-center">G</p>
            </div>
            <div className="grid w-fit grid-cols-7 gap-2">
              {seatLeft.map((item) => (
                <label key={item} htmlFor={item} className="cursor-pointer">
                  <input
                    type="checkbox"
                    id={item}
                    name={item}
                    checked={selectedSeats.includes(item)}
                    onChange={() => handleSeatChange(item)}
                    className="peer hidden"
                  />
                  <div className="peer-checked:bg-primary h-8 w-8 rounded-md bg-[#D6D8E7] peer-checked:text-white"></div>
                </label>
              ))}
            </div>
          </div>
          <div className="h-fif grid w-fit grid-cols-7 gap-2">
            {seatRight.map((item) => {
              return (
                <label
                  key={item}
                  htmlFor={item}
                  className={`cursor-pointer ${
                    item == 'F10/F11' ? 'col-span-2' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    id={item}
                    name={item}
                    checked={selectedSeats.includes(item)}
                    onChange={() => handleSeatChange(item)}
                    className="peer hidden"
                  />
                  <div
                    className={`${
                      item == 'F10/F11'
                        ? 'w-full bg-[#F589D7]'
                        : 'w-8 bg-[#D6D8E7]'
                    } peer-checked:bg-primary h-8 rounded-md peer-checked:text-white`}
                  ></div>
                </label>
              );
            })}
          </div>
        </form>
        <section className="flex justify-between">
          <div className="flex justify-between gap-2">
            <p className="flex h-8 w-8 items-center justify-center"></p>
            <p className="flex h-8 w-8 items-center justify-center">1</p>
            <p className="flex h-8 w-8 items-center justify-center">2</p>
            <p className="flex h-8 w-8 items-center justify-center">3</p>
            <p className="flex h-8 w-8 items-center justify-center">4</p>
            <p className="flex h-8 w-8 items-center justify-center">5</p>
            <p className="flex h-8 w-8 items-center justify-center">6</p>
            <p className="flex h-8 w-8 items-center justify-center">7</p>
          </div>
          <div className="flex justify-between gap-2">
            <p className="flex h-8 w-8 items-center justify-center"></p>
            <p className="flex h-8 w-8 items-center justify-center">8</p>
            <p className="flex h-8 w-8 items-center justify-center">9</p>
            <p className="flex h-8 w-8 items-center justify-center">10</p>
            <p className="flex h-8 w-8 items-center justify-center">11</p>
            <p className="flex h-8 w-8 items-center justify-center">12</p>
            <p className="flex h-8 w-8 items-center justify-center">13</p>
            <p className="flex h-8 w-8 items-center justify-center">14</p>
          </div>
        </section>
        <h1 className="mt-8 text-[18px]">Seating Key</h1>
        <section className="mt-8 flex justify-around">
          <div className="flex items-center gap-4 text-[#4E4B66]">
            <div className="h-8 w-8 rounded-md bg-[#D6D8E7]"></div>
            <p>Availabe</p>
          </div>
          <div className="flex items-center gap-4 text-[#4E4B66]">
            <div className="bg-primary h-8 w-8 rounded-md"></div>
            <p>Selected</p>
          </div>
          <div className="flex items-center gap-4 text-[#4E4B66]">
            <div className="h-8 w-8 rounded-md bg-[#F589D7]"></div>
            <p>Love Nest</p>
          </div>
          <div className="flex items-center gap-4 text-[#4E4B66]">
            <div className="h-8 w-8 rounded-md bg-[#6E7191]"></div>
            <p>Sold</p>
          </div>
        </section>
      </article>
    </>
  );
}
