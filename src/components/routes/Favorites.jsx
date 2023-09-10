import React, { useEffect, useState } from "react";
import { getApi, getApiMethod } from "../../services/apiService";
import { IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const nav = useNavigate();

  const [favs, setFavs] = useState([]);

  const getFavorites = async () => {
    setFavs(await getApi("/users/favorites"));
  };

  const handleFavorite = async (itemId) => {
    const url = "/users/favorite/" + itemId;
    await getApiMethod(url, "PATCH");
    getFavorites();
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
            {favs.map((item, i) => (
              <div
                key={i}
                onClick={() => nav("/product/" + item._id)}
                className="my-5 grid grid-cols-8 grid-rows-2 gap-x-6 border-black/20 border p-4 rounded-xl"
              >
                <img
                  className="row-span-2 col-span-1 object-cover aspect-square rounded-md"
                  src={item.img_url[0]}
                  alt=""
                />
                <div className="col-span-4 row-span-1">
                  <h3 className="text-xl">{item.name}</h3>
                  <h4>{item.company}</h4>
                </div>
                <div className="row-span-1 row-start-2 col-start-2 flex flex-col justify-end">
                  <p className="font-semibold text-slate-500">${item.price}</p>
                </div>
                <div className="col-start-7 flex items-center">
                  <button
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent event propagation to the parent div
                      handleFavorite(item._id);
                    }}
                    type="button" // Ensure you specify the type as "button"
                    className="border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold w-32"
                  >
                    Remove
                  </button>
                </div>
              </div>
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
