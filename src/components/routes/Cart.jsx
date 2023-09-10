import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { getApi, getApiMethod } from "../../services/apiService";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const nav = useNavigate();

  const [cartAr, setCartAr] = useState([]);
  const [favs, setFavs] = useState([]);

  const getCartItems = async () => {
    setCartAr(await getApi("/users/cart"));
  };

  const handleFavorite = async (itemId) => {
    const url = "/users/favorite/" + itemId;
    await getApiMethod(url, "PATCH");
    getFavorites();
  };

  const getFavorites = async () => {
    const url = "/users/favorites";
    const data = await getApi(url);
    setFavs(data);
  };

  const removeFromCart = async (itemId) => {
    const url = "/users/removeCart/" + itemId;
    await getApiMethod(url, "PATCH");
    getCartItems();
  };

  useEffect(() => {
    getFavorites();
    getCartItems();
  }, []);

  return (
    <div className="">
      <div className="m-16">
        <h1 className="text-4xl font-thin">Shopping Bag</h1>
        {cartAr.length > 0 ? (
          <div className="mt-10">
            {cartAr.map((item, i) => (
              <div
                onClick={() => nav("/product/" + item._id)}
                key={i}
                className="grid grid-cols-8 grid-rows-2 my-4 gap-x-6 border-black/20 border p-5 rounded-xl"
              >
                <img
                  className="row-span-2 col-span-1 aspect-square object-cover rounded-md"
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
                <div className="col-start-7 col-span-2 flex items-center">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleFavorite(item._id);
                    }}
                    className="flex items-center border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold"
                  >
                    {favs.find((product) => product._id === item._id) ? (
                      <FcLike className="mt-[3px]" />
                    ) : (
                      <IoMdHeartEmpty className="mt-[3px]" />
                    )}
                  </button>
                </div>
                <div className="col-start-7 flex items-center">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      removeFromCart(item._id);
                    }}
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
            <h2>Items that you added to your cart will be displayed here!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
