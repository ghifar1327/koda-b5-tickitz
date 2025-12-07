import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <>
    <header className="px-6 md:px-[180px] py-[26px]">
          <nav className="flex justify-between items-center">
            <div>
              <img src="/Tickitz 1.png" alt="" className='w-[93px] h-[37px] md:w-[130px] md:h-[51px]' />
            </div>
            <div className="hidden md:flex gap-[60px]" >
              <p>Home</p>
              <p>Movie</p>
              <p>Buy Ticket</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="border border-blue-500 px-4 py-[5px] text-blue-500 rounded-md"><Link to="Auth">Sign In</Link></button>
              <button className="bg-blue-500 text-white border-blue-500 px-4 py-[5px] rounded-md">Sign Up</button>
            </div>
            <img src="/hamburger-right.png" alt="" className='w-6 h-6 md:hidden '/>
          </nav>
        </header>
        <hr className="" />
    </>
  )
}
