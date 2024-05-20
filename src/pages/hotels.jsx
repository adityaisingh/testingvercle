import React from "react";
import Hotel from "./Compontent/hotel";
import Header from "./Compontent/Header";
import Hotel2 from "./Compontent/hotel2";
import Hotel3 from "./Compontent/hotel3";
import Hotel4 from "./Compontent/hotel4";

const Hotels = () => {
  return (
    <>
      <Header />
      <div className="m-5">
        <Hotel4 />
        <Hotel2 />
        <Hotel3 />
        <Hotel />
      </div>
    </>
  );
};

export default Hotels;
