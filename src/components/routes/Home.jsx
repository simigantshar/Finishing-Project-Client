import React from "react";
import "./css/home.css";
import { SlArrowDown } from "react-icons/sl";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 max-md:grid-flow-row max-md:grid-cols-1 relative">
        <div className="bg-[#353F58]">
          <div className="m-10">
            <p className="text-white font-thin text-2xl">
              Welcome to Volare Horlogerie – where time meets elegance. Discover
              a world of precision craftsmanship and timeless beauty. Our
              curated collection of exquisite timepieces reflects the essence of
              luxury, sophistication, and a passion for horology.
            </p>
          </div>
        </div>
        <div className="relative md:col-start-2 md:col-span-2">
          <div className="max-md:hidden bg-gradient-to-r from-[#353F58] w-[320px] h-full absolute"></div>
          <div className="md:hidden bg-gradient-to-b from-[#353F58] w-full h-[130px] absolute"></div>
          <img
            className="object-cover h-full"
            src={
              "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913877/zcxqynjqhp0z6wasvo7k.jpg"
            }
            alt="A few watches in their cases in a nicely designed wooden box"
          />
        </div>
        <div className="w-full bg-gradient-to-t from-white h-[50px] flex justify-center items-center absolute bottom-0">
          <SlArrowDown color="white" size={18} />
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="relative">
        <div className="bg-gradient-to-b absolute from-white h-[80px] w-full"></div>
        <img
          className=" h-full w-full"
          src="https://res.cloudinary.com/dbkctdxui/image/upload/v1694715700/mffsdn3kktrl4dtx106q.jpg"
          alt=""
        />
        <div className="w-full h-[400px] bg-gradient-to-t -mt-[200px] from-blue-900 from-50% absolute"></div>
        <div className="w-full h-[400px] bg-gradient-to-t from-white via-blue-900"></div>
      </div>
      {/* //////////////////////////////////////// */}
      <div>
        <div className="grid grid-cols-3 m-16 bg-yellow-400 h-[460px] mt-[200px]">
          <div className="relative h-[460px] overflow-hidden showContent-css">
            <Link to={"/watches"}>
              <div className="absolute h-[100px] z-10 bottom-0 w-full flex justify-center items-end pb-[19px] LimgDiv-css">
                <p className="flex items-center text-white text-xl font-semibold">
                  Explore Sports Watches
                  <AiOutlineRight size={15} className="mt-[5px]" />
                </p>
              </div>
            </Link>
            <img
              className="h-full w-full object-cover zoomIn-css"
              src="https://res.cloudinary.com/dbkctdxui/image/upload/v1694763097/ndccrzgfvboqcx5paojt.png"
              alt=""
            />
          </div>
          <div className="relative h-[460px] overflow-hidden showContent-css">
            <Link to={"/watches"}>
              <div className="absolute h-[100px] z-10 bottom-0 w-full flex justify-center items-end pb-[19px] MimgDiv-css">
                <p className="flex items-center text-white text-xl font-semibold chColor-css">
                  Explore Dress Watches
                  <AiOutlineRight size={15} className="mt-[5px]" />
                </p>
              </div>
            </Link>
            <img
              className="h-full w-full object-cover zoomIn-css"
              src="https://res.cloudinary.com/dbkctdxui/image/upload/v1695041852/ofqobenhzo5yriccqbkp.jpg"
              alt=""
            />
          </div>
          <div className="relative h-[460px] overflow-hidden showContent-css">
            <Link to={"/watches"}>
              <div className="absolute h-[100px] z-10 bottom-0 w-full flex justify-center items-end pb-[19px] RimgDiv-css">
                <p className="flex items-center text-white text-xl font-semibold">
                  Explore Dive Watches
                  <AiOutlineRight size={15} className="mt-[5px]" />
                </p>
              </div>
            </Link>
            <img
              className="h-full w-full object-cover zoomIn-css"
              src="https://res.cloudinary.com/dbkctdxui/image/upload/v1694704522/zhvly7edlr7wkkyzhv3x.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
