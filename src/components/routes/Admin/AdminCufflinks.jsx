import React from "react";
import { Link } from "react-router-dom";

const AdminCufflinks = ({ cufflinks }) => {
  return (
    <div className="m-20">
      <div className=""></div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 max-md:grid-cols-2 gap-5">
        {cufflinks.map((item, i) => (
          <article key={i}>
            <Link
              to={"/admin/product/" + item._id}
              className="h-[330px] flex flex-col justify-between border rounded-lg"
            >
              <img
                className="aspect-square object-cover p-2 rounded-xl"
                src={item.img_url[0]}
                alt=""
              />
              <div className="w-full flex flex-col h-full justify-between my-4 items-center">
                <p className="text-center">{item.name}</p>
                <p>${item.price}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AdminCufflinks;
