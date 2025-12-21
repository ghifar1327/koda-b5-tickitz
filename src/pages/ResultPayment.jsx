import React from 'react';

export default function ResultPayment() {
  return (
    <main className="flex flex-col md:flex-row">
      <hero className="relative w-full h-screen md:h-auto md:w-[60%] bg-[url('/MaskGroup.png')] bg-cover bg-center">
        <div className="absolute z-1 flex h-full w-full items-center justify-center bg-black/80">
          <section className="flex w-[450px] md:w-[586px] flex-col gap-[22px] text-white">
            <img src="/tickitz-white.png" alt="tickitz" className="w-[276px]" />
            <h1 className="text-[48px] font-bold">Thankyou For Purchasing</h1>
            <p className="text-[26px]">
              Lorem ipsum dolor sit amet consectetur. Quam pretium pretium
              tempor integer sed magna et.
            </p>
            <div className="flex items-center gap-[22px] text-[18px] font-bold">
              <p>Please Download Your Ticket</p>
              <img src="/Arrow-long.png" alt="Arrow" className="h-10 w-10" />
            </div>
          </section>
        </div>
      </hero>
      <article className="flex w-full md:w-[40%] items-center justify-center bg-[#A0A3BD33] py-[93px]">
        <section className="w-[357px]">
          <div className="p-5">
            <section className="flex w-full flex-col gap-10 rounded-lg bg-white px-6 py-8">
              <div className="flex justify-center">
                <img src="/QR.svg" alt="qr_code" />
              </div>
              <div className="relative h-px border border-dashed border-[#DEDEDE]">
                <div className="absolute -top-4 -left-10 h-9 w-9 rounded-full bg-[#ECEDF2]" />
                <div className="absolute -top-4 -right-10 h-9 w-9 rounded-full bg-[#ECEDF2]" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[14px] text-[#AAAAAA]">Movie</p>
                    <p className="text-[16px] font-semibold">Spiderman</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#AAAAAA]">Category</p>
                    <p className="text-[16px] font-semibold">PG-13</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[14px] text-[#AAAAAA]">date</p>
                    <p className="text-[16px] font-semibold">07 Juli</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#AAAAAA]">Time</p>
                    <p className="text-[16px] font-semibold">2:00pm</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[14px] text-[#AAAAAA]">Count</p>
                    <p className="text-[16px] font-semibold">3 pcs</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#AAAAAA]">Seat</p>
                    <p className="text-[16px] font-semibold">C4, C5, C6</p>
                  </div>
                </div>
                <div className="flex justify-between rounded-lg border border-[#DEDEDE] p-2 px-6 text-[16px] font-semibold">
                  <p>Total</p>
                  <p>$30.00</p>
                </div>
              </div>
            </section>
          </div>
          <div>
            <button className="border-primary flex h-[54px] w-full items-center justify-center gap-4 rounded-lg border-2">
              <img src="/download.svg" alt="download" className="h-6 w-6" />
              <p className="text-primary font-semibold">Download</p>
            </button>
          </div>
          <div>
            <button className="bg-primary border-primary mt-5 flex h-[54px] w-full items-center justify-center gap-4 rounded-lg border-2 font-semibold text-white">
              Done
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}
