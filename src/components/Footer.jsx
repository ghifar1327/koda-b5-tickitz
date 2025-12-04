import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 pt-16 md:px-[180px] md:pt-[109px] pb-[47.7px]">
      <article className="flex flex-col gap-[50px] md:flex-row md:justify-between mb-[47.7px]">
        <div>
          <img src="/Tickitz 1.png" alt="" className="mb-[12px]" />
          <p className="text-[#6E7191] text-[14px]">
            Stop waiting in line. Buy tickets
          </p>
          <p className="text-[#6E7191] text-[14px]">
            conveniently, watch movies quietly.
          </p>
        </div>
        <div>
          <p className="text-[16px] font-bold mb-4">Explore</p>
          <div>
            <p className="text-[#6E7191] text-[14px]">Cinemas</p>
            <p className="text-[#6E7191] text-[14px]">Movies List</p>
            <p className="text-[#6E7191] text-[14px]">My Ticket</p>
            <p className="text-[#6E7191] text-[14px]">Notification</p>
          </div>
        </div>
        <div className="text-[16px] font-bold">
          <p className=" mb-4 ">Our Sponsor</p>
          <div className="flex justify-between items-center md:flex-col md:items-start md:gap-[23.7px]">
            <img
              src="/ebv.id 2.png"
              alt=""
              className="w-[81px] h-[30px] md:w-[122px] md:h-[45.5px]"
            />
            <img
              src="/CineOne21 2.png"
              alt=""
              className="w-[106px] h-[17px] md:w-[174px] md:h-[27.7px]"
            />
            <img
              src="/hiflix 2.png"
              alt=""
              className="w-[76.24px] h-[23.78px] md:w-20 md:h-[25.7px]"
            />
          </div>
        </div>
        <div>
          <p className="text-[16px] font-bold mb-4">Follow Us</p>
          <div className="flex gap-8 md:flex-col">
            <div className="flex gap-4">
              <img src="/facebook.png" alt="" />
              <p className="hidden md:flex">Tickitz Cinema id</p>
            </div>
            <div className="flex gap-4">
              <img src="/instagram.png" alt="" />
              <p className="hidden md:flex">tickitz.id</p>
            </div>
            <div className="flex gap-4">
              <img src="/twitter.png" alt="" />
              <p className="hidden md:flex">tickizt.id</p>
            </div>
            <div className="flex gap-4">
              <img src="/youtube.png" alt="" />
              <p className="hidden md:flex">Tickizt Cinema id</p>
            </div>
          </div>
        </div>
      </article>
      <p className="text-center text-[#4E4B66]">
        © 2020 Tickitz. All Rights Reserved.
      </p>
    </footer>
  );
}
