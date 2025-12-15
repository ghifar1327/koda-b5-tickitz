import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logoutThunk } from "../redux/slices/authForm.slice";

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
      <header className="px-6 md:px-[180px] py-[26px]">
        <nav className="flex justify-between items-center">
          <div>
            <img
              src="/Tickitz 1.png"
              alt=""
              className="w-[93px] h-[37px] md:w-[130px] md:h-[51px]"
            />
          </div>
          <div className="hidden md:flex gap-[60px]">
            <p>
              <Link to={"/"}>Home</Link>
            </p>
            <p>
              <Link to={"movie"}>Movie</Link>
            </p>
            <p>Buy Ticket</p>
          </div>
          {auth.user ? (
            <button
              onClick={handleLogout}
              className="text-red-500 hidden md:flex"
            >
              logout
            </button>
          ) : (
            <div className="hidden md:flex gap-4">
              <button className="border border-blue-500 px-4 py-[5px] text-blue-500 rounded-md">
                <Link to="login">Sign In</Link>
              </button>
              <button className="bg-blue-500 text-white border-blue-500 px-4 py-[5px] rounded-md">
                <Link to="register">Sign Up</Link>
              </button>
            </div>
          )}
          <button onClick={handleToogle}>
            <img
              src="/hamburger-right.png"
              alt=""
              className="w-6 h-6 md:hidden "
            />
          </button>
        </nav>
      </header>
      <div className="h-px w-full bg-gray-300"></div>
      <div
        className={`${
          toogleHamburger ? "hidden" : "flex"
        } fixed  flex-col z-50 right-0 top-0 w-[75%] h-screen bg-blue-800 `}
      >
        <div className="w-full flex justify-end px-6 py-[30px]">
          <button onClick={handleToogle}>
            <img src="close-x.svg" alt="" className="w-6 h-6" />
          </button>
        </div>
        <ul className="text-3xl text-white gap-3 flex flex-col items-end px-[30px]">
          <li>Home</li>
          <li>Movies</li>
          <li>Buy Movie</li>
        </ul>
        <section className="w-full absolute bottom-10">
          {auth.user ? (
            <div className="flex justify-end w-full px-7">
              <button
                onClick={handleLogout}
                className="border border-white px-6 py-[5px] text-white rounded-md"
              >
                logout
              </button>
            </div>
          ) : (
            <div className="flex justify-evenly gap-4">
              <button className="border border-white px-6 py-[5px] text-white rounded-md">
                <Link to="login">Sign In</Link>
              </button>
              <button className="bg-blue-500 text-white border-blue-500 px-7 py-[5px] rounded-md">
                <Link to="register">Sign Up</Link>
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
