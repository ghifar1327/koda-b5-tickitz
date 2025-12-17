import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { logoutThunk } from '../redux/slices/authForm.slice';

export default function Header() {
  const [toogleHamburger, setToogleHamburger] = useState(true);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authentication);
  // console.log(auth.user)
  function handleLogout() {
    dispatch(logoutThunk());
  }

  function handleToogle() {
    setToogleHamburger((preveToogel) => !preveToogel);
  }
  return (
    <>
      <header className="px-6 py-[26px] md:px-[180px]">
        <nav className="flex items-center justify-between">
          <div className="bg-primary h-10 w-80 mask-[url(/Tickitz.svg)] mask-no-repeat">
            {/* <img
              src="/Tickitz 1.png"
              alt=""
              className="h-[37px] w-[93px] md:h-[51px] md:w-[130px]"
            /> */}
          </div>
          <div className="hidden gap-[60px] md:flex">
            <p>
              <Link to={'/'}>Home</Link>
            </p>
            <p>
              <Link to={'movie'}>Movie</Link>
            </p>
            <p>Buy Ticket</p>
          </div>
          {auth.user ? (
            <button
              onClick={handleLogout}
              className="hidden text-red-500 md:flex"
            >
              logout
            </button>
          ) : (
            <div className="hidden gap-4 md:flex">
              <button className="border-primary text-primary rounded-md border px-4 py-[5px]">
                <Link to="login">Sign In</Link>
              </button>
              <button className="border-primary bg-primary rounded-md px-4 py-[5px] text-white">
                <Link to="register">Sign Up</Link>
              </button>
            </div>
          )}
          <button className="flex md:hidden" onClick={handleToogle}>
            <img src="/hamburger-right.png" alt="" className="h-6 w-6" />
          </button>
        </nav>
      </header>
      <div className="h-px w-full bg-gray-300"></div>
      <div
        className={`${
          toogleHamburger ? 'hidden' : 'flex'
        } bg-black/40 fixed top-0  z-50 h-screen w-full flex-col`}
      >
        <div className='bg-primary h-screen w-[75%] fixed top-0 right-0'>
          <div className="flex w-full justify-end px-6 py-[30px]">
            <button onClick={handleToogle}>
              <img src="/close-x.svg" alt="" className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col items-end gap-3 px-[30px] text-3xl text-white">
            <li>Home</li>
            <li>Movies</li>
            <li>Buy Movie</li>
          </ul>
          <section className="absolute bottom-10 w-full">
            {auth.user ? (
              <div className="flex w-full justify-end px-7">
                <button
                  onClick={handleLogout}
                  className="rounded-md border border-white px-6 py-[5px] text-white"
                >
                  logout
                </button>
              </div>
            ) : (
              <div className="flex justify-evenly gap-4">
                <button className="rounded-md border border-white px-6 py-[5px] text-white">
                  <Link to="login">Sign In</Link>
                </button>
                <button className="rounded-md border border-white px-7 py-[5px] text-white">
                  <Link to="register">Sign Up</Link>
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
