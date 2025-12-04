import React from 'react'

export default function Header() {
  return (
    <>
    <header className="px-[180px] py-[26px]">
          <nav className="flex justify-between items-center">
            <div>
              <img src="/src/assets/Tickitz 1.png" alt="" />
            </div>
            <div className="flex gap-[60px]">
              <p>Home</p>
              <p>Movie</p>
              <p>Buy Ticket</p>
            </div>
            <div className="flex gap-4">
              <button className="border border-blue-500 px-4 py-[5px] text-blue-500 rounded-md">
                Sign In
              </button>
              <button className="bg-blue-500 text-white border-blue-500 px-4 py-[5px] rounded-md">
                Sign Up
              </button>
            </div>
          </nav>
        </header>
        <hr className="" />
    </>
  )
}
