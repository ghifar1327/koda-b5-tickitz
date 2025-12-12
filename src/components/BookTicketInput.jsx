import React, { useState } from "react";

export default function BookTicketInput() {
  const [selected, setSelected] = useState("");

  const options = [
    { id: "ebv1", label: "mask-[url('/ebv.id.svg')]", color: "bg-black" },
    { id: "hiflix", label: "mask-[url('/hiflix.svg')]", color: "bg-red-500" },
    { id: "cineOne21", label:"mask-[url('/cineone.svg')]", color: "bg-blue-500" },
    { id: "ebv2", label: "mask-[url('/ebv.id.svg')]", color: "bg-black" },
  ];

  return (
    <div className="flex items-center justify-center ">
      <div className="flex justify-between md:px-[180px] w-full">
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
                className={`${item.label} mask-no-repeat mask-center w-full h-full ${
                  selected === item.id ? "bg-white" : item.color
                }`}
              ></div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
