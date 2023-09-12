import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminProduct = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((item) => item._id === productId);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [edit, setEdit] = useState(false);

  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [ref, setRef] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [technology, setTechnology] = useState("");
  const [country, setCountry] = useState("");
  const [strap, setStrap] = useState("");
  const [shell, setShell] = useState("");
  const [dial, setDial] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setName(product?.name);
    setCompany(product?.company);
    setFamily(product?.family);
    setDescription(product?.description);
    setRef(product?.ref);
    setYear(product?.year);
    setCategory(product?.category);
    setTechnology(product?.technology);
    setCountry(product?.country);
    setStrap(product?.strap);
    setShell(product?.case);
    setDial(product?.dial);
    setImgUrl(product?.img_url);
    setPrice(product?.price);
    setType(product?.type);
  }, [product]);

  const onSub = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSub)} action="">
        <div className="mx-20 my-10 grid grid-cols-3 gap-5 bg-gray-100 p-6 rounded">
          <img
            src={product?.img_url}
            className="rounded-l max-h-[500px] h-full object-cover"
            alt=""
          />

          <div className="bg-white p-4">
            <label htmlFor="" className="font-semibold">
              Name:
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              disabled={!edit}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Family:
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              disabled={!edit}
              value={family}
              onChange={(e) => setFamily(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Company:
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              disabled={!edit}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Description:
            </label>
            <textarea
              className={`${
                edit && "border"
              } border-b border-l w-full scroll-smooth bg-white h-[75px] max-h-[300px] border-black px-1`}
              value={description}
              disabled={!edit}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              REF:
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              disabled={!edit}
              value={ref}
              onChange={(e) => setRef(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Year:
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              disabled={!edit}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Category:
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              disabled={!edit}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Movement:
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              disabled={!edit}
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            />
          </div>
          <div className="p-4 bg-white rounded-r flex flex-col justify-between">
            <div>
              <label htmlFor="" className="font-semibold">
                Country:
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                disabled={!edit}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Strap:
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                disabled={!edit}
                value={strap}
                onChange={(e) => setStrap(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Case:
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                disabled={!edit}
                value={shell}
                onChange={(e) => setShell(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Dial:
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                disabled={!edit}
                value={dial}
                onChange={(e) => setDial(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Image URL:
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                disabled={!edit}
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Price:
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                value={price}
                disabled={!edit}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Type:
              </label>
              <input
                className={`${
                  edit && "border"
                } w-full bg-white border-black px-1`}
                value={type}
                disabled={!edit}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="w-[90%] h-10 mx-auto flex justify-between">
              <button
                className={`${
                  edit
                    ? "bg-red-400 hover:bg-red-500"
                    : "bg-blue-500 hover:bg-blue-600"
                } border text-white font-semibold rounded px-7`}
                onClick={() => setEdit(!edit)}
              >
                {edit ? "Cancel" : "Edit"}
              </button>
              <button className="bg-green-500 font-semibold hover:bg-green-600 border text-white rounded px-7">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminProduct;
