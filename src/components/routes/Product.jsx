import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL, TOKEN_KEY, TOKEN_SECRET, getApiMethod } from "../../services/apiService";
import { HiOutlineChevronDown } from "react-icons/hi";
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
  
  const isFavorite = async() => {
    // const url = "/users/isFavorite";
    // const data = await getApiMethod(url, "POST", productId);
    // console.log(data);
    // setLiked(await getApiMethod(url, "POST", productId))
    // console.log(productId)
    // console.log(liked)
    const url = "/users/isFavorite";
    const{data} = await axios({
      url:API_URL + url,
      method:"POST",
      body:{productId},
      headers:{
        [TOKEN_SECRET]:localStorage[TOKEN_KEY]
      }
    })
    console.log(data)
  };
  
  const addToCart = async() => {
    // const url = "/users/cart/" + productId;
    // const {data} = await axios(url);
  }
  
  const handleFavorite = async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return alert("You have to be logged in to favorite this product!");
    }
    const url = "/users/favorite/" + product?._id;
    setLiked(!liked)
    await getApiMethod(url, "PATCH");
    // operation was successful, update user state
  };
  
  const [showPrice, setShowPrice] = useState(true);

  const [showExplore, setShowExplore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    isFavorite();
  }, []);
  
  return (
    <div>
      {/* Product
      <button onClick={handleFavorite}>Favorite</button> */}
      {product?.type === "watch" ? (
        <div className="mx-32">
          <div className="py-5 grid grid-cols-2 gap-x-5">
            <div className="">
              <div className="grid grid-cols-5 gap-x-3">
                <div className="col-span-1 flex flex-col justify-between">
                  <img
                    className="aspect-square object-cover rounded-md"
                    src={product.img_url[0] ? product.img_url[0] : ""}
                    alt=""
                  />
                  <img
                    className="aspect-square object-cover rounded-md"
                    src={product.img_url[1] ? product.img_url[1] : ""}
                    alt=""
                  />
                  <img
                    className="aspect-square object-cover rounded-md"
                    src={product.img_url[2] ? product.img_url[2] : ""}
                    alt=""
                  />
                  <img
                    className="aspect-square object-cover rounded-md"
                    src={product.img_url[3] ? product.img_url[3] : ""}
                    alt=""
                  />
                </div>
                <div className="col-span-4">
                  <img
                    className="aspect-square object-cover rounded-lg h-full"
                    src={product.img_url}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-thin">{product.name}</h1>
                <p className="">{product.company}</p>
              </div>
              <div>
                <p className="f font-thin">{product.description}</p>
              </div>
              <div
                onMouseLeave={() => setShowPrice(true)}
                className="flex justify-between items-center w-2/5"
              >
                {showPrice && <p className="font-semibold">${product.price}</p>}
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
                  ))}{" "}
                <button
                  onMouseOver={() => setShowPrice(false)}
                  onClick={addToCart}
                  className="font-thin hover:font-normal hover:w-full p-[10px] bg-slate-400 rounded-lg hover:bg-slate-400/90 duration-150"
                >
                  Add to cart
                </button>
              </div>
              <div>
                <p className="font-thin">
                  <span className="font-normal">Reference: </span>
                  {product.ref}
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => window.scrollTo(0, 500)}
            className="flex justify-center items-center mt-5 h-14 border-t border-black/40 hover:bg-gray-100"
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
