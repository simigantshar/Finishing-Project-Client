import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminCollectionsDrop = () => {
  const shopObj = [
    {
      type: "Watches",
      f1: "All Watches",
      link1: "/admin/watches",
    },
    {
      type: "Bands",
      f1: "All Straps",
      link1: "/admin/bands",
    },
    {
      type: "Cufflinks",
      f1: "All Cufflinks",
      link1: "/admin/cufflinks",
    },
  ];

  return (
    <div className="fixed z-50 py-4 bg-white w-full border-b-[1.5px] h-[30%]">
      <div className="mx-20 grid grid-cols-5 h-full">
        {shopObj.map((item, i) => (
          <div
            key={i}
            className={`${
              i !== 2 && "border-r"
            } grid grid-flow-row border-black`}
          >
            <div className="text-xl font-semibold pl-6 flex items-center">
              {item.type}
            </div>
            <Link
              className="pl-6 hover:bg-gray-200 flex items-center"
              to={item.link1}
            >
              {item.f1}
              <RiArrowRightSLine className="mt-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCollectionsDrop;
