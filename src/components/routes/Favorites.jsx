import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, TOKEN_KEY, getApiMethod, getApiheader } from "../../services/apiService";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

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

  const handleFavorite = async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return alert("You have to be logged in to favorite this product!");
    }
    const url = API_URL + "/users/favorite/" + product?._id;
    const {data} = await getApiheader(url, "PATCH")
    // operation was successful, update user state
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="">
      <div className="m-16">
        <h1 className="text-4xl font-thin">Favorite Items</h1>
        {favs.length > 0 ? (
          <div className="mt-10">
            {favs.map((item) => (
              <Link to={"/product/" + item._id}>
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
                    <p className="font-semibold text-slate-500">
                      ${item.price}
                    </p>
                  </div>
                  <div className="col-start-7 flex items-center">
                    <button type="text" onClick={() => alert("hello")} className="border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold w-32">
                      Remove
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex justify-center text-2xl text-gray-400 font-thin mt-14">
            <h2>Favorited items will be displayed here!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
