import React from "react";

export default function FilterMovie() {
  return (
    <form className="px-[180px] flex gap-2.5 mt-[72px]">
      <label htmlFor="">
        <p className="mb-3">Cari Event</p>
        <div className="flex items-center border border-[#DEDEDE] rounded-sm p-[18px] w-[340px]">
        <img src="Search.png" alt="" className="w-6 h-6"/>
        <input type="text" className="outline-none w-full"/>
        </div>
      </label>
      <label htmlFor="">
        <p className="mb-6">Filter</p>
        <div className="flex gap-3">
          <label className="flex items-center cursor-pointer select-none">
            <input type="checkbox" name="Thiler" id="Thiler" className="hidden peer"/>
            <div className="w-24 h-10 flex items-center justify-center rounded-md peer-checked:bg-[#1D4ED8] peer-checked:text-white transition">
              Thriller
            </div>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input type="checkbox" name="horor" id="horor" className="hidden peer"/>
            <div className="w-24 h-10 flex items-center justify-center rounded-md peer-checked:bg-[#1D4ED8] peer-checked:text-white transition">
              Horror
            </div>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input type="checkbox" name="romantic" id="romantic" className="hidden peer"/>
            <div className="w-24 h-10 flex items-center justify-center rounded-md peer-checked:bg-[#1D4ED8] peer-checked:text-white transition">
              Romantic
            </div>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input type="checkbox" name="adventure" id="adventure" className="hidden peer"/>
            <div className="w-24 h-10 flex items-center justify-center rounded-md peer-checked:bg-[#1D4ED8] peer-checked:text-white transition">
              Adventure
            </div>
          </label>
          <label className="flex items-center cursor-pointer select-none">
            <input type="checkbox" name="sci-fi" id="sci-fi" className="hidden peer"/>
            <div className="w-24 h-10 flex items-center justify-center rounded-md peer-checked:bg-[#1D4ED8] peer-checked:text-white transition">
              Sci-Fi
            </div>
          </label>
        </div>
      </label>
    </form>
  );
}
