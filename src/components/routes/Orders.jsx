import React from "react";
import { getApi } from "../../services/apiService";
import { useEffect, useState } from "react";

const Orders = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([])

  const getOrders = async () => {
    setRecentOrders(await getApi("/users/recentOrder"));
    setOrderHistory(await getApi("/users/orderHistory"))
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="">
      <div className="m-20">
        <h1 className="text-3xl font-thin">Recent Orders:</h1>
        <div className="mt-5 grid gap-y-3">
          {recentOrders.map((item, i) => (
            <div key={i} className="border flex rounded-xl md:w-[70%]">
              <img className="w-[180px]" src={item.img_url} alt="" />
              <div className="p-2">
                <p className=" text-xl font-thin">{item.name}</p>
                <p className="">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-thin mt-10">All Orders:</h1>
        <div className="mt-5 grid gap-y-3">
          {orderHistory.map((item, i) => (
            <div key={i} className="border flex rounded-xl md:w-[70%]">
              <img className="w-[180px]" src={item.img_url} alt="" />
              <div className="p-2">
                <p className=" text-xl font-thin">{item.name}</p>
                <p className="">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
