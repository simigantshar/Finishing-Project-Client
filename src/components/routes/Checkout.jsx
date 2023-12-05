import React, { useEffect, useState } from "react";
import { getApi } from "../../services/apiService";
import { PiCaretRightThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  const nav = useNavigate();

  const getCart = async () => {
    const data = await getApi("/users/cart");
    setCart(data);
    let totalV = 0;
    let amountV = 0;
    for (let obj of data) {
      totalV += obj.price;
      amountV++;
    }
    setTotal(totalV);
    setAmount(amountV);
    console.log(data[0]);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="mx-20 my-10 md:flex">
      <div className="md:w-[80%] lg:w-[50%]  border rounded p-3">
        <p className="text-xl">
          Checkout <span className="font-semibold">({amount})</span> items!
        </p>
        <div className="mt-3 grid gap-1">
          {cart.map((item) => (
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
        <p className="mt-2">
          Total: <span className="font-semibold">${total}.00</span>
        </p>
      </div>
      <div className="md:w-[50%] max-md:pt-4 flex justify-end items-end">
      <button onClick={() => nav("/payment ")} className="font-thin text-xl hover:text-[#b8994b] flex items-center">Proceed<PiCaretRightThin className="mt-[4.5px]"/></button>
      </div>
    </div>
  );
};

export default Checkout;
