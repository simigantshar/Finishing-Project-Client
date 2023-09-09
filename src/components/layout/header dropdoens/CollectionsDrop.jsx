import React from "react";
import "../header.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CollectionsDrop = () => {
  const shopObj = [
    {
      type: "Watches",
      f1: "Vintage",
      link1: "/watches",
      f2: "Luxury",
      link2: "/watches",
      f3: "Curv",
      link3: "/watches",
      f4: "Heritage",
      link4: "/watches",
      f5: "Tourbillons",
      link5: "/watches/tourbillons",
      f6: "All Watches",
      link6: "/watches",
    },
    {
      type: "Bands",
      f1: "Vintage",
      link1: "/bands",
      f2: "Luxury",
      link2: "/bands",
      f3: "Curv",
      link3: "/bands",
      f4: "Heritage",
      link4: "/bands",
      f5: "Signature",
      link5: "/bands",
      f6: "All Bands",
      link6: "/bands",
    },
    {
      type: "Cufflinks",
      f1: "Vintage",
      link1: "/cufflinks",
      f2: "Luxury",
      link2: "/cufflinks",
      f3: "Curv",
      link3: "/cufflinks",
      f4: "Heritage",
      link4: "/cufflinks",
      f5: "Signature",
      link5: "/cufflinks",
      f6: "All Cufflinks",
      link6: "/cufflinks",
    },
  ];

  return (
    <div className="fixed py-4 bg-white w-full h-[60%]">
      <div className="mx-20 grid grid-cols-4 h-full">
        {shopObj.map((item, i) => (
          <div className={`${i !== 2 && "border-r"} grid grid-flow-row border-black`}>
            <div className="text-xl font-semibold pl-6 flex items-center">{item.type}</div>
            <div className="pl-6 hover:bg-gray-100 flex items-center">
              <Link to={item.link1}>{item.f1}</Link>
            </div>
            <div className="pl-6 hover:bg-gray-100 flex items-center">
              <Link to={item.link2}>{item.f2}</Link>
            </div>
            <div className="pl-6 hover:bg-gray-100 flex items-center">
              <Link to={item.link3}>{item.f3}</Link>
            </div>
            <div className="pl-6 hover:bg-gray-100 flex items-center">
              <Link to={item.link4}>{item.f4}</Link>
            </div>
            <div className="pl-6 hover:bg-gray-100 flex items-center">
              <Link to={item.link5}>{item.f5}</Link>
            </div>
            <div className="text-[14px] text-yellow-600 pl-6 hover:bg-gray-100 flex items-center">
              <Link className="flex" to={item.link6}>
                {item.f6}
                <span className="mt-[5px]">
                  <RiArrowRightSLine />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsDrop;
