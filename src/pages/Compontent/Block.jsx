import React from "react";
import Image from "next/image";

const Block = ({ title, para }) => {
  return (
    <div className=" w-15 h-15 flex items-center justify-center border-r-2 border-gray-300 pt-3 py-3 ">
      <Image
        src={"/w.png"}
        width={100}
        height={100}
        alt="log"
        className="h-9 w-9 "
      />
      <div className="m-2">
        <h1 className="font-bold text-sm ">{title}</h1>
        <p className="text-gray-400 text-sm line-clamp-2">{para}</p>
      </div>
    </div>
  );
};

export default Block;
