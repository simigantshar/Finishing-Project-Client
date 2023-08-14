import React from 'react'
import {IoMdHeartEmpty} from 'react-icons/io'

const Cart = () => {
  return (
    <div className=''>
        <div className="m-16">
            <h1 className='text-4xl font-thin'>Shopping Bag</h1>
            <div className="mt-10">
                <div className='grid grid-cols-8 grid-rows-2 gap-x-6 border-black/20 border p-5 rounded-xl'>
                    <img className='row-span-2 col-span-1' src="https://mrjoneswatches.com/cdn/shop/products/103-V0-A-Perfectly-Useless-Afternoon_menu_1_600x600_crop_center.jpg?v=1623140580" alt="" />
                    <div className='col-span-4 row-span-1'>
                        <h3 className='text-xl'>Zaria XVI Watch Cufflinks</h3>
                        <h4>Jacob & Co.</h4>
                    </div>
                    <div className='row-span-1 row-start-2 col-start-2 flex flex-col justify-end'>
                        <p className='font-semibold text-slate-500'>$677.00</p>
                    </div>
                    <div className='col-start-7 col-span-2 flex items-center'>
                        <button className='flex items-center border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold'>Favorite &nbsp; <IoMdHeartEmpty className='mt-[3px]'/></button>
                    </div>
                    <div className='col-start-7 flex items-center'>
                        <button className='border hover:border-gray-400 hover:text-gray-600 border-black px-3 py-1 rounded-md text-lg font-semibold w-32'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart