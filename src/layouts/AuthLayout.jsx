import { useSelector } from "react-redux";
import { Outlet } from "react-router";

export default function AuthLayout() {
  const auth = useSelector((state) => state.authentication);
  return (
    <>
      <main className="relative flex flex-col items-center bg-[url(/MaskGroup.png)] bg-cover bg-center h-[1024px] w-full">
        <div className="absolute inset-0 bg-black/60"></div>
        {auth.fetchStatus.login.isLoading && (
        <>
          <div className='absolute inset-0 transition-all duration-500 ease-in-out z-100 w-full h-[1024px] backdrop-blur-sm flex justify-center items-center'>
            <div className="loader"></div>
          </div>
        </>
      )}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[400px] mt-18">
          {" "}
          <img src="/tickitzLogo.png" alt=""className="w-36 sm:w-44 md:w-52 lg:w-60 mb-6"/>
          <Outlet/>
        </div>
      </main>
    </>
  );
}
