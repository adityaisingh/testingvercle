"use client";
import React from "react";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Header = () => {
  let auth;
  if (typeof Window !== "underfined") {
    auth = Cookies.get("user");
  }

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");

    router.push("/");
  };
  return (
    <div className="flex justify-between items-center  border-gray-300 h-20 px-9 ">
      <Image src={"/logo.png"} alt="logo" width={150} height={150} />

      <div className="flex ">
        <Block title={"Become a Member"} para={"Additional 10% off on stays"} />

        <Block title={"OYO for Business"} para={"Trusted by 5000 Corp."} />
        <Block
          title={"List your Property"}
          para={"start earning in 30 mins "}
        />
        <Block title={"0124-6201611"} para={"Call us to Book now"} />
      </div>

      <div className="flex items-center  ">
        <Image
          src={"/user.png"}
          alt="user"
          width={100}
          height={100}
          className="h-10 w-10 rounded-full mr-2 "
        />
        {auth ? (
          <h3 className=" font-bold cursor-pointer" onClick={handleLogout}>
            Logout
          </h3>
        ) : (
          <Link href={"/login"} className=" font-bold">
            Login / Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
