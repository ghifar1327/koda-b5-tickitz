import React from 'react';

export default function FilterMovie() {
  return (
    <form className="mt-[72px] flex gap-2.5 px-[180px]">
      <label htmlFor="">
        <p className="mb-3">Cari Event</p>
        <div className="flex w-[340px] items-center rounded-sm border border-[#DEDEDE] p-[18px]">
          <img src="Search.png" alt="" className="h-6 w-6" />
          <input type="text" className="w-full outline-none" />
        </div>
      </label>
      <label htmlFor="">
        <p className="mb-6">Filter</p>
        <div className="flex gap-3">
          <label className="flex cursor-pointer items-center select-none">
            <input
              type="checkbox"
              name="Thiler"
              id="Thiler"
              className="peer hidden"
            />
            <div className="flex h-10 w-24 items-center justify-center rounded-md transition peer-checked:bg-primary peer-checked:text-white">
              Thriller
            </div>
          </label>
          <label className="flex cursor-pointer items-center select-none">
            <input
              type="checkbox"
              name="horor"
              id="horor"
              className="peer hidden"
            />
            <div className="flex h-10 w-24 items-center justify-center rounded-md transition peer-checked:bg-primary peer-checked:text-white">
              Horror
            </div>
          </label>
          <label className="flex cursor-pointer items-center select-none">
            <input
              type="checkbox"
              name="romantic"
              id="romantic"
              className="peer hidden"
            />
            <div className="flex h-10 w-24 items-center justify-center rounded-md transition peer-checked:bg-primary peer-checked:text-white">
              Romantic
            </div>
          </label>
          <label className="flex cursor-pointer items-center select-none">
            <input
              type="checkbox"
              name="adventure"
              id="adventure"
              className="peer hidden"
            />
            <div className="flex h-10 w-24 items-center justify-center rounded-md transition peer-checked:bg-primary peer-checked:text-white">
              Adventure
            </div>
          </label>
          <label className="flex cursor-pointer items-center select-none">
            <input
              type="checkbox"
              name="sci-fi"
              id="sci-fi"
              className="peer hidden"
            />
            <div className="flex h-10 w-24 items-center justify-center rounded-md transition peer-checked:bg-primary peer-checked:text-white">
              Sci-Fi
            </div>
          </label>
        </div>
      </label>
    </form>
  );
}
