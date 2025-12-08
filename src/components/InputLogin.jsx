import React, { useState } from "react";

export default function InputLogin() {
  const [login, setLogin] = useState({});
  console.log(login);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: form.email,
      password: form.password,
    };
    setLogin(userData);
    setForm({ email: "", password: "" });
  }
  function hendleChange(e) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white z-10 rounded-xl shadow-md w-full max-w-[420px] px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14"
    >
      <div className="flex flex-col gap-6 ">
        <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back 🙌</h1>

        <p className="text-gray-500 text-sm sm:text-base">
          Sign in with your data that you entered during your registration
        </p>

        <label className="flex flex-col gap-1">
          <p className="font-medium">Email</p>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={hendleChange}
            className="border border-gray-300 rounded-md w-full p-3 text-base focus:outline-blue-500 "/>
        </label>

        <label className="flex flex-col gap-1">
          <p className="font-medium">Password</p>
          <div className="flex justify-between focus-within:border-blue-500  border border-gray-300 rounded-md ">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={hendleChange}
              className="w-[85%] p-3 text-base outline-none"/>
            <div className="flex justify-between items-center p-3">
              <img src="/eye.png" alt="" className="w-6" />
            </div>
          </div> 
        </label>
        <div className="flex justify-end">
          <button type="button" className="text-blue-500 text-sm">
            Forget your password?
          </button>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 text-white w-full p-3 hover:bg-blue-700 transition"
        >
          Login
        </button>
        <div className="flex justify-between items-center">
          <div className="bg-[#AAAAAA] h-px w-[35%]"></div>
          <p className="text-[#AAAAAA]">Or</p>
          <div className="bg-[#AAAAAA] h-px w-[35%]"></div>
        </div>
        <div className="flex justify-center gap-8">
          <button className="rounded-sm p-2 shadow-md">
            <img src="/google-icon.png" alt="" className="w-[24]" />
          </button>
          <button className="rounded-sm p-2 shadow-md">
            <img src="/facebook-icon.png" alt="" className="w-[24]" />
          </button>
        </div>
      </div>
    </form>
  );
}
