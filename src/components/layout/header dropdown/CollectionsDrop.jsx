import React, { useState } from "react";
import "../header.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CollectionsDrop = () => {
  const [watches, setWatches] = useState(false);
  const [brands, setBrands] = useState(false);
  const [collections, setCollections] = useState(false);

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
    f6: "All Brands",
    link6: "/watches/brands",
  };

  const bands = {
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
  };

  const cufflinks = {
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
  };

  return (
    <div className="fixed z-50 py-3 px-10 bg-white w-full border-b border-[#E9C261] h-[60%]">
      <div className="grid grid-cols-4 h-[12%]">
        <div className="col-span-2">
          <h2 className="text-2xl ml-1 font-semibold">{shop[0]}</h2>
        </div>
        <div className="col-span-1 ml-3">
          <h2 className="text-2xl font-semibold">{shop[1]}</h2>
        </div>
        <div className="col-span-1 ml-3">
          <h2 className="text-2xl font-semibold">{shop[2]}</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 h-[88%]">
        <div className="col-span-2 grid grid-cols-2 grid-rows-3 border-r border-black/30">
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-semibold">
              Featured
            </label>
            <Link>
              <label htmlFor="" className="">
                coming soon...
              </label>
            </Link>
          </div>
          <div className="row-start-2 row-span-2 flex flex-col justify-between">
            <label htmlFor="" className="text-lg font-semibold">
              {watchShop[0]}
            </label>
            <Link to={watchBrands.link1}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchBrands.f1}
              </label>
            </Link>
            <Link to={watchBrands.link2}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchBrands.f2}
              </label>
            </Link>
            <Link to={watchBrands.link3}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchBrands.f3}
              </label>
            </Link>
            <Link to={watchBrands.link4}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchBrands.f4}
              </label>
            </Link>
            <Link to={watchBrands.link5}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchBrands.f5}
              </label>
            </Link>
            <Link to={watchBrands.link6}>
              <label
                htmlFor=""
                className="flex items-center hover:text-orange-400 text-sm"
              >
                {watchBrands.f6}
                <RiArrowRightSLine className="mt-[5px]" />
              </label>
            </Link>
          </div>
          <div className="row-start-2 row-span-2 flex flex-col justify-between ml-2">
            <label htmlFor="" className="text-lg font-semibold">
              {watchShop[1]}
            </label>
            <Link to={watchCollections.link1}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchCollections.f1}
              </label>
            </Link>
            <Link to={watchCollections.link2}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchCollections.f2}
              </label>
            </Link>
            <Link to={watchCollections.link3}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchCollections.f3}
              </label>
            </Link>
            <Link to={watchCollections.link4}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchCollections.f4}
              </label>
            </Link>
            <Link to={watchCollections.link5}>
              <label htmlFor="" className="hover:text-orange-400">
                {watchCollections.f5}
              </label>
            </Link>
            <Link to={watchCollections.link6}>
              <label
                htmlFor=""
                className="flex items-center hover:text-orange-400 text-sm"
              >
                {watchCollections.f6}
                <RiArrowRightSLine className="mt-[5px]" />
              </label>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 mt-1 justify-between border-r border-black/30 ml-3">
          <Link to={bands.link1}>
            <label htmlFor="" className="hover:text-orange-400">
              {bands.f1}
            </label>
          </Link>
          <Link to={bands.link2}>
            <label htmlFor="" className="hover:text-orange-400">
              {bands.f2}
            </label>
          </Link>
          <Link to={bands.link3}>
            <label htmlFor="" className="hover:text-orange-400">
              {bands.f3}
            </label>
          </Link>
          <Link to={bands.link4}>
            <label htmlFor="" className="hover:text-orange-400">
              {bands.f4}
            </label>
          </Link>
          <Link to={bands.link5}>
            <label htmlFor="" className="hover:text-orange-400">
              {bands.f5}
            </label>
          </Link>
          <Link to={bands.link6}>
            <label
              htmlFor=""
              className="flex items-center hover:text-orange-400 text-sm"
            >
              {bands.f6}
              <RiArrowRightSLine className="mt-[5px]" />
            </label>
          </Link>
        </div>
        <div className="flex flex-col gap-y-1 mt-1 ml-3 justify-between">
          <Link to={cufflinks.link1}>
            <label htmlFor="" className="hover:text-orange-400">
              {cufflinks.f1}
            </label>
          </Link>
          <Link to={cufflinks.link2}>
            <label htmlFor="" className="hover:text-orange-400">
              {cufflinks.f2}
            </label>
          </Link>
          <Link to={cufflinks.link3}>
            <label htmlFor="" className="hover:text-orange-400">
              {cufflinks.f3}
            </label>
          </Link>
          <Link to={cufflinks.link4}>
            <label htmlFor="" className="hover:text-orange-400">
              {cufflinks.f4}
            </label>
          </Link>
          <Link to={cufflinks.link5}>
            <label htmlFor="" className="hover:text-orange-400">
              {cufflinks.f5}
            </label>
          </Link>
          <Link to={cufflinks.link6}>
            <label
              htmlFor=""
              className="flex items-center hover:text-orange-400 text-sm"
            >
              {cufflinks.f6}
              <RiArrowRightSLine className="mt-[5px]" />
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionsDrop;
