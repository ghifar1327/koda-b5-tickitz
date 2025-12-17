import { useState } from 'react';
import { Link } from 'react-router';

export default function BookTicketInput({ id }) {
  const [selected, setSelected] = useState('');

  const options = [
    { id: 'ebv1', label: "mask-[url('/ebv.id.svg')]", color: 'bg-black' },
    { id: 'hiflix', label: "mask-[url('/hiflix.svg')]", color: 'bg-red-500' },
    {
      id: 'cineOne21',
      label: "mask-[url('/cineone.svg')]",
      color: 'bg-blue-500',
    },
    { id: 'ebv2', label: "mask-[url('/ebv.id.svg')]", color: 'bg-black' },
  ];

  return (
    <div className="flex flex-col items-center gap-[38px] mt-14">
      <h1 className="text-[32px] hidden md:flex">Book Tictkets</h1>
      <h1 className="text-[32px] md:hidden mt-6">Showtimes and Ticket</h1>
      <article className="w-full hidden md:flex justify-between">
        <section>
          <p className="mb-3">Choose Date</p>
          <div className="flex w-[284px] items-center gap-3 rounded-md bg-[#EFF0F6] p-[19px]">
            <div>
              <img
                src="/calendar.svg"
                alt="calender"
                className="h-[18px] w-[18px]"
              />
            </div>
            <select name="date" id="date" className="w-full outline-0">
              <option value="" className="text-md">
                21/07/2
              </option>
            </select>
          </div>
        </section>
        <section>
          <p className="mb-3">Choose Time</p>
          <div className="flex w-[284px] items-center gap-3 rounded-md bg-[#EFF0F6] p-[19px]">
            <div>
              <img
                src="/time.png"
                alt="calender"
                className="h-[18px] w-[18px]"
              />
            </div>
            <select name="date" id="date" className="w-full outline-0">
              <option value="" className="text-md">
                8:30 AM
              </option>
            </select>
          </div>
        </section>
        <section>
          <p className="mb-3">Choose Location</p>
          <div className="flex w-[284px] items-center gap-3 rounded-md bg-[#EFF0F6] p-[19px]">
            <div>
              <img
                src="/location.png"
                alt="calender"
                className="h-[18px] w-[18px]"
              />
            </div>
            <select name="date" id="date" className="w-full outline-0">
              <option value="" className="text-md">
                Karawang
              </option>
            </select>
          </div>
        </section>
        <section className="flex items-end">
          <button className="w-[188px] rounded-md bg-[#1D4ED8] p-[19px] text-white">
            Filter
          </button>
        </section>
      </article>
      <article className='flex flex-col gap-5 md:hidden'>
        <section className='w-[350px]'>
          <div className="flex w-full items-center gap-3 rounded-md bg-[#EFF0F6] p-[19px]">
            <div>
              <img
                src="/calendar.svg"
                alt="calender"
                className="h-[18px] w-[18px]"
              />
            </div>
            <select name="date" id="date" className="w-full outline-0">
              <option value="" className="text-md">
                set a date
              </option>
            </select>
          </div>
        </section>
        <section>
          <div className="flex w-full items-center gap-3 rounded-md bg-[#EFF0F6] p-[19px]">
            <div>
              <img
                src="/calendar.svg"
                alt="calender"
                className="h-[18px] w-[18px]"
              />
            </div>
            <select name="date" id="date" className="w-full outline-0">
              <option value="" className="text-md">
                set a city
              </option>
            </select>
          </div>
        </section>
        <section className="flex items-end">
          <button className="w-full rounded-md bg-[#1D4ED8] p-[19px] text-white">
            Filter
          </button>
        </section>
      </article>
      <div className="flex gap-[34px]">
        <p className='hidden md:flex'>Choose Cinema</p>
        <p className="text-[#8692A6]">39 Result</p>
      </div>
      <div className="flex flex-col items-center gap-5 w-full md:flex-row md:justify-between">
        {options.map((item) => (
          <label key={item} htmlFor={item.id} className="cursor-pointer">
            <input
              id={item.id}
              type="checkbox"
              name={item.id}
              value={item.id}
              checked={selected === item.id}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <div
              className={`flex h-[157px] w-[264px] items-center justify-center rounded-2xl border-2 transition-all duration-200 ${
                selected === item.id
                  ? 'border-blue-500 bg-blue-600 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div
                className={`${
                  item.label
                } h-full w-full mask-center mask-no-repeat ${
                  selected === item.id ? 'bg-white' : item.color
                }`}
              ></div>
            </div>
          </label>
        ))}
      </div>
      <section className="flex flex-col items-center gap-[52px]">
        <div className="flex justify-center gap-2">
          <button className="rounded-md border border-[#1D4ED8] bg-[#1D4ED8] p-2 px-4 text-white">
            1
          </button>
          <button className="rounded-md border border-[#DEDEDE] p-2 px-4">
            2
          </button>
          <button className="rounded-md border border-[#DEDEDE] p-2 px-4">
            3
          </button>
          <button className="rounded-md border border-[#DEDEDE] p-2 px-4">
            4
          </button>
        </div>
        <Link to={`/order/${id}`}>
          <button className="w-[188px] rounded-md bg-[#1D4ED8] p-[19px] text-white">
            Book Now
          </button>
        </Link>
      </section>
    </div>
  );
}
