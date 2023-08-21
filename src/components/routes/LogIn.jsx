import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiShowAlt } from "react-icons/bi";
import { API_URL, TOKEN_KEY, getApi } from "../../services/apiService";

const LogIn = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const onSub = (bodyData) => {
    console.log(bodyData);
    apiLogin(bodyData);
  };

  const example = async () => {
    const url = API_URL + "/users/checkToken";
    const { data } = await axios({
      url: url,
      method: "GET",
      headers: {
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMyNDZjMDE0NWFhMWUyNWIwMGFhYTciLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTY5MTU3OTA4MCwiZXhwIjoxNjkxNTgyNjgwfQ.FAFvzaMhaStlQIBpsFFk0SD-XZCKM77aMGBjDxGVRD4",
      },
    });
    console.log(data);
  };

  useEffect(() => {
    example();
  }, []);

  const apiLogin = async (bodyData) => {
    try {
      const url = API_URL + "/users/login";
      const { data } = await axios({
        url: url,
        method: "POST",
        data: bodyData,
      });

      if (data.token) {
        localStorage.setItem(TOKEN_KEY, data.token);

        const roleUrl = API_URL + "/users/checkToken";
        const roleResponse = await axios({
          url: roleUrl,
          method: "GET",
          headers: {
            "x-api-key": localStorage[TOKEN_KEY],
          },
        });
        console.log(roleResponse);
        const roleData = roleResponse.data; // Assuming roleData is a property of the response
        if (roleData.role === "superadmin" || roleData.role === "admin") {
          nav("/adminLogIn");
        } else {
          window.location.href = "/";
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ height: "calc(100vh - 100px" }}
      className="bg-[#8ed6fa] flex justify-center items-center"
    >
      <div className="w-[80vw]">
        <form
          onSubmit={handleSubmit(onSub)}
          action=""
          className="ml-[20px] w-[40%]"
        >
          <h1 className="text-5xl font-[350]">Log In:</h1>
          <div className="flex flex-col mt-[23px] font-semibold text-xl">
            <label htmlFor="">Email:</label>
            {errors.email && (
              <p className="text-yellow-700 text-xs">{errors.email.message}</p>
            )}
            <input
              {...register("email", {
                required: { value: true, message: "Email is required!" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email!",
                },
              })}
              type="text"
              placeholder="email.."
              className="rounded text-lg px-1 h-10"
            />
            <label htmlFor="" className="mt-3">
              Password:
            </label>
            {errors.password && (
              <p className="text-yellow-700 text-xs">
                {errors.password.message}
              </p>
            )}
            <div className="flex items-center">
              <input
                {...register("password", {
                  required: { value: true, message: "Password is required!" },
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters!",
                  },
                  maxLength: { value: 30, message: "Password too long!" },
                })}
                type={show ? "text" : "password"}
                placeholder="password.."
                className="w-full text-lg rounded px-1 h-10"
              />
              <BiShowAlt
                className={`-ml-6 ${show ? "text-[#8ED6FA]" : "text-black/50"}`}
                onClick={() => setShow(!show)}
              />
            </div>
            <div className="text-sm">
              <p>
                New to volare horlogerie? Create an account{" "}
                <Link to={"/signUp"}>
                  <span className="underline hover:text-blue-600 text-yellow-700">here</span>
                </Link>
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <button className="rounded-lg font-bold py-[4.5px] bg-[#947741] hover:bg-white w-[120px]">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
