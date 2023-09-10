import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Watches = ({ watches }) => {

  const featured = watches.filter((item) => ["649a9f904105da10514dd622", "64a2a8cd322cc7edf2cfee02", "649bdb904e47fd3964acf63c", "649bd7494e47fd3964acf61c"].includes(item._id));

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="">
      <div className="">
        <img
          className="object-cover w-[100vw] h-[350px] -z-10 absolute"
          src={"https://res.cloudinary.com/dbkctdxui/image/upload/v1693913618/him5kwn4n8ghzkrojjvl.webp"}
          alt=""
        />
        <div className="h-[350px] w-[30%] text-white flex flex-col items-center justify-center">
          <div className="text-center rounded-2xl max-lg:hidden">
            <p className="text-3xl">Rolex</p>
            <p className="text-4xl hover:underline underline-offset-[5px] ">
              Day-Date
            </p>
            <p className="mt-5 tracking-[4px]">Every dial a discovery</p>
          </div>
        </div>
        {/*  */}
        <div className="text-center rounded-2xl pt-5 lg:hidden">
          <p className="text-3xl">Rolex</p>
          <p className="text-4xl hover:underline underline-offset-[4px] ">
            Day-Date
          </p>
          <p className="mt-5 tracking-[4px]">Every dial a discovery</p>
        </div>
      </div>
      {/*  */}
      <div className="p-16">
        <h4 className="text-3xl ml-4 mb-8">Explore Our Refined Timepieces</h4>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 p-1">
          {featured.map((item, i) => (
            <article key={i} className="bg-white p-3 rounded-3xl shadow-md hover:shadow-xl duration-300">
              <Link to={"/product/" + item._id}>
              <div>
                <img
                  className="h-[200px] w-full object-contain"
                  src={item.img_url}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center h-[115px]">
                <p className="text-center font-semibold leading-[24px] tracking-[1px]">
                  {item.name}
                  
                </p>
              </div></Link>
            </article>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="bg-gradient-to-t from-slate-500 from-20% via-slate-400 to-[#ececea] h-[500px]"></div>
      <div className="bg-gradient-to-t from-[#ececea] from-0% via-slate-400 to-slate-500 to-80% -mb-[351px] h-[750px]"></div>
      {/*  */}
      <div className="-z-10 relative">
        <img
          src={"https://res.cloudinary.com/dbkctdxui/image/upload/v1693913771/ko0w1lh0yswxpzafdhky.jpg"}
          className="gradient-to-b from-black to-slate-500"
          alt=""
        />
      </div>
      <div className="-mt-[200px] h-[200px] bg-gradient-to-b from-black/0 to-[#ececea]"></div>
      {/*  */}
      <div className="p-20 bg-[#ececea]">
        <h4 className="text-3xl ml-4 mb-8">All Timepieces</h4>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          {watches.map((item, i) => (
            <article
              key={i}
              className="bg-white p-3 rounded-2xl shadow-md hover:shadow-2xl duration-300"
            >
              <Link to={"/product/" + item._id}>
                <div>
                  <img
                    className="h-[200px] w-full object-contain"
                    src={item.img_url}
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

export default Watches;
