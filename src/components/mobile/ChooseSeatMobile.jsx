import React from 'react';

export default function ChooseSeatMobile() {
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
      <p className="md:hidden mt-4">Selected Seats:</p>
      <div className="h-1 w-full rounded-full bg-[#CF0F0F] md:hidden"></div>
      <article className="flex w-full justify-between md:hidden">
        <div className="flex gap-2">
          <div className="my-2 w-0.5 rounded-full bg-[#BBCB64]"></div>
          <div>
            <section className="mt-4 mb-2 grid w-fit grid-cols-7 gap-2">
              {seatLeft.map((item) => {
                return (
                  <div
                    id={item}
                    className="h-4 w-4 rounded-sm bg-[#D6D8E7]"
                  ></div>
                );
              })}
            </section>
            <div className="h-1 w-full rounded-full bg-amber-700"></div>
          </div>
        </div>
        <div className="">
          <section className="mt-4 mb-2 grid w-fit grid-cols-7 gap-2">
            {seatRight.map((item) => {
              return (
                <div
                  id={item}
                  className={`${
                    item === 'F10/F11'
                      ? 'col-span-2 w-full bg-[#F589D7]'
                      : 'w-4 bg-[#D6D8E7]'
                  } h-4 rounded-sm`}
                ></div>
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
            <img src="/ForwardArrow.svg" alt="" className="h-4 w-4 rotate-90" />
            <p>A - G</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/ForwardArrow.svg" alt="" className="h-4 w-4" />
            <p>1 - 14</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-md bg-[#D6D8E7]"></div>
            <p>Avaliable</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-md bg-[#1D4ED8]"></div>
            <p>Selected</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-md bg-[#F589D7]"></div>
            <p>Love Nest</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-md bg-[#6E7191]"></div>
            <p>Sold</p>
          </div>
        </section>
        <div>
          <p>Choosed</p>
          <p>C4</p>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <select
              name=""
              id=""
              className="h-13 w-30 rounded-l-md bg-[#EFF0F6] px-5 outline-0"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <div className="h-full w-5 rounded-r-md bg-[#EFF0F6]"></div>
          </div>
          <div className="flex">
            <select
              name=""
              id=""
              className="h-13 w-30 rounded-l-md bg-[#EFF0F6] px-5 outline-0"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </select>
            <div className="h-full w-5 rounded-r-md bg-[#EFF0F6]"></div>
          </div>
        </div>
        <button className="text-primary border-primary w-full rounded-xl border-2 p-5 font-semibold">
          Add new seat
        </button>
      </article>
    </>
  );
}
