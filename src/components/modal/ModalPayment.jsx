import React from 'react';
import { Link, useParams } from 'react-router';

export default function ModalPayment({ toggle }) {
  const { id } = useParams();
  return (
    <>
      <div
        className={`${toggle ? 'hidden' : 'flex'} fixed top-0 z-1 h-screen w-full items-center justify-center bg-black/50`}
      >
        <section className="flex w-[573px] flex-col gap-8 rounded-lg bg-white p-6 pb-14">
          <h1 className="text-center text-[24px] font-bold">Payment Info</h1>
          <div className="flex items-center justify-between">
            <p className="text-[#8692A6]">No. Rekening Vitual :</p>
            <div className="flex items-center gap-5">
              <p className="font-bold">12321328913829724</p>
              <button className="border-primary text-primary flex h-12 w-[72px] items-center justify-center rounded-md border">
                Copy
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#8692A6]">Total payment</p>
            <p className="text-primary font-bold">$30</p>
          </div>
          <div className="text-[#8692A6]">
            <p>
              Pay this payment bill before it is due, on June 23, 2023. If the
              bill has not been paid by the specified time, it will be forfeited
            </p>
          </div>
          <div>
            <Link to={`/result/${id}`}>
              <button className="bg-primary flex h-[54px] w-full items-center justify-center rounded-md font-bold text-white">
                Check Payment
              </button>
            </Link>
            <div className="mt- flex items-center justify-center">
              <button className="text-primary h-[54px] font-bold">
                pay Later
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
