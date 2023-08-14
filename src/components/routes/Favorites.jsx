import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, TOKEN_KEY } from "../../services/apiService";
import { IoMdHeartEmpty } from "react-icons/io";

const Favorites = () => {
  const [favs, setFavs] = useState([]);

  const getFavorites = async () => {
    const url = API_URL + "/users/favorites";
    const { data } = await axios({
      url: url,
      method: "GET",
      headers: {
        "x-api-key": localStorage[TOKEN_KEY],
      },
    });
    console.log(data);
    setFavs(data);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="">
      <div className="m-16">
        <h1 className="text-4xl font-thin">Shopping Bag</h1>
        <div className="mt-10">
          {favs.map((item) => (
            <div className="my-5 grid grid-cols-8 grid-rows-2 gap-x-6 border-black/20 border p-5 rounded-xl">
              <img
                className="row-span-2 col-span-1"
                src={item.img_url}
                alt=""
              />
              <div className="col-span-4 row-span-1">
                <h3 className="text-xl">{item.name}</h3>
                <h4>{item.company}</h4>
              </div>
              <div className="row-span-1 row-start-2 col-start-2 flex flex-col justify-end">
                <p className="font-semibold text-slate-500">${item.price}</p>
              </div>
              <div className="col-start-7 col-span-2 flex items-center">
                <button className="flex items-center border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold">
                  Favorite &nbsp; <IoMdHeartEmpty className="mt-[3px]" />
                </button>
              </div>
              <div className="col-start-7 flex items-center">
                <button className="border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold w-32">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
