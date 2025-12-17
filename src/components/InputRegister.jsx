import React, { useState } from 'react';
import { Link } from 'react-router';

export default function InputRegister() {
  const [toogle, setToogle] = useState(true);
  const [login, setLogin] = useState({});
  console.log(login);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: form.email,
      password: form.password,
    };
    setLogin(userData);
    setForm({ email: '', password: '' });
  }
  function hendleChange(e) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }
  function toogleEye() {
    setToogle((prevToogle) => !prevToogle);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="z-10 w-full max-w-[420px] rounded-xl bg-white px-6 py-8 shadow-md sm:px-10 sm:py-12 md:px-14 md:py-14"
      >
        <div className="flex flex-col gap-6">
          <section className="flex items-center justify-between text-white">
            <button className="h-[47px] w-[47px] rounded-[50%] border-none bg-primary">
              1
            </button>
            <div className="h-px w-[20%] bg-[#A0A3BD]"></div>
            <button className="h-[47px] w-[47px] rounded-[50%] border-none bg-[#A0A3BD]">
              2
            </button>
            <div className="h-px w-[20%] bg-[#A0A3BD]"></div>
            <button className="h-[47px] w-[47px] rounded-[50%] border-none bg-[#A0A3BD]">
              3
            </button>
          </section>
          <label className="flex flex-col gap-1">
            <p className="font-medium">Email</p>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={hendleChange}
              className="w-full rounded-md border border-gray-300 p-3 text-base focus:outline-blue-500"
            />
          </label>

          <label className="flex flex-col gap-1">
            <p className="font-medium">Password</p>
            <div className="flex justify-between rounded-md border border-gray-300 focus-within:border-blue-500">
              <input
                type={toogle ? 'password' : 'text'}
                name="password"
                value={form.password}
                onChange={hendleChange}
                className="w-[85%] p-3 text-base outline-none"
              />
              <button
                type="button"
                onClick={toogleEye}
                className="bg-amber-200items-center p-3"
              >
                <img
                  src={toogle ? '/eyebrow.png' : '/eye.png'}
                  alt=""
                  className="w-5"
                />
              </button>
            </div>
          </label>
          <div className="flex items-center gap-6">
            <input type="checkbox" name="agree" id="" />
            <label htmlFor="agree" className="text-[14px] text-[#696F79]">
              I Agree To terms & conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 p-3 text-white transition hover:bg-blue-700"
          >
            Join For Free Now
          </button>
          <p className="text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500">
              Log in
            </Link>
          </p>
          <div className="flex items-center justify-between">
            <div className="h-px w-[35%] bg-[#AAAAAA]"></div>
            <p className="text-[#AAAAAA]">Or</p>
            <div className="h-px w-[35%] bg-[#AAAAAA]"></div>
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
    </>
  );
}
