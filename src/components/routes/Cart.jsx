import React, { useEffect, useState } from 'react'
import {IoMdHeartEmpty} from 'react-icons/io'
import { API_URL, TOKEN_KEY } from '../../services/apiService'
import axios from 'axios'

const Cart = () => {

    const [cartAr, setCartAr] = useState([])

    const getCartItems = async() => {
        const url = API_URL + "/users/cart"
        const {data} = await axios({
            url:url,
            method:"GET",
            headers:{
                "x-api-key":localStorage[TOKEN_KEY]
            }
        });
        setCartAr(data);
    }

    useEffect(() => {
        getCartItems();
    }, [])
    
  return (
    <div className=''>
        <div className="m-16">
            <h1 className='text-4xl font-thin'>Shopping Bag</h1>
            <div className="mt-10">
                {cartAr.map((item, i) => (
                    <div key={i} className='grid grid-cols-8 grid-rows-2 my-4 gap-x-6 border-black/20 border p-5 rounded-xl'>
                    <img className='row-span-2 col-span-1' src={item.img_url} alt="" />
                    <div className='col-span-4 row-span-1'>
                        <h3 className='text-xl'>{item.name}</h3>
                        <h4>{item.company}</h4>
                    </div>
                    <div className='row-span-1 row-start-2 col-start-2 flex flex-col justify-end'>
                        <p className='font-semibold text-slate-500'>${item.price}</p>
                    </div>
                    <div className='col-start-7 col-span-2 flex items-center'>
                        <button className='flex items-center border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold'>Favorite &nbsp; <IoMdHeartEmpty className='mt-[3px]'/></button>
                    </div>
                    <div className='col-start-7 flex items-center'>
                        <button className='border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold w-32'>Remove</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Cart