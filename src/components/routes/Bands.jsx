import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import watchBand from "../img/watchBands.webp";
import watchBand2 from "../img/watchBands2.jpg";
import watchBand3 from "../img/watchBands3.jpg";
import { API_URL } from "../../services/apiService";
const Bands = ({ bands, isLoading }) => {
  return (
    <div>
      <img src={watchBand} className="object-cover w-full" alt="" />
      {/*  */}
      <div>{/* filters div */}</div>
      {/*  */}
      <div className="p-20 bg-[#ececea]">
        <h4 className="text-3xl ml-4 mb-8">All Straps</h4>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
          {isLoading && <p>{"loading..."}</p>}
          {bands.map((item, i) => (
            <article
              key={i}
              className="bg-white p-3 rounded-2xl shadow-md hover:shadow-2xl duration-300"
            >
              <Link to={"/product/" + item._id}>
                <div>
                  <img
                    className="h-[200px] w-full object-contain"
                    src={item.img_url[0]}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-between h-[115px]">
                  <p className="text-center font-semibold leading-[24px] tracking-[1px] text-sm overflow-hidden text-ellipsis">
                    {item.name}
                  </p>
                  <p className="mt-3 text-xs font-semibold">${item.price}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bands;
