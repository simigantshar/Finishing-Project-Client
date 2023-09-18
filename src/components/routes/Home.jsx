import React from "react";
import './css/home.css'
import { SlArrowDown } from "react-icons/sl";

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
        <div className="bg-gradient-to-b absolute from-white from-50% h-[400px] w-full"></div>
        <img
          className="pt-[200px] h-full w-full"
          src="https://res.cloudinary.com/dbkctdxui/image/upload/v1694715700/mffsdn3kktrl4dtx106q.jpg"
          alt=""
        />
        <div className="w-full h-[400px] bg-gradient-to-t -mt-[200px] from-white via-blue-900 via-50% absolute"></div>
      </div>
      {/* //////////////////////////////////////// */}
      <div>
        <div className="grid grid-cols-3 m-16 bg-yellow-400 h-[460px] mt-[200px]">
          <div className="relative h-[460px] overflow-hidden showContent-css">
          <div className="absolute h-[100px] z-10 bottom-0 w-full LimgDiv-css"></div>
            <img
              className="h-full w-full object-cover zoomIn-css"
              src="https://res.cloudinary.com/dbkctdxui/image/upload/v1694763097/ndccrzgfvboqcx5paojt.png"
              alt=""
            />
          </div>
          <div className="relative h-[460px] overflow-hidden showContent-css">
          <div className="absolute h-[100px] z-10 bottom-0 w-full MimgDiv-css"></div>
            <img
              className="h-full w-full object-cover zoomIn-css"
              src="https://res.cloudinary.com/dbkctdxui/image/upload/v1695041852/ofqobenhzo5yriccqbkp.jpg"
              alt=""
            />
          </div>
          <div className="relative h-[460px] overflow-hidden showContent-css">
            <div className="absolute h-[100px] z-10 bottom-0 w-full RimgDiv-css"></div>
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