import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../redux/slices/authForm.slice';
import { useNavigate } from 'react-router';

export default function InputLogin() {
  const [toogle, setToogle] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentication);
  console.log(auth.fetchStatus.login.isSuccess);
  useEffect(() => {
    if (auth.user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user]);

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
    dispatch(loginThunk(userData.email));
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
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Welcome Back 🙌
          </h1>

          <p className="text-sm text-gray-500 sm:text-base">
            Sign in with your data that you entered during your registration
          </p>

          <label className="flex flex-col gap-1">
            <p className="font-medium">Email</p>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={hendleChange}
              className="w-full rounded-md border border-gray-300 p-3 text-base focus:outline-primary"
            />
          </label>

          <label className="flex flex-col gap-1">
            <p className="font-medium">Password</p>
            <div className="flex justify-between rounded-md border border-gray-300 focus-within:border-primary">
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
          <div className="flex justify-end">
            <button type="button" className="text-sm text-primary">
              Forget your password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary p-3 text-white transition"
          >
            Login
          </button>
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
