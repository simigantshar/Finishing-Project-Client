import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userLoggedIn from "../img/userLoggedIn.png";
import { BiPen } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
import { HiOutlineX } from "react-icons/hi";
import { API_URL, TOKEN_KEY } from "../../services/apiService";

const Account = () => {

  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    try {
      const url = API_URL + "/users/userInfo";
      const { data } = await axios({
        url: url,
        method: "GET",
        headers: {
          "x-api-key": localStorage[TOKEN_KEY],
        },
      });
      setUserInfo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const nav = useNavigate();

  const [editName, setEditName] = useState(false);
  const [nameValue, setNameValue] = useState(userInfo.name);
  console.log(userInfo.name);

  //     const [editEmail, setEditEmail] = useState(false);
  //     const [emailValue, setEmailValue] = useState('sgantshar@gmail.com')

  const handleInputChange = (event) => {
    setNameValue(event.target.value);
  };

  //   const handleEditToggle = (event) => {
  //     if (editName) {
  //       setEditName(false);
  //     } else {
  //       setEditName(true);
  //     }
  //   };

  const logOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/";
  };

  return (
    <div>
      <div className="m-[70px]">
        <div className="flex">
          <div className="bg-gray-200 rounded-s-full h-[75px] w-fit pr-7 rounded-e-[3000px] flex items-center">
            <img src={userInfo.pfp? userInfo.pfp : userLoggedIn} className="h-[90px]" alt="" />
            <input
              type="text"
              value={userInfo.name}
              //   disabled={!editName}
              //   value={"d"}
              onChange={handleInputChange}
              //   style={editName ? { backgroundColor: 'white', borderRadius:"3px", border:"solid black 1px" } : null}
              className="ml-4 px-1 text-2xl font-semibold bg-gray-200 placeholder-black"
            />
            {/* {editName &&             */}
            <button className="ml-2" /*onClick={handleEditToggle}*/>
              <FiCheck className="hover:text-green-700" size={28} />
            </button>
            {/* } */}
          </div>
          {/* {!editName && <BiPen
            onClick={handleEditToggle}
            color={editName? 'gray' : null}
            size={21}
            className='bg-white p-px -ml-[21px] hover:text-gray-600'
          />} */}
        </div>
        <div className="mt-[50px] flex flex-col w-[430px]">
          <label htmlFor="" className="font-semibold text-xl">
            Email:
          </label>
          <div className="w-full flex">
            <input
              type="text"
              value={userInfo.email}
              /*onChange={() => setEmailValue()} value={emailValue}*/ className="bg-gray-200 p-1 rounded-md font-semibold w-full"
            />
            <BiPen
              /*onClick={() => setEmailValue()}*/
              /*color={editName? 'gray' : null}*/
              size={16}
              className="bg-white p-px -ml-[16px] hover:text-gray-600"
            />
          </div>
        </div>
        <div className="mt-20 border-y border-black">
          <button onClick={logOut} className="text-lg hover:bg-gray-100 p-3">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;

{
  /* <div>
      <div className='m-[70px]'>
        <div className='flex'>
          <div className='bg-gray-200 rounded-s-full h-[75px] w-fit pr-7 rounded-e-[3000px] flex items-center'>
            <img src={userLoggedIn} className='h-[90px]' alt='' />
            <input
              type='text'
              disabled={!editName}
              value={"d"} 
              onChange={handleInputChange}
              style={editName ? { backgroundColor: 'white', borderRadius:"3px", border:"solid black 1px" } : null}
              className='ml-4 px-1 text-2xl font-semibold bg-gray-200 placeholder-black'
            />
            {editName &&            
              <button className='ml-2' onClick={handleEditToggle}>
                <FiCheck className='hover:text-green-700' size={28} />
              </button>
            }
          </div>
            {!editName && <BiPen
            onClick={handleEditToggle}
            color={editName? 'gray' : null}
            size={21}
            className='bg-white p-px -ml-[21px] hover:text-gray-600'
          />}
          
        </div>
        <div className="mt-[50px] flex flex-col w-[430px]">
            <label htmlFor="" className='font-semibold text-xl'>Email:</label>
            <div className='w-full flex'>
            <input type="text" onChange={() => setEmailValue()} value={emailValue} className='bg-gray-200 p-1 rounded-md font-semibold w-full' />
            <BiPen
            onClick={() => setEmailValue()}
            color={editName? 'gray' : null}
            size={16}
            className='bg-white p-px -ml-[16px] hover:text-gray-600'
            />
            </div>
        </div>
        <div className="mt-20 border-y border-black">
            <button onClick={logOut} className='text-lg hover:bg-gray-100 p-3'>Log Out</button>
        </div>
      </div>
    </div> */
}
