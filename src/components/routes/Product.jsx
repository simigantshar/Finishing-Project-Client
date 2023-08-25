import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  API_URL,
  TOKEN_KEY,
  TOKEN_SECRET,
  getApiMethod,
} from "../../services/apiService";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { useEffect, useState } from "react";
import { VscHeart } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import cufflinksAd from "../img/cufflinksAd.jpeg";
import cufflinksSpecial from "../img/cufflinksSpecial.webp";

export const Product = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p._id === productId);

  const nav = useNavigate();

  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showPrice, setShowPrice] = useState(true);
  const [showExplore, setShowExplore] = useState(false);

  const isFavorite = async () => {
    const url = "/users/isFavorite";
    setLiked(await getApiMethod(url, "POST", { productId }));
  };

  const addToCart = async () => {
    setAddedToCart(true);
    setShowPrice(false);
    setTimeout(() => {
      setAddedToCart(false);
      setShowPrice(true);
    }, 1500);
    const url = "/users/addCart/" + productId;
    await getApiMethod(url, "PATCH");
  };

  const handleFavorite = async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return alert("You have to be logged in to favorite this product!");
    }
    const url = "/users/favorite/" + product?._id;
    setLiked(!liked);
    await getApiMethod(url, "PATCH");
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    isFavorite();
  }, []);

  return (
    <div>
      {product?.type === "band" ? (
        <div className="mx-32 max-lg:mx-10">
          <div className="py-5 grid grid-cols-2 gap-x-5 max-md:grid-cols-1">
            <div className="md:hidden">
              <p className="font-thin">
                <span className="font-normal">Reference: </span>
                {product.ref}
              </p>
            </div>
            <div className="grid grid-rows-4 grid-flow-col grid-cols-5 max-md:grid-flow-row max-md:grid-cols-4">
              <img
                className="aspect-square object-cover rounded-md row-span-1 max-md:order-2"
                src={product.img_url[0] ? product.img_url[0] : ""}
                alt=""
              />
              <img
                className="aspect-square object-cover rounded-md row-span-1 max-md:order-3"
                src={product.img_url[1] ? product.img_url[1] : ""}
                alt=""
              />
              <img
                className="aspect-square object-cover rounded-md row-span-1 max-md:order-4"
                src={product.img_url[2] ? product.img_url[2] : ""}
                alt=""
              />
              <img
                className="aspect-square object-cover rounded-md row-span-1 max-md:order-5"
                src={product.img_url[3] ? product.img_url[3] : ""}
                alt=""
              />

              <img
                className="aspect-square object-cover rounded-lg h-full row-span-4 col-span-4 max-md:order-1"
                src={product.img_url[0]}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between max-md:mt-8">
              <div>
                <h1 className="text-3xl font-thin pb-2 max-md:text-center">
                  {product.name}
                </h1>
                <p className="pb-1 max-md:text-center">{product.company}</p>
              </div>
              <div>
                <p className="f font-thin pb-2 max-md:text-center">
                  {product.description}
                </p>
              </div>
              <div
                onMouseLeave={() => {
                  !addedToCart && setShowPrice(true);
                }}
                className="max-md:h-[75px] flex justify-between gap-x-3 items-center w-3/5 max-md:w-full max-md:flex-col"
              >
                <div className="flex gap-x-2 items-center">
                  {showPrice && (
                  <p className="font-semibold">${product.price}.00</p>
                )}
                {showPrice &&
                  (liked ? (
                    <FcLike
                      size={25}
                      onClick={() => {
                        handleFavorite();
                      }}
                    />
                  ) : (
                    <VscHeart
                      size={22}
                      onClick={() => {
                        handleFavorite();
                      }}
                    />
                  ))}
                </div>
                <button
                  onMouseOver={() => setShowPrice(false)}
                  onClick={addToCart}
                  className={`${
                    addedToCart && "bg-green-600 hover:bg-green-600"
                  } max-md:bg-blue-500 font-thin hover:font-normal p-[10px] bg-slate-400 rounded-lg hover:h-full w-[300px] hover:bg-slate-400/90 md:hidden`}
                >
                  {addedToCart ? (
                    <div className="flex justify-center font-semibold">
                      Added <BsCartCheck size={24} className="ml-2" />
                    </div>
                  ) : (
                    "Add to cart"
                  )}
                </button>
                {/* ................................................ */}
                <button
                  onMouseOver={() => setShowPrice(false)}
                  onClick={addToCart}
                  className={`${
                    addedToCart && "bg-green-600 hover:bg-green-600 w-full"
                  } max-md:bg-blue-500 font-thin hover:font-normal hover:w-full flex-1 p-[10px] bg-slate-400 rounded-lg hover:bg-slate-400/90 max-md:hidden`}
                >
                  {addedToCart ? (
                    <div className="flex justify-center font-semibold">
                      Added <BsCartCheck size={24} className="ml-2" />
                    </div>
                  ) : (
                    "Add to cart"
                  )}
                </button>
              </div>
              <div className="max-md:hidden">
                <p className="font-thin">
                  <span className="font-normal">Reference: </span>
                  {product.ref}
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => window.scrollTo(0, 500)}
            className="max-md:hidden flex justify-center items-center mt-5 h-14 border-t border-black/40 hover:bg-gray-100"
          >
            <HiOutlineChevronDown />
          </div>
          <div className="w-full relative h-[130px] flex">
            <div className="bg-black/20 z-20 absolute h-full w-full"></div>
            <div className="w-[130px] h-full bg-gradient-to-r -mr-12 z-10 from-gray-800 via-[#97d0de] to-[#90cbd700] via-[87%] flex justify-center items-center p-3">
              <p className="text-sm font-thin text-white">
                "Timex Timepieces: Unveiling Elegance, One Watch at a Time"
              </p>
            </div>
            <div className="h-full">
              <img className="h-full" src={cufflinksSpecial} alt="" />
            </div>
            <div className="h-full w-[30px] -ml-[30px] bg-gradient-to-r from-gray-800/0 to-gray-600"></div>
            <div className="h-full w-[150px] bg-gradient-to-r from-gray-600 to-stone-400"></div>
            <div className="flex-1 p-3 font-thin leading-5 flex items-center bg-stone-400">
              <p>
                A pair of Cufflinks to go with your Timepeice for any event.
              </p>
            </div>
            {!showExplore && (
              <div className="h-full w-[30px] -mr-[30px] z-10 bg-gradient-to-r from-stone-400"></div>
            )}
            <div className="h-full flex items-center overflow-hidden">
              <img className="h-max" src={cufflinksAd} alt="" />
            </div>
            <div
              onMouseOver={() => setShowExplore(true)}
              onMouseLeave={() => setShowExplore(false)}
              className="z-20 absolute right-0 h-full w-[275px] hover:bg-black/40 flex justify-center items-center duration-700"
            >
              {showExplore && (
                <button
                  onClick={() => nav("/cufflinks")}
                  className="text-blue-300 border-blue-300 hover:border-blue-200 hover:text-blue-200 border-2 rounded-full px-3 py-1"
                >
                  Explore..
                </button>
              )}
            </div>
          </div>
          <div className="mt-10 grid grid-rows-6 grid-cols-2 bg-stone-300">
            <div className="border-black p-4">Style: {product.category}</div>
            <div className="p-4 bg-white/30"></div>
            <div className="p-4 bg-white/30"></div>
            <div className="p-4 border-black col-start-2 flex justify-end">
              Case: {product.case}
            </div>
            <div className="p-4 border-black">
              Movement: {product.technology}
            </div>
            <div className="p-4 bg-white/30"></div>
            <div className="p-4 bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              Dial: {product.dial}
            </div>
            <div className="p-4 border-black">Year: {product.year}</div>
            <div className="p-4 bg-white/30"></div>
            <div className="p-4 bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              Strap: {product.strap}
            </div>
          </div>
          <div className="py-7"></div>
        </div>
      ) : null}
      {product?.type === "cufflink" ? "" : null}
      {product?.type === "band" ? "" : null}
    </div>
  );
};

//domain/product/asdfsdfgdwg
