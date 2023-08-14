import React, { useEffect, useState } from "react";
import cufflinksImg from "../img/cufflinks.jpg";
import { Link } from "react-router-dom";

const Cufflinks = ({ cufflinks }) => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={cufflinksImg} alt="" />
        <div className="h-[50px] w-full -mt-[50px] absolute bg-gradient-to-b from-white/0 to-[#ca9867]"></div>
      </div>
      {/*  */}
      <div className="p-20  bg-[#ca9867]">
        <h4 className="text-3xl ml-4 mb-8">All Straps</h4>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
          {cufflinks.map((item, i) => (
            <article
              key={i}
              className="bg-white p-3 rounded-2xl shadow-md hover:shadow-2xl duration-300"
            >
              <Link to={"/product/" + item._id}>
                <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-center">
                  <img
                    className="w-full rounded-t-xl"
                    src={item.img_url[0]}
                    alt=""
                  />
                  <div className="bg-gradient-to-b from-white/0 to-white h-[20px] -mt-[20px]"></div>
                </div>
                <div className="flex flex-col items-center justify-between h-[90px]">
                  <p className="text-center font-semibold leading-[24px] text-sm overflow-hidden text-ellipsis">
                    {item.name}
                  </p>
                  <p className="text-xs font-semibold">${item.price}</p>
                </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cufflinks;
