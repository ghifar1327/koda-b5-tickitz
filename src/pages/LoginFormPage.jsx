import React, { useState } from "react";
import InputLogin from "../components/InputLogin";

export default function InputLoginPage() {
  const [login, setLogin] = useState({});
  console.log(login);

  return (
    <>
      <main className="relative flex flex-col items-center bg-[url(/MaskGroup.png)] bg-cover bg-center h-screen w-full">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-[400px] mt-18">
          <img
            src="/tickitzLogo.png"
            alt=""
            className="w-36 sm:w-44 md:w-52 lg:w-60 mb-6"
          />
          <InputLogin setLogin={setLogin} />
        </div>
      </main>
    </>
  );
}
