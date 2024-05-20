import React from "react";

const Header2 = () => {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Delhi",
    },
    {
      name: "Lucknow",
    },
    {
      name: "Noida",
    },
    {
      name: "Mumbai",
    },
  ];
  return (
    <div>
      <div className=" px-5 py-2.5 flex justify-between   border-gray-500 bg-gray-200">
        {List.map((e) => {
          return <span key={e.name}>{e.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Header2;
