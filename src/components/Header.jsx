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
  // const notify = () => {;};

  return (
    <>
      <header className="px-6 py-[26px] md:px-[180px]">
        <nav className="flex items-center justify-between">
          <div className="bg-primary h-10 w-40 mask-[url(/Tickitz.svg)] mask-no-repeat"></div>
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
              className="hidden md:flex rounded-md border border-red-500 bg-red-600 px-4 py-[5px] text-white"
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
        } fixed top-0 z-50 h-screen w-full flex-col bg-black/40`}
      >
        <div className="bg-primary fixed top-0 right-0 h-screen w-[75%]">
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
              <>
                <div className="flex w-full justify-end px-7">
                  <button
                    onClick={handleLogout}
                    className="rounded-md border border-white px-6 py-[5px] text-white"
                  >
                    logout
                  </button>
                </div>
              </>
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
