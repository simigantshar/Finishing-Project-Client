import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { API_URL } from "../../services/apiService";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();

  const onSub = (bodyData) => {
    console.log(bodyData);
    apiSignUp(bodyData);
  };

  const apiSignUp = async (bodyData) => {
    const url = API_URL + "/users";
    const { data } = await axios({
      url: url,
      method: "POST",
      data: bodyData,
    });
    console.log(data);
    nav("/creatingAccount");
  };

  return (
    <div className="md:h-[550px] md:flex relative">
      <div className="md:w-[44%] h-full max-md:py-20 bg-orange-100 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSub)} action="">
          <div className="flex flex-col items-center">
            <div>
              <h2 className="font-semibold text-4xl">Create Account:</h2>
            </div>
            <div className="flex flex-col w-full font-semibold mt-8">
              <label htmlFor="">Name:</label>
              {errors.name && (
                <p className="text-red-500 text-sm -mt-1 -mb-px">
                  {errors.name.message}
                </p>
              )}
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your full name!",
                  },
                  minLength: { value: 5, message: "Name too short!" },
                  maxLength: {
                    value: 35,
                    message: "Name must not exceed 35 letter's!",
                  },
                  pattern: {
                    value: /^[A-Za-z]+ [A-Za-z]+$/,
                    message: "Fullname is required!",
                  },
                })}
                placeholder="Full Name.."
                type="text"
                className="rounded px-1 py-px h-[33px]"
              />
              <label htmlFor="" className="mt-2">
                Email:
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm -mt-1 -mb-px">
                  {errors.email.message}
                </p>
              )}
              <input
                {...register("email", {
                  required: { value: true, message: "Email is required!" },
                  minLength: { value: 2, message: "Email too short!" },
                  maxLength: {
                    value: 35,
                    message: "Email must not exceed 35 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email invalid!",
                  },
                })}
                placeholder="example@gmail.com"
                type="email"
                className="rounded px-1 py-px h-[33px]"
              />
              <label htmlFor="" className="mt-2">
                Password:
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm -mt-1 -mb-px">
                  {errors.password.message}
                </p>
              )}
              <input
                {...register("password", {
                  required: { value: true, message: "Password is required!" },
                  minLength: { value: 8, message: "Password too short!" },
                  maxLength: {
                    value: 30,
                    message: "Password must not exceed 30 characters",
                  },
                })}
                placeholder="Password.."
                type="password"
                className="rounded px-1 py-px h-[33px]"
              />
              <div className="flex justify-between mt-4 mr-1">
                <label htmlFor="">Sign Up</label>
                <button className="bg-[#6e5a45] text-white w-[50px] hover:bg-[#605448] flex justify-center items-center rounded-full">
                  <HiOutlineArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-white/0 h-full w-[15vw] -mr-[15vw] z-10"></div>
      <div className="bg-gray-100 h-full w-[56%] max-md:w-[100vw]">
        <img
          className="object-cover object-right h-full w-full"
          src={"https://res.cloudinary.com/dbkctdxui/image/upload/v1693913798/tg3phfsjbponahpm2yxg.jpg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
