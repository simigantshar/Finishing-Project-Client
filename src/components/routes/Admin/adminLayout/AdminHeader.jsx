import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import img from "./svg/volare1.svg";
import img2 from "./svg/volare2.svg";
import img3 from "./svg/volare3.svg";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { LiaUserCircle } from "react-icons/lia";
import { TfiClose } from "react-icons/tfi";
import AdminCollectionsDrop from "./admin header dropdown/AdminCollectionsDrop";

const AdminHeader = () => {
  const nav = useNavigate();

  // const [setting1value, setSetting1value] = useState("initialValue1");
  // const [setting2value, setSetting2value] = useState(false);

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
          className={`flex justify-between items-center h-[${headerHeight}px] bg-gradient-to-b from-[#643f3f] to-[#352929] border-b border-[#E9C261] text-[#22170b] max-md:hidden font text-[20px] fixed z-50 w-full`}
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
                  to={"/admin/usersList"}
                >
                  User's List
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-[90px]">
            <Link to={"/admin"} className="h-[100px] flex items-center">
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
              {localStorage["products_token"] ? (
                <div className="bg-white flex justify-between rounded-full border border-black/50 w-[125px]">
                  <p className="leading-[32px] mx-auto mt-px text-[18px]">
                    Admin
                  </p>
                  <Link to={"/admin/account"}>
                    <img
                      src={
                        "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913816/ifzpgpsvgsz6rjtqjgsd.png"
                      }
                      className="h-[32px]"
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
        {showCollectionsDrop && <AdminCollectionsDrop />}
      </div>
    </div>
  );
};

export default AdminHeader;
