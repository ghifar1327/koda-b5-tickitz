import React from 'react';

export default function FormSubscribe() {
  return (
    <article className="mx-6 mt-[65px] flex h-[538px] flex-col items-center justify-center gap-12 rounded-[20px] bg-primary text-white md:mx-[180px] md:mt-20 md:h-[318px]">
      <h2 className="text-[42px] md:text-[48px]">Subcribe to our newslatter</h2>
      <div className="flex flex-col gap-3 md:flex-row">
        <button className="h-[60px] w-[264px] rounded-[9px] border-2 border-white px-5 text-[16px] md:w-[230px] md:py-[17px] md:text-start">
          First name
        </button>
        <button className="h-[60px] rounded-[9px] border-2 border-white px-5 py-[17px] text-[16px] md:w-[230px] md:text-start">
          Email address
        </button>
        <button className="h-[60px] rounded-[9px] border-2 border-white bg-white px-5 py-[17px] text-[16px] text-primary md:w-[230px] md:text-start">
          Subscribe now
        </button>
      </div>
    </article>
  );
}
