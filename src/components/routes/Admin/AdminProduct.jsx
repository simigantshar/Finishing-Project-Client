import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getApiMethod } from "../../../services/apiService";

const AdminProduct = ({ products }) => {
  const { _id } = useParams();
  const product = products.find((item) => item._id === _id);

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
    setImgUrl([product?.img_url]);
    setPrice(product?.price);
    setType(product?.type);
  }, [product]);

  const onSub = (bodyData) => {
    console.log(bodyData);
    updateData(bodyData);
  };

  console.log(errors);

  const updateData = async (bodyData) => {
    try {
      await getApiMethod("/watches/" + _id, "PUT", bodyData);
    } catch (error) {
      console.log("server error:", error.response.data[0]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSub)} action="">
        <div className="mx-20 my-10 grid grid-cols-3 max-lg:grid-cols-1 gap-5 bg-gray-100 p-6 rounded">
          <img
            src={product?.img_url}
            className="rounded-l max-h-[600px] w-full h-full object-cover"
            alt=""
          />

          <div className="bg-white p-4">
            <label htmlFor="" className="font-semibold">
              Name:
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              {...register("name", {
                required: {
                  value: true,
                  message: "Name required!",
                },
                minLength: { value: 2, message: "Name too short!" },
                maxLength: {
                  value: 200,
                  message: "Name limit is 200!",
                },
                pattern: {
                  value: /^[A-Z].*$/,
                  message: "Name dosen't meet requirements!",
                },
              })}
              disabled={!edit}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Family:
              {errors.family && (
                <p className="text-red-500">{errors.family.message}</p>
              )}
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              {...register("family", {
                required: {
                  value: false,
                },
                minLength: { value: 2, message: "Family too short!" },
                maxLength: {
                  value: 200,
                  message: "Family limit is 200!",
                },
                pattern: {
                  value: /^[A-Z].*$/,
                  message: "Family dosen't meet requirements!",
                },
              })}
              disabled={!edit}
              value={family}
              onChange={(e) => setFamily(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Company:
              {errors.company && (
                <p className="text-red-500">{errors.company.message}</p>
              )}
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              {...register("company", {
                required: {
                  value: true,
                  message: "company required!",
                },
                minLength: { value: 2, message: "company too short!" },
                maxLength: {
                  value: 200,
                  message: "company limit is 200!",
                },
                pattern: {
                  value: /^[A-Z].*$/,
                  message: "company dosen't meet requirements!",
                },
              })}
              disabled={!edit}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Description:
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </label>
            <textarea
              className={`${
                edit && "border"
              } border-b border-l w-full scroll-smooth bg-white h-[75px] max-h-[300px] border-black px-1`}
              {...register("description", {
                required: {
                  value: true,
                  message: "description required!",
                },
                minLength: { value: 2, message: "description too short!" },
                maxLength: {
                  value: 800,
                  message: "description limit is 800!",
                },
                pattern: {
                  value: /^[A-Z].*$/,
                  message: "description dosen't meet requirements!",
                },
              })}
              value={description}
              disabled={!edit}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              REF:
              {errors.ref && (
                <p className="text-red-500">{errors.ref.message}</p>
              )}
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              {...register("ref", {
                required: {
                  value: true,
                  message: "ref required!",
                },
                minLength: { value: 2, message: "ref too short!" },
                maxLength: {
                  value: 50,
                  message: "ref limit is 50!",
                },
              })}
              disabled={!edit}
              value={ref}
              onChange={(e) => setRef(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Year:
              {errors.year && (
                <p className="text-red-500">{errors.year.message}</p>
              )}
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              {...register("year", {
                required: {
                  value: true,
                  message: "year required!",
                },
                min: { value: 1800, message: "year too small!" },
                max: {
                  value: 2100,
                  message: "year limit is 2100!",
                },
              })}
              type="number"
              disabled={!edit}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Category:
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              {...register("category", {
                required: {
                  value: true,
                  message: "category required!",
                },
                minLength: { value: 2, message: "category too short!" },
                maxLength: {
                  value: 50,
                  message: "category limit is 50!",
                },
                pattern: {
                  value: /^[A-Z].*$/,
                  message: "category dosen't meet requirements!",
                },
              })}
              disabled={!edit}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Movement:
              {errors.technology && (
                <p className="text-red-500">{errors.technology.message}</p>
              )}
            </label>
            <input
              className={`${
                edit && "border"
              } bg-white w-full border-black px-1`}
              {...register("technology", {
                required: {
                  value: true,
                  message: "technology required!",
                },
                minLength: { value: 2, message: "technology too short!" },
                maxLength: {
                  value: 50,
                  message: "technology limit is 50!",
                },
                pattern: {
                  value: /^[A-Z].*$/,
                  message: "technology dosen't meet requirements!",
                },
              })}
              disabled={!edit}
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            />
          </div>
          <div className="p-4 bg-white rounded-r flex flex-col justify-between">
            <div>
              <label htmlFor="" className="font-semibold">
                Country:
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )}
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                {...register("country", {
                  required: {
                    value: true,
                    message: "country required!",
                  },
                  minLength: { value: 2, message: "country too short!" },
                  maxLength: {
                    value: 50,
                    message: "country limit is 50!",
                  },
                  pattern: {
                    value: /^[A-Z].*$/,
                    message: "country dosen't meet requirements!",
                  },
                })}
                disabled={!edit}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Strap:
                {errors.strap && (
                  <p className="text-red-500">{errors.strap.message}</p>
                )}
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                {...register("strap", {
                  required: {
                    value: true,
                    message: "strap required!",
                  },
                  minLength: { value: 2, message: "strap too short!" },
                  maxLength: {
                    value: 50,
                    message: "strap limit is 50!",
                  },
                  pattern: {
                    value: /^[A-Z].*$/,
                    message: "strap dosen't meet requirements!",
                  },
                })}
                disabled={!edit}
                value={strap}
                onChange={(e) => setStrap(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Case:
                {errors.case && (
                  <p className="text-red-500">{errors.case.message}</p>
                )}
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                {...register("case", {
                  required: {
                    value: true,
                    message: "case required!",
                  },
                  minLength: { value: 2, message: "case too short!" },
                  maxLength: {
                    value: 100,
                    message: "case limit is 100!",
                  },
                  pattern: {
                    value: /^[A-Z].*$/,
                    message: "case dosen't meet requirements!",
                  },
                })}
                disabled={!edit}
                value={shell}
                onChange={(e) => setShell(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Dial:
                {errors.dial && (
                  <p className="text-red-500">{errors.dial.message}</p>
                )}
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                {...register("dial", {
                  required: {
                    value: true,
                    message: "dial required!",
                  },
                  minLength: { value: 2, message: "dial too short!" },
                  maxLength: {
                    value: 100,
                    message: "dial limit is 100!",
                  },
                  pattern: {
                    value: /^[A-Z].*$/,
                    message: "dial dosen't meet requirements!",
                  },
                })}
                disabled={!edit}
                value={dial}
                onChange={(e) => setDial(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Image URL:
                {errors.img_url && (
                  <p className="text-red-500">{errors.img_url.message}</p>
                )}
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                {...register("img_url", {
                  required: {
                    value: true,
                    message: "image URL required!",
                  },
                  minLength: { value: 1, message: "image URL too short!" },
                  maxLength: {
                    value: 10000,
                    message: "image URL limit is 10000!",
                  },
                })}
                disabled={!edit}
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Price:
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </label>
              <input
                className={`${
                  edit && "border"
                } bg-white w-full border-black px-1`}
                {...register("price", {
                  required: {
                    value: true,
                    message: "price required!",
                  },
                  min: { value: 1, message: "price too short!" },
                  max: {
                    value: 1000000,
                    message: "price limit is 1000000!",
                  },
                })}
                value={price}
                disabled={!edit}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="" className="font-semibold">
                Type:
                {errors.type && (
                  <p className="text-red-500">{errors.type.message}</p>
                )}
              </label>
              <select
                name="type" // Provide a name attribute for the select element to include it in form submissions
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`${
                  edit && "border"
                } w-full bg-white border-black px-1`}
                disabled={!edit}
              >
                <option value="watch">Watch</option>
                <option value="band">Strap</option>
                <option value="cufflink">Cufflinks</option>
              </select>
            </div>
            <div className="max-lg:mt-8 w-[90%] h-10 mx-auto flex justify-between">
              <button
                type="button"
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
