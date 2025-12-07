import React from "react";

export default function FormSubscribe() {
  return (
    <article className="h-[538px] mx-6 mt-[65px] text-white bg-blue-600 rounded-[20px] flex flex-col justify-center items-center gap-12 md:h-[318px] md:mx-[180px] md:mt-20">
      <h2 className="text-[42px] md:text-[48px]">Subcribe to our newslatter</h2>
      <div className="flex flex-col md:flex-row gap-3">
        <button className="w-[264px] h-[60px] text-[16px] border-2 border-white rounded-[9px] px-5 md:py-[17px] md:w-[230px] md:text-start">
          First name
        </button>
        <button className="h-[60px] text-[16px] border-2 border-white rounded-[9px] px-5 py-[17px] md:w-[230px] md:text-start">
          Email address
        </button>
        <button className="h-[60px] bg-white text-blue-500 text-[16px] border-2 border-white rounded-[9px] px-5 py-[17px] md:w-[230px] md:text-start">
          Subscribe now
        </button>
      </div>
    </article>
  );
}
