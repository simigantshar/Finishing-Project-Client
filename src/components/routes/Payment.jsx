import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { getApiMethod } from "../../services/apiService";

const Payment = () => {
  const nav = useNavigate();
  const [payLoad, setPayLoad] = useState(false);

  const implementOrder = async () => {
    await getApiMethod("/users/implementOrder", "PATCH");
  };

  return (
    <div>
      <div className="mx-16 my-8">
        <div>
          <h1 className="text-lg font-semibold">Payment Information:</h1>
          <p className="text-sm">All transactions are secure and encrypted.</p>
          <div className="w-[50%] bg-gray-100 grid gap-y-2 p-5 text-sm font-semibold border border-black/60 rounded mt-5">
            <div className="grid grid-cols-5 items-center gap-x-4">
              <div className="px-3 py-1.5 flex justify-center items-center rounded-lg bg-gray-900">
                <img
                  className="h-[25px]"
                  src="https://res.cloudinary.com/dbkctdxui/image/upload/v1700390645/brns3lefqzpy7jre8j81.png"
                  alt=""
                />
              </div>
              <div className="rounded-lg bg-yellow-400 h-full flex items-center px-3 py-1.5">
                <img
                  className=""
                  src="https://res.cloudinary.com/dbkctdxui/image/upload/v1700390657/o6jx1smaukkihvmown1o.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Card number"
                className="border border-black p-2 rounded-md"
              />
            </div>
            <div className="flex gap-x-2">
              <input
                type="text"
                placeholder="Expiration date (mm/yy)"
                className="border border-black p-2 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Secuirty code"
                className="border border-black p-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name on card"
                className="border border-black p-2 rounded-md"
              />
            </div>
          </div>
          <div className="mt-7">
            <h2 className="font-semibold text-lg">Shipping:</h2>
          </div>
          <div className="bg-gray-100 w-[50%] border grid grid-cols-6 gap-2 p-5 mt-5 border-black rounded ">
            <select
              name=""
              id=""
              className="border col-span-full border-black rounded p-2"
            >
              <option value="">United states</option>
              <option value="">Canada</option>
              <option value="">United states</option>
            </select>
            <input
              type="text"
              className="border col-span-3 border-black rounded p-2"
              placeholder="First name"
            />
            <input
              type="text"
              className="border col-span-3 border-black rounded p-2 "
              placeholder="Last name"
            />
            <input
              type="text"
              className="border border-black rounded p-2 col-span-full"
              placeholder="Company (optional)"
            />
            <input
              type="text"
              className="border border-black rounded p-2 col-span-full"
              placeholder="Address"
            />
            <input
              type="text"
              className="border border-black rounded p-2 col-span-full"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <input
              type="text"
              className="border border-black rounded p-2 col-span-2"
              placeholder="City"
            />
            <select
              name=""
              id=""
              className="border col-span-2 border-black rounded p-2"
            >
              <option value="">State</option>
              <option value="">United states</option>
              <option value="">Canada</option>
              <option value="">United states</option>
            </select>
            <input
              type="text"
              className="border border-black rounded p-2 col-span-2"
              placeholder="Postal code"
            />
            <input
              type="text"
              className="border border-black rounded p-2 col-span-full"
              placeholder="Phone"
            />
          </div>
          <div className="w-[50%] mt-4">
            <button
              className={`${
                !payLoad && "bg-yellow-400 hover:bg-yellow-300"
              } w-full flex justify-center items-center rounded-lg h-[43px] font-semibold text-lg`}
              onClick={() => {
                setPayLoad(true);
                implementOrder();
                setTimeout(() => {
                  setPayLoad(false);
                  nav("/paymentCompleted");
                }, 3000);
              }}
            >
              {payLoad ? (
                <SyncLoader className="" size={11} color="#111827" />
              ) : (
                "Pay Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
