import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { logoutThunk } from '../redux/slices/authForm.slice';

export default function Header() {
  const dispatch = useDispatch()
    const auth = useSelector(
    (state) => state.authentication
  );
  console.log(auth.user)
  function handleLogout(){
    dispatch(logoutThunk())
  }
  return (
    <>
    <header className="px-6 md:px-[180px] py-[26px]">
          <nav className="flex justify-between items-center">
            <div>
              <img src="/Tickitz 1.png" alt="" className='w-[93px] h-[37px] md:w-[130px] md:h-[51px]' />
            </div>
            <div className="hidden md:flex gap-[60px]" >
              <p><Link to={"/"}>Home</Link></p>
              <p><Link to={'movie'}>Movie</Link></p>
              <p>Buy Ticket</p>
            </div>
            {auth.user ? 
              (<button onClick={handleLogout} className='text-red-500'>logout</button>):
            (<div className="hidden md:flex gap-4">
              <button className="border border-blue-500 px-4 py-[5px] text-blue-500 rounded-md"><Link to="login">Sign In</Link></button>
              <button className="bg-blue-500 text-white border-blue-500 px-4 py-[5px] rounded-md"><Link to="register">Sign Up</Link></button>
            </div>)
            }
            <img src="/hamburger-right.png" alt="" className='w-6 h-6 md:hidden '/>
          </nav>
        </header>
        <hr className="" />
    </>
  )
}
