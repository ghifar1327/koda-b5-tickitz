import React from 'react';

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-[47.7px] md:px-[180px] md:pt-[109px]">
      <article className="mb-[47.7px] flex flex-col gap-[50px] md:flex-row md:justify-between">
        <div>
          <div className='mask-[url(/Tickitz.svg)]  mask-no-repeat bg-primary h-10 w-20] mb-[12px]'></div>
          {/* <img src="/Tickitz1.png" alt="" className="mb-[12px]" /> */}
          <p className="text-[14px] text-[#6E7191]">
            Stop waiting in line. Buy tickets
          </p>
          <p className="text-[14px] text-[#6E7191]">
            conveniently, watch movies quietly.
          </p>
        </div>
        <div>
          <p className="mb-4 text-[16px] font-bold">Explore</p>
          <div>
            <p className="text-[14px] text-[#6E7191]">Cinemas</p>
            <p className="text-[14px] text-[#6E7191]">Movies List</p>
            <p className="text-[14px] text-[#6E7191]">My Ticket</p>
            <p className="text-[14px] text-[#6E7191]">Notification</p>
          </div>
        </div>
        <div className="text-[16px] font-bold">
          <p className="mb-4">Our Sponsor</p>
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-[23.7px]">
            <img
              src="/ebv.id 2.png"
              alt=""
              className="h-[30px] w-[81px] md:h-[45.5px] md:w-[122px]"
            />
            <img
              src="/CineOne21 2.png"
              alt=""
              className="h-[17px] md:w-[174px]"
            />
            <img
              src="/hiflix 2.png"
              alt=""
              className="h-[23.78px] md:w-20"
            />
          </div>
        </div>
        <div>
          <p className="mb-4 font-bold">Follow Us</p>
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
