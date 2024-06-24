import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/redux";
import { loginAsync } from "@/redux/async/authAsync";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPass, setShowPass] = useState<boolean>(true);
  const [dataLogin, setDataLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAsync(dataLogin));
    alert("Berhasil Login!!!");
    navigate("/dashboard");
  };

  return (
    <>
      <div className="h-screen justify-center flex flex-col">
        <div className="flex justify-center">
          <img src="./src/assets/buss1.png" width={250} alt="" />
        </div>
        <b className="text-center text-4xl bangers tracking-wider">Login</b>
        <form action="" onSubmit={handleLogin}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              onChange={(e) =>
                setDataLogin({ ...dataLogin, email: e.target.value })
              }
            />
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type={showPass ? "password" : "text"}
              onChange={(e) =>
                setDataLogin({ ...dataLogin, password: e.target.value })
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
            Login
          </Button>
        </form>
        <div className="flex justify-between">
          <span>Belum memiliki akun? </span>
          <b
            className="text-first cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </b>
        </div>
      </div>
    </>
  );
};

export default Login;
