import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY, getApiMethod } from "../../services/apiService";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { useEffect, useState } from "react";
import { VscHeart } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";

export const Product = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p._id === productId);

  const nav = useNavigate();

  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showPrice, setShowPrice] = useState(true);
  const [selectImg, setSelectImg] = useState(product?.img_url[0]);

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
      if (confirm("You have to be logged in to favorite this product!")) {
        nav("/login");
      }
      return;
    }
    const url = "/users/favorite/" + product?._id;
    setLiked(!liked);
    await getApiMethod(url, "PATCH");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    isFavorite();
  }, []);

  return (
    <div>
      {product?.type === "watch" ? (
        <div className="mx-32 max-lg:mx-10">
          <div className="py-5 grid grid-cols-2 gap-x-5 max-md:grid-cols-1">
            <div className="md:hidden">
              <p className="font-thin">
                <span className="font-normal">Reference: </span>
                {product.ref}
              </p>
            </div>
            <div className="grid grid-rows-4 grid-flow-col md:gap-x-2 max-md:gap-y-5 max-md:gap-x-3 grid-cols-5 max-md:grid-flow-row max-md:grid-cols-4">
              <img
                onClick={() =>
                  product.img_url[0] ? setSelectImg(product.img_url[0]) : ""
                }
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[1] && "border"
                }`}
                src={product.img_url[1] ? product.img_url[0] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[1] ? setSelectImg(product.img_url[1]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[1] && "border"
                }`}
                src={product.img_url[1] ? product.img_url[1] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[2] ? setSelectImg(product.img_url[2]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[2] && "border"
                }`}
                src={product.img_url[2] ? product.img_url[2] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[3] ? setSelectImg(product.img_url[3]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[3] && "border"
                }`}
                src={product.img_url[3] ? product.img_url[3] : ""}
                alt=""
              />
              <img
                className="aspect-square object-cover rounded-lg h-full row-span-4 col-span-4 max-md:order-first border border-black/10"
                src={selectImg ? selectImg : product.img_url[0]}
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
                <p className="font-thin pb-2 max-md:text-center">
                  {product.description}
                </p>
              </div>
              <div className="w-full flex max-md:justify-center">
                <div
                  onMouseLeave={() => {
                    !addedToCart && setShowPrice(true);
                  }}
                  className={`${
                    showPrice && "gap-x-3"
                  } max-md:h-[75px] flex justify-between items-center md:w-[60%] max-md:flex-col`}
                >
                  <div className="flex gap-x-2 items-center">
                    {showPrice && (
                      <p className="font-semibold">${product.price}.00</p>
                    )}
                    {showPrice &&
                      (liked ? (
                        <FcLike
                          size={24}
                          onClick={() => {
                            handleFavorite();
                          }}
                        />
                      ) : (
                        <VscHeart
                          size={24}
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
                      addedToCart
                        ? "bg-green-600 hover:bg-green-600 h-full"
                        : "bg-slate-400 hover:bg-slate-400/90"
                    }  font-thin hover:font-normal p-[10px] rounded-lg hover:h-full w-[300px] md:hidden`}
                  >
                    {addedToCart ? (
                      <div className="flex justify-center font-semibold">
                        Added <BsCartCheck size={24} className="ml-2" />
                      </div>
                    ) : (
                      "Add to cart"
                    )}
                  </button>
                  {/* ................................................. */}
                  <button
                    onMouseOver={() => setShowPrice(false)}
                    onClick={addToCart}
                    className={`${
                      addedToCart
                        ? "bg-green-600 hover:bg-green-600 w-full"
                        : "bg-slate-400 hover:w-full hover:bg-slate-400/90"
                    }max-md:bg-blue-500 font-thin hover:font-normal flex-1 p-[10px] rounded-lg max-md:hidden`}
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
            <div className="w-[20%] h-full bg-gradient-to-r z-10 from-gray-800 via-[#97d0de] to-[#6AB1C2] via-[87%] flex justify-center items-center p-7">
              <p className="text-sm font-thin text-white">
                "Timex Timepieces: Unveiling Elegance, One Watch at a Time"
              </p>
            </div>
            <div className="w-[30%]">
              <img
                className="h-full w-full object-cover"
                src={
                  "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913745/fcw0putjjdlfktaqasgz.webp"
                }
                alt=""
              />
            </div>
            <div className="w-[25%] px-9 max-md:px-4 max-sm:px-1 font-thin flex items-center text-white bg-stone-600">
              <p>
                A pair of Cufflinks to go with your Timepeice for any event.
              </p>
            </div>
            <div className="w-[25%] flex items-center">
              <img
                className="h-full w-full object-cover"
                src={
                  "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913731/y9jfyfh9qapprtzwf9kg.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="my-10 grid grid-cols-2 max-sm:grid-cols-1 max-sm:divide-y rounded-[3px] bg-stone-300">
            <div className="border-black p-4">
              <span className="font-semibold">Style:&nbsp;</span>
              {product.category}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Case:&nbsp;</span>
              {product.case}
            </div>
            <div className="p-4 border-black">
              <span className="font-semibold">Movement:&nbsp;</span>
              {product.technology}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Dial:&nbsp;</span>
              {product.dial}
            </div>
            <div className="p-4 border-black">
              <span className="font-semibold">Year:&nbsp;</span>
              {product.year}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Strap:&nbsp;</span>
              {product.strap}
            </div>
          </div>
        </div>
      ) : null}
      {product?.type === "cufflink" ? (
        <div className="mx-32 max-lg:mx-10">
          <div className="py-5 grid grid-cols-2 gap-x-5 max-md:grid-cols-1">
            <div className="md:hidden">
              <p className="font-thin">
                <span className="font-normal">Reference: </span>
                {product.ref}
              </p>
            </div>
            <div className="grid grid-rows-4 grid-flow-col md:gap-x-2 max-md:gap-y-5 max-md:gap-x-3 grid-cols-5 max-md:grid-flow-row max-md:grid-cols-4">
              <img
                onClick={() =>
                  product.img_url[0] ? setSelectImg(product.img_url[0]) : ""
                }
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[1] && "border"
                }`}
                src={product.img_url[1] ? product.img_url[0] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[1] ? setSelectImg(product.img_url[1]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[1] && "border"
                }`}
                src={product.img_url[1] ? product.img_url[1] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[2] ? setSelectImg(product.img_url[2]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[2] && "border"
                }`}
                src={product.img_url[2] ? product.img_url[2] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[3] ? setSelectImg(product.img_url[3]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[3] && "border"
                }`}
                src={product.img_url[3] ? product.img_url[3] : ""}
                alt=""
              />
              <img
                className="aspect-square object-cover rounded-lg h-full row-span-4 col-span-4 max-md:order-first border border-black/10"
                src={selectImg ? selectImg : product.img_url[0]}
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
                <p className="font-thin pb-2 max-md:text-center">
                  {product.description}
                </p>
              </div>
              <div className="w-full flex max-md:justify-center">
                <div
                  onMouseLeave={() => {
                    !addedToCart && setShowPrice(true);
                  }}
                  className={`${
                    showPrice && "gap-x-3"
                  } max-md:h-[75px] flex justify-between items-center md:w-[60%] max-md:flex-col`}
                >
                  <div className="flex gap-x-2 items-center">
                    {showPrice && (
                      <p className="font-semibold">${product.price}.00</p>
                    )}
                    {showPrice &&
                      (liked ? (
                        <FcLike
                          size={24}
                          onClick={() => {
                            handleFavorite();
                          }}
                        />
                      ) : (
                        <VscHeart
                          size={24}
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
                      addedToCart
                        ? "bg-green-600 hover:bg-green-600 h-full"
                        : "bg-slate-400 hover:bg-slate-400/90"
                    }  font-thin hover:font-normal p-[10px] rounded-lg hover:h-full w-[300px] md:hidden`}
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
                      addedToCart
                        ? "bg-green-600 hover:bg-green-600 w-full"
                        : "bg-slate-400 hover:w-full hover:bg-slate-400/90"
                    }max-md:bg-blue-500 font-thin hover:font-normal flex-1 p-[10px] rounded-lg max-md:hidden`}
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
            <div className="w-[20%] h-full bg-gradient-to-r z-10 from-gray-800 via-[#97d0de] to-[#6AB1C2] via-[87%] flex justify-center items-center p-7">
              <p className="text-sm font-thin text-white">
                "Timex Timepieces: Unveiling Elegance, One Watch at a Time"
              </p>
            </div>
            <div className="w-[30%]">
              <img
                className="h-full w-full object-cover"
                src={
                  "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913745/fcw0putjjdlfktaqasgz.webp"
                }
                alt=""
              />
            </div>
            <div className="w-[25%] px-9 max-md:px-4 max-sm:px-1 font-thin flex items-center text-white bg-stone-600">
              <p>
                A pair of Cufflinks to go with your Timepeice for any event.
              </p>
            </div>
            <div className="w-[25%] flex items-center">
              <img
                className="h-full w-full object-cover"
                src={
                  "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913731/y9jfyfh9qapprtzwf9kg.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="my-10 grid grid-cols-2 max-sm:grid-cols-1 max-sm:divide-y rounded-[3px] bg-stone-300">
            <div className="border-black p-4">
              <span className="font-semibold">Style:&nbsp;</span>
              {product.category}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Case:&nbsp;</span>
              {product.case}
            </div>
            <div className="p-4 border-black">
              <span className="font-semibold">Movement:&nbsp;</span>
              {product.technology}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Dial:&nbsp;</span>
              {product.dial}
            </div>
            <div className="p-4 border-black">
              <span className="font-semibold">Year:&nbsp;</span>
              {product.year}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Strap:&nbsp;</span>
              {product.strap}
            </div>
          </div>
        </div>
      ) : null}
      {product?.type === "band" ? (
        <div className="mx-32 max-lg:mx-10">
          <div className="py-5 grid grid-cols-2 gap-x-5 max-md:grid-cols-1">
            <div className="md:hidden">
              <p className="font-thin">
                <span className="font-normal">Reference: </span>
                {product.ref}
              </p>
            </div>
            <div className="grid grid-rows-4 grid-flow-col md:gap-x-2 max-md:gap-y-5 max-md:gap-x-3 grid-cols-5 max-md:grid-flow-row max-md:grid-cols-4">
              <img
                onClick={() =>
                  product.img_url[0] ? setSelectImg(product.img_url[0]) : ""
                }
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[1] && "border"
                }`}
                src={product.img_url[1] ? product.img_url[0] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[1] ? setSelectImg(product.img_url[1]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[1] && "border"
                }`}
                src={product.img_url[1] ? product.img_url[1] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[2] ? setSelectImg(product.img_url[2]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[2] && "border"
                }`}
                src={product.img_url[2] ? product.img_url[2] : ""}
                alt=""
              />
              <img
                onClick={() => {
                  product.img_url[3] ? setSelectImg(product.img_url[3]) : "";
                }}
                className={`aspect-square object-cover rounded-md row-span-1 ${
                  product.img_url[3] && "border"
                }`}
                src={product.img_url[3] ? product.img_url[3] : ""}
                alt=""
              />
              <img
                className="aspect-square object-cover rounded-lg h-full row-span-4 col-span-4 max-md:order-first border border-black/10"
                src={selectImg ? selectImg : product.img_url[0]}
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
                <p className="font-thin pb-2 max-md:text-center">
                  {product.description}
                </p>
              </div>
              <div className="w-full flex max-md:justify-center">
                <div
                  onMouseLeave={() => {
                    !addedToCart && setShowPrice(true);
                  }}
                  className={`${
                    showPrice && "gap-x-3"
                  } max-md:h-[75px] flex justify-between items-center md:w-[60%] max-md:flex-col`}
                >
                  <div className="flex gap-x-2 items-center">
                    {showPrice && (
                      <p className="font-semibold">${product.price}.00</p>
                    )}
                    {showPrice &&
                      (liked ? (
                        <FcLike
                          size={24}
                          onClick={() => {
                            handleFavorite();
                          }}
                        />
                      ) : (
                        <VscHeart
                          size={24}
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
                      addedToCart
                        ? "bg-green-600 hover:bg-green-600 h-full"
                        : "bg-slate-400 hover:bg-slate-400/90"
                    }  font-thin hover:font-normal p-[10px] rounded-lg hover:h-full w-[300px] md:hidden`}
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
                      addedToCart
                        ? "bg-green-600 hover:bg-green-600 w-full"
                        : "bg-slate-400 hover:w-full hover:bg-slate-400/90"
                    }max-md:bg-blue-500 font-thin hover:font-normal flex-1 p-[10px] rounded-lg max-md:hidden`}
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
            <div className="w-[20%] h-full bg-gradient-to-r z-10 from-gray-800 via-[#97d0de] to-[#6AB1C2] via-[87%] flex justify-center items-center p-7">
              <p className="text-sm font-thin text-white">
                "Timex Timepieces: Unveiling Elegance, One Watch at a Time"
              </p>
            </div>
            <div className="w-[30%]">
              <img
                className="h-full w-full object-cover"
                src={
                  "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913745/fcw0putjjdlfktaqasgz.webp"
                }
                alt=""
              />
            </div>
            <div className="w-[25%] px-9 max-md:px-4 max-sm:px-1 font-thin flex items-center text-white bg-stone-600">
              <p>
                A pair of Cufflinks to go with your Timepeice for any event.
              </p>
            </div>
            <div className="w-[25%] flex items-center">
              <img
                className="h-full w-full object-cover"
                src={
                  "https://res.cloudinary.com/dbkctdxui/image/upload/v1693913731/y9jfyfh9qapprtzwf9kg.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="my-10 grid grid-cols-2 max-sm:grid-cols-1 max-sm:divide-y rounded-[3px] bg-stone-300">
            <div className="border-black p-4">
              <span className="font-semibold">Style:&nbsp;</span>
              {product.category}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Case:&nbsp;</span>
              {product.case}
            </div>
            <div className="p-4 border-black">
              <span className="font-semibold">Movement:&nbsp;</span>
              {product.technology}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Dial:&nbsp;</span>
              {product.dial}
            </div>
            <div className="p-4 border-black">
              <span className="font-semibold">Year:&nbsp;</span>
              {product.year}
            </div>
            <div className="bg-white/30"></div>
            <div className="bg-white/30"></div>
            <div className="p-4 flex justify-end border-black">
              <span className="font-semibold">Strap:&nbsp;</span>
              {product.strap}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
