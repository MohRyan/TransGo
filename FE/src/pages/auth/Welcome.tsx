import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen gap-5">
        <b className="text-5xl bangers ">
          Trans<span className="text-first">Go</span>
        </b>
        <img src="./src/assets/bus baru 1.png" width={250} alt="" />
        <b className="text-3xl bangers">Selamat Datang</b>
        <p>
          TransGo merupakan aplikasi pemesanan tiket bus di seluruh terminal
          yang ada di Indonesia
        </p>
        <Button className="flex w-full" onClick={() => navigate("/register")}>
          Get Started
        </Button>
      </div>
    </>
  );
};

export default Welcome;
