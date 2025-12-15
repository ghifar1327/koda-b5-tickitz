import{ useState } from "react";
import { Link } from "react-router";

export default function BookTicketInput({ id }) {
  const [selected, setSelected] = useState("");
  

  const options = [
    { id: "ebv1", label: "mask-[url('/ebv.id.svg')]", color: "bg-black" },
    { id: "hiflix", label: "mask-[url('/hiflix.svg')]", color: "bg-red-500" },
    {
      id: "cineOne21",
      label: "mask-[url('/cineone.svg')]",
      color: "bg-blue-500",
    },
    { id: "ebv2", label: "mask-[url('/ebv.id.svg')]", color: "bg-black" },
  ];

  return (
    <div className="flex flex-col gap-[38px] md:px-[180px]">
      <h1 className="text-[32px]">Book Tictkets</h1>
      <article className="flex justify-between">
        <section>
          <p className="mb-3">Choose Date</p>
          <div className="flex items-center gap-3 bg-[#EFF0F6] rounded-md p-[19px] w-[284px]">
            <div>
              <img
                src="/calendar.svg"
                alt="calender"
                className="w-[18px] h-[18px]"
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
          <div className="flex items-center gap-3 bg-[#EFF0F6] rounded-md p-[19px] w-[284px]">
            <div>
              <img
                src="/time.png"
                alt="calender"
                className="w-[18px] h-[18px]"
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
          <div className="flex items-center gap-3 bg-[#EFF0F6] rounded-md p-[19px] w-[284px]">
            <div>
              <img
                src="/location.png"
                alt="calender"
                className="w-[18px] h-[18px]"
              />
            </div>
            <select name="date" id="date" className="w-full outline-0">
              <option value="" className="text-md">
                Karawang
              </option>
            </select>
          </div>
        </section>
        <section className=" flex items-end">
          <button className="bg-[#1D4ED8] w-[188px] p-[19px] rounded-md text-white">
            Filter
          </button>
        </section>
      </article>
      <article></article>
      <div className="flex gap-[34px]">
        <p>Choose Cinema</p>
        <p className="text-[#8692A6]">39 Result</p>
      </div>
      <div className="flex justify-between w-full">
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
              className={`w-[264px] h-[157px] rounded-2xl border-2 flex items-center justify-center transition-all duration-200 ${
                selected === item.id
                  ? "border-blue-500 shadow-lg bg-blue-600"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div
                className={`${
                  item.label
                } mask-no-repeat mask-center w-full h-full ${
                  selected === item.id ? "bg-white" : item.color
                }`}
              ></div>
            </div>
          </label>
        ))}
      </div>
      <section className="flex flex-col items-center gap-[52px]">
        <div className="flex justify-center gap-2">
          <button className="border border-[#1D4ED8] rounded-md p-2 px-4 text-white bg-[#1D4ED8]">
            1
          </button>
          <button className="border border-[#DEDEDE] rounded-md p-2 px-4">
            2
          </button>
          <button className="border border-[#DEDEDE] rounded-md p-2 px-4">
            3
          </button>
          <button className="border border-[#DEDEDE] rounded-md p-2 px-4">
            4
          </button>
        </div>
        <Link to={`/order/${id}`}>
          <button className="bg-[#1D4ED8] w-[188px] p-[19px] rounded-md text-white">
            Book Now
          </button>
        </Link>
      </section>
    </div>
  );
}
