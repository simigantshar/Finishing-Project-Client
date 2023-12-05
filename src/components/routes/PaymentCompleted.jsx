import React, { useEffect, useState } from "react";
import { getApi } from "../../services/apiService";
import { BsCartCheckFill } from "react-icons/bs";

const PaymentCompleted = () => {
  const [receipt, setReceipt] = useState([]);

  const getCart = async () => {
    const data = await getApi("/users/recentOrder");
    setReceipt(data);
  };
  
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="mx-20 my-10 gap-x-6 md:flex">
      <div className="md:w-[80%] lg:w-[50%] border rounded p-3">
        <p className="text-xl">Receipt</p>
        <div className="mt-3 grid gap-1">
          {receipt.map((item) => (
            <div key={item._id} className="border rounded p-2 grid gap-2">
              <p>
                {item.company} {item.name}
              </p>
              <div className="flex justify-between">
                <p>${item.price}.00</p>
                <p className="text-black/50">{item.ref}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[80%] lg:w-[50%] max-md:pt-4 flex justify-end items-end">
        <div className="border w-full h-full flex flex-col items-center p-8 gap-y-4">
            <h2 className="text-2xl font-thin">Your order was placed!</h2>
            <BsCartCheckFill className="h-full bg-green-500 p-3 rounded-box" color="white" size={"300px"} />
        </div>
      </div>
    </div>
  );
};

export default PaymentCompleted;
