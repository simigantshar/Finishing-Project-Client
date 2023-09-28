import React, { useState } from "react";
import "./header.css";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { SlHandbag } from "react-icons/sl";
import { LiaUserCircle } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import img from "./svg/Volare1.svg";
import img2 from "./svg/Volare2.svg";
import img3 from "./svg/Volare3.svg";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../services/apiService";
import CollectionsDrop from "./header dropdown/CollectionsDrop";

const Header = () => {
  
  const nav = useNavigate();

  const [showCollectionsDrop, setShowCollectionsDrop] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  const [isMobileNav, setMobileNav] = useState(false);

  const existingClass =
    "flex justify-around relative items-center h-[100px] bg-gradient-to-r from-[#9a9a9a] md:hidden border-b";
  const dynamicClass = isMobileNav ? "border-white/50" : "border-[#BD8334]";
  const combinedClasses = `${existingClass} ${dynamicClass}`;

  let headerHeight = 100;

  return (
    <div onMouseLeave={() => setShowCollectionsDrop(false)}>
      <div className={`h-[${headerHeight}px]`}>
        <div
          className={`flex justify-between items-center h-[${headerHeight}px] bg-gradient-to-b from-[#9a9a9a] to-[white] border-b border-[#E9C261] text-[#694017] max-md:hidden font text-[20px] fixed z-50 w-full`}
        >
          <div className="h-full w-[50%] flex justify-start items-end">
            <div className="h-[50px] w-[90%] flex justify-between items-center bg-gradient-to-r from-[#9a9a9a] font-bold">
              <div className="flex justify-end items-center w-full h-full relative">
                <div className="hover:text-[#bd8334] tracking-widest hover:transition flex items-center duration-1000 hover:scale-105">
                  <label
                    htmlFor=""
                    onMouseOver={() => setShowCollectionsDrop(true)}
                  >
                    Shop
                  </label>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <Link
                  className="hover:text-[#bd8334] tracking-widest hover:transition duration-1000 hover:scale-105"
                  to={"/"}
                >
                  About
                </Link>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <Link
                  className="hover:text-[#bd8334] tracking-widest mr-9 hover:transition duration-1000 hover:scale-105"
                  to={"/"}
                >
                  Retailer's
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-[90px]">
            <Link to={"/"} className="h-[100px] flex items-center">
              <img className="min-h-[80px] h-[90px]" src={img3} alt="" />
            </Link>
          </div>
          <div className="h-full w-[50%] flex justify-end items-end">
            <div className="h-[50px] w-[90%] flex justify-between items-center pr-4 bg-gradient-to-l from-[#9a9a9a] font-bold">
              <div className="flex items-center mr-1">
                <input
                  type="text"
                  className="rounded bg-white/80 w-[100%] -mr-[24px]"
                />
                <div>
                  <CiSearch className="hover:text-[#bd8334]" />
                </div>
              </div>
              <div>
                {localStorage[TOKEN_KEY] ? (
                  <Link to={"/favorites"}>
                    <AiOutlineHeart
                      className="hover:text-[#bd8434]"
                      size={"23px"}
                    />
                  </Link>
                ) : (
                  <div className="dropdown">
                    <label tabIndex={0} className="m-1">
                      <AiOutlineHeart
                        className="hover:text-[#bd8434]"
                        size={"23px"}
                      />
                    </label>
                    <div className="flex flex-col justify-between items-center -mt-[16px] h-20 -ml-[100px] dropdown-content z-[1] menu p-2 shadow rounded-b-md bg-base-100 w-56">
                      <p className="text-[16px]">
                        You need to sign in to favorite!
                      </p>
                      <button
                        type="button"
                        onClick={() => nav("/login")} // Replace '/login' with your desired route
                        tabIndex={0}
                        className="bg-gray-300 rounded-md p-1 text-[18px] w-[50%]"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Link to={"/cart"}>
                  <SlHandbag className="hover:text-[#bd8334]" size={"20px"} />
                </Link>
              </div>
              {localStorage["products_token"] ? (
                <div>
                  <Link to={"/account"}>
                    {" "}
                    <img
                      src={
                        "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913816/ifzpgpsvgsz6rjtqjgsd.png"
                      }
                      className="w-[28px]"
                      alt=""
                    />
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to={"/login"}>
                    <LiaUserCircle
                      className="hover:text-[#bd8334]"
                      size={"25px"}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={combinedClasses}>
          <div
            className="flex justify-center items-center rounded hover:border border-white/20 w-[30px] ml-5 p-1"
            onClick={() => setMobileNav(!isMobileNav)}
          >
            {!isMobileNav ? (
              <CiMenuBurger className="" color="#BD8334" size={"20px"} />
            ) : (
              <TfiClose color="white" size={"20px"} />
            )}
          </div>
          <div className="flex justify-center items-center h-[90px]">
            <Link to={"/"} className="h-[100px] flex items-center">
              <img className="min-h-[80px] h-[90px]" src={img3} alt="" />
            </Link>
          </div>
          <div className="w-[30px] mr-5"></div>
        </div>
        {/* //////////////////////////////////////////////// */}
        {isMobileNav ? (
          <div className="md:hidden h-[100vh] z-10 absolute bg-gradient-to-r from-[#9a9a9a] from-15% to-[#9a9a9a69] w-[100vw] text-gray-300 flex flex-col text-justify pl-2 tracking-wider leading-[60px] font text-[23px] divide-y divide-white/50">
            <Link
              className="hover:text-[#BD8334] hover:bg-white/30 pl-3"
              to={"/watches"}
            >
              Watches
            </Link>
            <Link
              className="hover:text-[#BD8334] hover:bg-white/30 pl-3"
              to={"/bands"}
            >
              Bands
            </Link>
            <Link
              className="hover:text-[#BD8334] hover:bg-white/30 pl-3"
              to={"/cufflinks"}
            >
              Cufflinks
            </Link>
            <Link
              className="hover:text-[#BD8334] hover:bg-white/30 pl-3"
              to={"/ourJourney"}
            >
              Our Journey
            </Link>
            <Link
              className="hover:text-[#BD8334] hover:bg-white/30 pl-3"
              to={"/contact"}
            >
              Contact
            </Link>
            <Link
              className="hover:text-[#BD8334] hover:bg-white/30 pl-3"
              to={"/signUp"}
            >
              Account
            </Link>
          </div>
        ) : null}
      </div>
      <div className="max-md:hidden">
        {showCollectionsDrop && <CollectionsDrop />}
      </div>
    </div>
  );
};

export default Header;
