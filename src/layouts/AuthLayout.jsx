import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

export default function AuthLayout() {
  const auth = useSelector((state) => state.authentication);
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center">
        <div className='fixed bg-[url(/MaskGroup.png)] bg-cover bg-center h-screen w-full'></div>
        <div className="fixed inset-0 bg-black/60"></div>
        {auth.fetchStatus.login.isLoading && (
          <>
            <div className="absolute inset-0 z-100 flex h-[1024px] w-full items-center justify-center backdrop-blur-sm transition-all duration-500 ease-in-out">
              <div className="loader"></div>
            </div>
          </>
        )}
        <div className="relative z-10 mt-18 flex w-full max-w-[400px] flex-col items-center">
          {' '}
          <img
            src="/tickitzLogo.png"
            alt=""
            className="mb-6 w-36 sm:w-44 md:w-52 lg:w-60"
          />
          <Outlet />
        </div>
      </main>
    </>
  );
}
