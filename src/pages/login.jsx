"use client ";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handlesignup = async () => {
    const res = await axios.post("/api/hello", {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token);
      alert(res.data.msg);
      router.push("/");
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };
  const handlelogin = async () => {
    const res = await axios.post("/api/hello", {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token);
      alert(res.data.msg);
      router.push("/");
    }
  };

  return (
    <div>
      <Head>
        <title>
          OYO: India's Best Online Hotel Booking Site For Sanitized Stay.
        </title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover">
        <div className="absolute w-full top-10 px-20 flex items-center">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl text-white">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center w-5/12 ">
          <div>
            <p className="font-bold text-5xl text-justify pl-10 text-white">
              There's a smarter way to OYO around
            </p>
            <p className="text-2xl mt-8 pl-10 text-white">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
        </div>
        <div className=" w-100 h-100  border border-red-500 ml-10  bg-white">
          <p className="h-10 font-bold text-white w-full flex items-center px-10 bg-red-500 ">
            Sign up & Get ₹500 OYO Money
          </p>
          <div className="px-7">
            <p className="mt-3 text-3xl text-black text-bold">Login/Signup</p>
            <p className="mt-5 text-bold text-2xl">
              Please Enter Your Phone Number To Continue
            </p>
            <div className="">
              {login ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="mt-3 w-80 border-2 p-2 rounded text-l text-bold  border-gray-500 flex items-center"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter Your Email"
                className="mt-3 w-80 border-2 p-2 rounded text-l text-bold  border-gray-500 flex items-center"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="mt-3 w-80 border-2 rounded text-l text-bold p-2 border-gray-500 flex items-center"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="mt-3 w-60 h-10 border-2 rounded border-gray-500 text-white bg-slate-500 hover:cursor-pointer hover:bg-red-500"
                onClick={login ? handlelogin : handlesignup}>
                {login ? "login" : "Sign Up"}
              </button>
            </div>
            <div className="mt-3 hover:cursor-pointer">
              <span>
                {login ? "Don't have an account ?" : "Already have account?"}
              </span>
              <span
                className="border-b px-2 border-black text-red-600"
                onClick={handleToggle}>
                {login ? "Sign Up" : "login"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
