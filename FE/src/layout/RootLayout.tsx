// import { useAppSelector } from "@/redux";
// import { Navigate, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  // const isLogin = useAppSelector(
  //   (state: { auth: { isLogin: boolean } }) => state.auth.isLogin
  // );

  //   const isLogin = localStorage.getItem("token");
  // if (!isLogin) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <>
      <div className="max-w-[500px] bg-gray-100 px-20">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
