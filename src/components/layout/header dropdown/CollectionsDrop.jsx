import React from "react";
import "../header.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CollectionsDrop = () => {
  const shopObj = [
    {
      type: "Watches",
      f1: "Skeleton",
      link1: "/watches/skeleton",
      f2: "Tourbillons",
      link2: "/watches/tourbillons",
      f3: "Chronographs",
      link3: "/watches/chronographs",
      f4: "Moon-Phase Watches",
      link4: "/watches/moon-phase",
      f5: "Automatic Watches",
      link5: "/watches/automatic",
      f6: "All Watches",
      link6: "/watches",
    },
    {
      type: "Bands",
      f1: "Leather",
      link1: "/bands/leather",
      f2: "Rubber",
      link2: "/bands/rubber",
      f3: "Metal",
      link3: "/bands/metal",
      f4: "Perlon",
      link4: "/bands/perlon",
      f5: "Suede",
      link5: "/bands/suede",
      f6: "All Bands",
      link6: "/bands",
    },
    {
      type: "Cufflinks",
      f1: "Gear",
      link1: "/cufflinks/gear",
      f2: "Compass",
      link2: "/cufflinks/compass",
      f3: "Geneva",
      link3: "/cufflinks/geneva",
      f4: "Diver's",
      link4: "/cufflinks/divers",
      f5: "Watch Dial",
      link5: "/cufflinks/watch-dial",
      f6: "All Cufflinks",
      link6: "/cufflinks",
    },
  ];

  return (
    <div className="fixed z-50 py-4 bg-white w-full h-[60%]">
      <div className="mx-20 grid grid-cols-4 h-full">
        {shopObj.map((item, i) => (
          <div key={i}
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
              {" "}
              {item.f1}
            </Link>
            <Link
              className="pl-6 hover:bg-gray-200 flex items-center"
              to={item.link2}
            >
              {" "}
              {item.f2}
            </Link>
            <Link
              className="pl-6 hover:bg-gray-200 flex items-center"
              to={item.link3}
            >
              {" "}
              {item.f3}
            </Link>
            <Link
              className="pl-6 hover:bg-gray-200 flex items-center"
              to={item.link4}
            >
              {item.f4}
            </Link>
            <Link
              className="pl-6 hover:bg-gray-200 flex items-center"
              to={item.link5}
            >
              {item.f5}
            </Link>
            <Link
              className="pl-6 hover:bg-gray-200 flex items-center text-yellow-600 text-[14px]"
              to={item.link6}
            >
              {item.f6}
              <span className="mt-[5px]">
                <RiArrowRightSLine />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsDrop;