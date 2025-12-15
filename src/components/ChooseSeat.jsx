

export default function ChooseSeat({ setSelectedSeats, selectedSeats }) {

  const handleSeatChange = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };


  const seatLeft = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "G1",
    "G2",
    "G3",
    "G4",
    "G5",
    "G6",
    "G7",
  ];
  const seatRight = [
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "B8",
    "B9",
    "B10",
    "B11",
    "B12",
    "B13",
    "B14",
    "C8",
    "C9",
    "C10",
    "C11",
    "C12",
    "C13",
    "C14",
    "D8",
    "D9",
    "D10",
    "D11",
    "D12",
    "D13",
    "D14",
    "E8",
    "E9",
    "E10",
    "E11",
    "E12",
    "E13",
    "E14",
    "F8",
    "F9",
    "F10/F11",
    "F12",
    "F13",
    "F14",
    "G8",
    "G9",
    "G10",
    "G11",
    "G12",
    "G13",
    "G14",
  ];

  return (
    <>
      <h1 className="text-[30px] font-bold mt-[37px]">Choose Seat</h1>
      <h2 className="text-[#4E4B66] text-center mt-[37px]">Screen</h2>
      <form action="" className="flex justify-between mt-[30px]">
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2 text-[#4E4B66]">
            <p className="w-8 h-8 flex justify-center items-center">A</p>
            <p className="w-8 h-8 flex justify-center items-center">B</p>
            <p className="w-8 h-8 flex justify-center items-center">C</p>
            <p className="w-8 h-8 flex justify-center items-center">D</p>
            <p className="w-8 h-8 flex justify-center items-center">E</p>
            <p className="w-8 h-8 flex justify-center items-center">F</p>
            <p className="w-8 h-8 flex justify-center items-center">G</p>
          </div>
          <div className="grid grid-cols-7 gap-2 w-fit">
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
                <div className="w-8 h-8 rounded-md  bg-[#D6D8E7] peer-checked:bg-[#1D4ED8] peer-checked:text-white"></div>
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 h-fif w-fit">
          {seatRight.map((item) => {
            return (
              <label
                key={item}
                htmlFor={item}
                className={`cursor-pointer ${
                  item == "F10/F11" ? "col-span-2" : ""
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
                    item == "F10/F11"
                      ? "w-full bg-[#F589D7]"
                      : "w-8 bg-[#D6D8E7]"
                  } h-8 rounded-md   peer-checked:bg-blue-600 peer-checked:text-white`}
                ></div>
              </label>
            );
          })}
        </div>
      </form>
      <section className="flex justify-between">
        <div className="flex justify-between gap-2">
          <p className="w-8 h-8 flex justify-center items-center"></p>
          <p className="w-8 h-8 flex justify-center items-center">1</p>
          <p className="w-8 h-8 flex justify-center items-center">2</p>
          <p className="w-8 h-8 flex justify-center items-center">3</p>
          <p className="w-8 h-8 flex justify-center items-center">4</p>
          <p className="w-8 h-8 flex justify-center items-center">5</p>
          <p className="w-8 h-8 flex justify-center items-center">6</p>
          <p className="w-8 h-8 flex justify-center items-center">7</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="w-8 h-8 flex justify-center items-center"></p>
          <p className="w-8 h-8 flex justify-center items-center">8</p>
          <p className="w-8 h-8 flex justify-center items-center">9</p>
          <p className="w-8 h-8 flex justify-center items-center">10</p>
          <p className="w-8 h-8 flex justify-center items-center">11</p>
          <p className="w-8 h-8 flex justify-center items-center">12</p>
          <p className="w-8 h-8 flex justify-center items-center">13</p>
          <p className="w-8 h-8 flex justify-center items-center">14</p>
        </div>
      </section>
      <h1 className="text-[18px] mt-8">Seating Key</h1>
      <section className="flex justify-around mt-8">
        <div className="text-[#4E4B66] flex gap-4 items-center ">
          <div className="w-8 h-8 rounded-md bg-[#D6D8E7]"></div>
          <p>Availabe</p>
        </div>
        <div className="text-[#4E4B66] flex gap-4 items-center ">
          <div className="w-8 h-8 rounded-md bg-[#1D4ED8]"></div>
          <p>Selected</p>
        </div>
        <div className="text-[#4E4B66] flex gap-4 items-center ">
          <div className="w-8 h-8 rounded-md bg-[#F589D7]"></div>
          <p>Love Nest</p>
        </div>
        <div className="text-[#4E4B66] flex gap-4 items-center ">
          <div className="w-8 h-8 rounded-md bg-[#6E7191]"></div>
          <p>Sold</p>
        </div>
      </section>
      <p className="mt-4">Selected Seats:</p>
    </>
  );
}
