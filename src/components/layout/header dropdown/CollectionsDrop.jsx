import React, { useState } from "react";
import "../header.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CollectionsDrop = () => {

  const [watches, setWatches] = useState(false)
  const [brands, setBrands] = useState(false)
  const [collections, setCollections] = useState(false)


  const shop = ["Watches", "Bands", "Cufflinks"];

  const watchShop = ["Brands", "Collection's"];

  const watchCollections = {
    type: "Collection's",
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
  };

  const watchBrands = {
    type: "Brands",
    f1: "Rolex",
    link1: "/watches/rolex",
    f2: "Patek Philippe",
    link2: "/watches/patek-philippe",
    f3: "Audemars Piguet",
    link3: "/watches/audemars-piguet",
    f4: "H. MOSER & CIE.",
    link4: "/watches/h-moser-&-cie",
    f5: "A. LANGE & SÖHNE",
    link5: "/watches/a-lange-&-söhne",
    f6: "DE BETHUNE",
    link6: "/watches/de-bethune",
  };

  // console.log(watchBrands.link4.toLowerCase())

  // {
  //   type: "Bands",
  //   f1: "Leather",
  //   link1: "/bands/leather",
  //   f2: "Rubber",
  //   link2: "/bands/rubber",
  //   f3: "Metal",
  //   link3: "/bands/metal",
  //   f4: "Perlon",
  //   link4: "/bands/perlon",
  //   f5: "Suede",
  //   link5: "/bands/suede",
  //   f6: "All Bands",
  //   link6: "/bands",
  // },
  // {
  //   type: "Cufflinks",
  //   f1: "Gear",
  //   link1: "/cufflinks/gear",
  //   f2: "Compass",
  //   link2: "/cufflinks/compass",
  //   f3: "Geneva",
  //   link3: "/cufflinks/geneva",
  //   f4: "Diver's",
  //   link4: "/cufflinks/divers",
  //   f5: "Watch Dial",
  //   link5: "/cufflinks/watch-dial",
  //   f6: "All Cufflinks",
  //   link6: "/cufflinks",
  // },

  return (
    <div className="fixed z-50 py-4 bg-white w-full h-[60%]">
      <div className="mx-20 grid grid-cols-4 h-full">
        <div className="grid grid-flow-row h-[60%] border-r border-black">
          {shop.map((item, i) => (
            <Link
            onMouseOver={() => {item === "Watches" && setWatches(true)}}
              className="pl-6 hover:bg-gray-200 flex items-center"
              to={item}
            >
              {" "}
              {item}
              <RiArrowRightSLine className="mt-1" />
            </Link>
          ))}
        </div>
        {/* //////////////////////////////////// */}
        {watches && <div className="grid grid-flow-row h-[40%] border-r border-black">
          {watchShop.map((item) => (
            <Link
              className="pl-6 hover:bg-gray-200 flex items-center"
              to={item}
            >
              {" "}
              {item}
              <RiArrowRightSLine className="mt-1" />
            </Link>
          ))}
        </div>}
        {/* //////////////////////////////////// */}
        {brands && <div className="grid grid-flow-row h-[100%] border-r border-black">
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchBrands.link1}
          >
            {" "}
            {watchBrands.f1}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchBrands.link2}
          >
            {" "}
            {watchBrands.f2}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchBrands.link3}
          >
            {" "}
            {watchBrands.f3}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchBrands.link4}
          >
            {" "}
            {watchBrands.f4}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchBrands.link5}
          >
            {" "}
            {watchBrands.f5}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchBrands.link6}
          >
            {" "}
            {watchBrands.f6}
            <RiArrowRightSLine className="mt-1" />
          </Link>
        </div>}
        {/* //////////////////////////////////// */}
        {collections && <div className="grid grid-flow-row h-[100%] border-r border-black">
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchCollections.link1}
          >
            {" "}
            {watchCollections.f1}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchCollections.link2}
          >
            {" "}
            {watchCollections.f2}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchCollections.link3}
          >
            {" "}
            {watchCollections.f3}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchCollections.link4}
          >
            {" "}
            {watchCollections.f4}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchCollections.link5}
          >
            {" "}
            {watchCollections.f5}
            <RiArrowRightSLine className="mt-1" />
          </Link>
          <Link
            className="pl-6 hover:bg-gray-200 flex items-center"
            to={watchCollections.link6}
          >
            {" "}
            {watchCollections.f6}
            <RiArrowRightSLine className="mt-1" />
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default CollectionsDrop;
