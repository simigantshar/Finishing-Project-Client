import React from "react";
import { Link, useParams } from "react-router-dom";
import startCase from "lodash/startCase";

const Brand = ({ watches }) => {
  const params = useParams();
  const brand = watches.filter((item) =>
    item.company.toLowerCase().includes(params.brand)
  );

  return (
    <div className="">
      <div className="">
        <img
          className="object-cover w-[100vw] h-[580px]"
          src={
            "https://res.cloudinary.com/dbkctdxui/image/upload/v1696846086/im-25705644_tbitq9.avif"
          }
          alt=""
        />
        {/*  */}
        <div className="text-center rounded-2xl pt-5">
          <p className="text-7xl">Shop By Brand</p>
          <p className="mt-5 tracking-[4px]">
            In our exclusive online watch boutique, you'll find
            <br />
            an exquisite array of luxury brands for your discerning taste.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="p-16">
        <h4 className="text-3xl ml-4 mb-8">
          Explore Our {startCase(params.brand)} Watches
        </h4>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 p-1">
          {brand.map((item, i) => (
            <article
              key={i}
              className="bg-white p-3 rounded-3xl shadow-md hover:shadow-xl duration-300"
            >
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
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
