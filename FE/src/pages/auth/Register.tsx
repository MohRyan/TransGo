import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { API } from "@/lib/api";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IRegist {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(true);
  const [dataRegist, setDataRegist] = useState<IRegist>({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await API.post("/auth/register", dataRegist);
    alert("Berhasil Register!!!");
    navigate("/login");
    return res;
  };

  console.log("🚀 ~ Register ~ dataRegist:", dataRegist);
  return (
    <>
      <div className="h-screen justify-center flex flex-col">
        <div className="flex justify-center">
          <img src="./src/assets/bus-stop.png" width={150} alt="" />
        </div>
        <b className="text-center text-4xl bangers tracking-wider">Register</b>
        <form action="" onSubmit={handleRegister}>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullname">Fullname</label>
            <Input
              id="fullname"
              required
              onChange={(e) =>
                setDataRegist({ ...dataRegist, fullname: e.target.value })
              }
            />
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              required
              onChange={(e) =>
                setDataRegist({ ...dataRegist, username: e.target.value })
              }
            />
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              required
              onChange={(e) =>
                setDataRegist({ ...dataRegist, email: e.target.value })
              }
            />
            <label htmlFor="password">Password</label>
            <Input
              required
              id="password"
              type={showPass ? "password" : "text"}
              onChange={(e) =>
                setDataRegist({ ...dataRegist, password: e.target.value })
              }
            />
            {showPass ? (
              <p onClick={() => setShowPass(false)} className="cursor-pointer">
                showPassword?
              </p>
            ) : (
              <p onClick={() => setShowPass(true)} className="cursor-pointer">
                hidePassword?
              </p>
            )}
          </div>
          <Button type="submit" className="flex w-full mt-5">
            Register
          </Button>
        </form>
        <div className="flex justify-between">
          <span>Sudah memiliki akun? </span>
          <b
            className="text-first cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </b>
        </div>
      </div>
    </>
  );
};

export default Register;
