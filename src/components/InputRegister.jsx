import React, { useState } from 'react';
import { Link } from 'react-router';
import { useAuthValidation } from '../hooks/useAuthValidation';
import { useUsers } from '../hooks/useUsers';

export default function InputRegister() {
  const [toogle, setToogle] = useState(true);
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // hooks custom
  const [users, setUsers] = useUsers();
  console.log(users);
  const { errors, isValid } = useAuthValidation(form.email, form.password);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    const userData = {
      email: form.email,
      password: form.password,
    };
    setUsers([...users, userData]);
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
  function handleChecked() {
    if (!agree) {
      return setAgree(true);
    }
    setAgree(false);
  }
  console.log(agree);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="z-10 w-full max-w-[420px] rounded-xl bg-white px-6 py-8 shadow-md sm:px-10 sm:py-12 md:px-14 md:py-14"
      >
        <div className="flex flex-col gap-6">
          <section className="flex items-center justify-between text-white">
            <button className="bg-primary h-[47px] w-[47px] rounded-[50%] border-none">
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
            {errors.email && (
              <p className="text-sm text-gray-600">{errors.email}</p>
            )}
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
            {errors.password && (
              <p className="text-sm text-gray-600">{errors.password}</p>
            )}
          </label>
          <div className="flex items-center gap-6">
            <label
              htmlFor="agree"
              className="flex gap-3 text-[14px] text-[#696F79]"
            >
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={agree}
                onChange={handleChecked}
              />
              <p className={`${agree ? 'text-gray-500' : 'text-black'}`}>
                Agree To terms & conditions
              </p>
            </label>
          </div>
          <button
            type="submit"
            disabled={!isValid && agree}
            className={`w-full rounded-md p-3 text-white transition ${isValid && agree ? 'bg-primary' : 'cursor-not-allowed bg-gray-400'}`}
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
