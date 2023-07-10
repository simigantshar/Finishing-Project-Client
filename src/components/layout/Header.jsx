import React, {useState} from "react";
import "./header.css";
import {CiMenuBurger} from 'react-icons/ci'
import {TfiClose} from 'react-icons/tfi'
import img from "./svg/Volare1.svg";
import img2 from "./svg/Volare2.svg";
import img3 from "./svg/Volare3.svg";

const Header = () => {

  const [isMobileNav, setMobileNav] = useState(false)
  console.log(isMobileNav)

  const existingClass = 'flex justify-around relative items-center h-[100px] bg-gradient-to-r from-[#9a9a9a] md:hidden border-b';
  const dynamicClass = isMobileNav ? 'border-white/50' : 'border-[#BD8334]';
  const combinedClasses = `${existingClass} ${dynamicClass}`;
  return (
    <div className="">
      <div className='flex justify-evenly relative items-center h-[100px] bg-gradient-to-b from-[#9a9a9a] border-b border-[#E9C261] text-[#9e6515] max-md:hidden font text-[20px]'>
        <div className="ml-12 h-full w-[40%] flex justify-start items-end">
          <div className="h-[50px] w-[90%] flex justify-evenly items-center rounded-tl-[20px] bg-gradient-to-r from-[#9a9a9a] font-bold">
            <div className="flex justify-center items-center w-full h-full"><a className="hover:text-black/80 tracking-widest hover:transition duration-1000 hover:scale-105" href="/watches">Watches</a></div> 
            <div className="flex justify-center items-center w-full h-full"><a className="hover:text-black/80 tracking-widest hover:transition duration-1000 hover:scale-105" href="/bands">Bands</a></div>
            <div className="flex justify-center items-center w-full h-full"><a className="hover:text-black/80 tracking-widest mr-9 hover:transition duration-1000 hover:scale-105" href="/cufflinks">Cufflinks</a></div>
          </div>
        </div>
        <div className='flex justify-center items-center h-[90px]'>
            <a href="/" className='h-[100px] flex items-center'><img className='min-h-[80px] h-[90px]' src={img2} alt="" /></a>
        </div>
        <div className="mr-12 h-full w-[40%] flex flex-col justify-end items-end">
          <div className="h-[50px] w-[90%] flex justify-between items-center rounded-tr-[20px] bg-gradient-to-l from-[#9a9a9a] font-bold">
            <div className="flex justify-center items-center w-full h-full"><a className="leading-[15px] tracking-wider text-center hover:text-black/80 ml-9 hover:transition duration-1000 hover:scale-105" href="">Our Journey</a></div>
            <div className="flex justify-center items-center w-full h-full"><a className="text-center tracking-widest hover:text-black/80 hover:transition duration-1000 hover:scale-105" href="">Contact</a></div>
            <div className="flex justify-center items-center w-full h-full"><a className="text-center tracking-widest hover:text-black/80 hover:transition duration-1000 hover:scale-105" href="">Account</a></div>
          </div>
        </div>
      </div>
      
      <div className={combinedClasses}>
        <div className="flex justify-center items-center rounded hover:border border-white/20 w-[30px] ml-5 p-1" onClick={() => setMobileNav(!isMobileNav)}>
          {!isMobileNav? <CiMenuBurger className="" color="#E9C261" size={"20px"}/> : <TfiClose color="white" size={"20px"}/>}
        </div>
        <div className='flex justify-center items-center h-[90px]'>
            <a href="/" className='h-[100px] flex items-center'><img className='min-h-[80px] h-[90px]' src={img3} alt="" /></a>
        </div>
        <div className="w-[30px] mr-5">

        </div>
      </div>

      {isMobileNav? <div className="md:hidden h-[100vh] z-10 absolute bg-gradient-to-r from-[#9a9a9a] from-15% to-[#9a9a9a69] w-[100vw] text-gray-300 flex flex-col text-justify pl-2 tracking-wider leading-[60px] font text-[23px] divide-y divide-white/50">
                    <a className="hover:text-[#BD8334] hover:bg-white/30 pl-3" href="">Watches</a>
                    <a className="hover:text-[#BD8334] hover:bg-white/30 pl-3" href="">Bands</a>
                    <a className="hover:text-[#BD8334] hover:bg-white/30 pl-3" href="">Cufflinks</a>
                    <a className="hover:text-[#BD8334] hover:bg-white/30 pl-3" href="">Our Journey</a>
                    <a className="hover:text-[#BD8334] hover:bg-white/30 pl-3" href="">Contact</a>
                    <a className="hover:text-[#BD8334] hover:bg-white/30 pl-3" href="">Account</a>
                  </div>
      :
                  null}
      
      
    </div>
  );
};
// light gold hex color: #E9C261
// dark gold hex color: #BD8334
export default Header;
