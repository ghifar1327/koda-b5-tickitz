import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PartialSlideMovie from "../components/PartialSlideMovie";
import FormSubscribe from "../components/FormSubscribe";
import { Link, Outlet } from "react-router";

export default function HomePage() {
  return (
    <>
      <Outlet />
      <main className="mt-[49px] text-center md:text-start  md:mt-10">
        <hero className="gap-[19px] flex flex-col md:flex-row md:justify-between px-6 md:px-[180px]">
          <section className="flex flex-col gap-4 justify-center md:max-w-[568px]">
            <p className="text-[#1D4ED8] text-[25px]">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </p>
            <p className=" text-[40px] font-medium md:text-[48px] ">
              Experience the Magic of Cinema: Book Your Tickets Today
            </p>
            <p className="text-[20px]">
              Sign up and get the ticket with a lot of discount
            </p>
          </section>
          <figure className="grid grid-flow-col grid-rows-5 gap-3">
            <img src="/imgGrid1.png" alt="" className="row-span-2 w-full" />
            <img src="/imgGrid2.png" alt="" className="row-span-3 h-full" />
            <img src="/imgGrid3.png" alt="" className="row-span-3 h-full" />
            <img src="/imgGrid4.png" alt="" className="row-span-2 w-full" />
          </figure>
        </hero>
        <article className="px-6 md:px-[180px]">
          <section className="mt-[70px]">
            <p className="text-[#1D4ED8] font-bold">WHY CHOOSE US</p>
            <div className="max-w-[438px]">
              <p className="text-[32px]">
                Unleashing the Ultimate Movie Experience
              </p>
            </div>
          </section>
          <section className="flex flex-col md:flex-row gap-[33px] mt-[33px]">
            <div className=" flex flex-col gap-[19px] items-center md:items-start">
              <img src="/Group 233.png" alt="" />
              <p>Guaranteed</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam alias velit, ipsum soluta est sit dolorem nulla id
                dolore, impedit mollitia voluptates eaque vel veniam, et eveniet
                iste perferendis ab!
              </p>
            </div>
            <div className="flex flex-col items-center gap-[19px] md:items-start">
              <img src="/Group 233.png" alt="" />
              <p>Affordable</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam alias velit, ipsum soluta est sit dolorem nulla id
                dolore, impedit mollitia voluptates eaque vel veniam, et eveniet
                iste perferendis ab!
              </p>
            </div>
            <div className="flex flex-col items-center gap-[19px] md:items-start">
              <img src="/Group 235.png" alt="" />
              <p>24/7 Customer Support</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam alias velit, ipsum soluta est sit dolorem nulla id
                dolore, impedit mollitia voluptates eaque vel veniam, et eveniet
                iste perferendis ab!
              </p>
            </div>
          </section>
        </article>
        <article className="text-center flex flex-col gep-[14px] mt-[33.5px]">
          <p className="text-[#1D4ED8] text-[18px] font-bold">MOVIES</p>
          <p className="text-[38px] ">
            Exciting Movies That Should Be Watched Today
          </p>
        </article>
        <PartialSlideMovie />
        <div className="hidden md:flex justify-center items-center gap-3 text-[#1D4ED8] text-[18px] mt-[38px]">
          <p>
            <Link to="/ViewAll">View All</Link>
          </p>
          <img src="/arrow-up.png" alt="" />
        </div>
        <p className="mt-[62px] md:px-[180px] text-[#1D4ED8] text-[18px] font-bold">
          UPCOMING MOVIES
        </p>
        <section className="px-6 gap-4 md:px-[180px] hiden md:flex justify-between items-center">
          <div>
            <p className="text-[32px]">Exiting Movie Comming Soon</p>
          </div>
          <div className="hidden md:flex gap-[9px]">
            <div className="w-[69px] h-[69px] bg-[#A0A3BD] rounded-[50%] flex justify-center items-center">
              <img src="/arrow-white.png" alt="" className="w-6 h-6" />
            </div>
            <div className="w-[69px] h-[69px]  rounded-[50%] bg-[#1D4ED8] flex justify-center items-center">
              <img
                src="/arrow-white.png"
                alt=""
                className="w-6 h-6 rotate-180"
              />
            </div>
          </div>
        </section>
        <PartialSlideMovie />
        <FormSubscribe />
      </main>
      <Outlet />
    </>
  );
}
