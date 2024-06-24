import { Button } from "@/components/ui/button";
import { LOGOUT } from "@/redux/slice/authSlice";
import { useAppSelector } from "@/redux";
import { FaSearch } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { ImTicket } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "@/lib/api";
import Slider from "./components/Slider";

export interface IBus {
  bus: string;
  from: string;
  going: string;
  id: string;
  poBusId: string;
  price: number;
  to: string;
  totalTiket: number;
  poBus: { PO: string } | null;
}

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const [dataBus, setDataBus] = useState<IBus[]>([
    {
      bus: "",
      from: "",
      going: "",
      id: "",
      poBusId: "",
      price: 0,
      to: "",
      totalTiket: 0,
      poBus: { PO: "" },
    },
  ]);

  const getAllBus = async () => {
    const res = await API.get("/bus");
    setDataBus(res.data);
  };

  useEffect(() => {
    getAllBus();
  }, []);

  const handleLogout = () => {
    dispatch(LOGOUT());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-3">
        <div className="h-40 bg-first rounded-b-2xl justify-evenly px-5 flex flex-col">
          <div className="flex justify-center">
            <b className="text-3xl bangers text-white tracking-widest">
              TransGo
            </b>
          </div>
          <div className="flex justify-between items-center text-white">
            <div>
              <p>Selamat Datang</p>
              <b className="text-2xl">{user.fullname}</b>
            </div>
            <div>
              <img
                src="./src/assets/bus baru 1.png"
                className="w-20 h-20 rounded-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-xl flex flex-col font-bold">
            <b>Mau Pergi?</b>
            <b>Cari tiketnya yuk</b>
          </div>
          <Button className="tracking-widest">
            <FaSearch className="mr-2" /> Klik untuk cari
          </Button>
        </div>

        <div className="flex justify-around">
          <Button
            className="w-28 h-28 flex flex-col"
            onClick={() => navigate("/tiket")}
          >
            <ImTicket size={35} className="mr-2 text-white" />
            <>Tiket Anda</>
          </Button>

          <Button className="w-28 h-28 flex flex-col">
            <MdOutlineDateRange className="mr-2" size={35} />
            <>Riwayat</>
          </Button>
        </div>

        <Slider dataBus={dataBus} />
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  );
};

export default Home;
