import React from 'react'
import { Link } from 'react-router-dom'

const Chronograph = ({watches}) => {

    const chronographWatches = watches.filter((item) => item.description.toLowerCase().includes("chronograph"))

  return (
    <div className="">
      <div className="">
        <img
          className="object-cover w-[100vw] h-[580px] -z-10 absolute"
          src={'https://res.cloudinary.com/dbkctdxui/image/upload/v1694290640/stpxh2yqcqp9nauzdnfq.webp'}
          alt=""
        />
        <div className="h-[580px] w-[40%] text-white flex flex-col items-center justify-center">
          <div className="text-center rounded-2xl max-lg:hidden">
            <p className="text-4xl hover:underline underline-offset-[5px]">Chronograph</p>
            <p className="text-3xl">
              Precision
            </p>
            <p className="mt-5 text-[18px] tracking-[2px]">Tracking the seconds of infinity</p>
          </div>
        </div>
        {/*  */}
        <div className="text-center rounded-2xl pt-5 lg:hidden">
          <p className="text-4xl hover:underline underline-offset-[4px]">Chronograph</p>
          <p className="text-3xl">
          Precision
          </p>
          <p className="mt-5 tracking-[4px]">Tracking the seconds of infinity</p>
        </div>
      </div>
      {/*  */}
      <div className="p-16">
        <h4 className="text-3xl ml-4 mb-8">Explore Our Chronograph Watches</h4>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 p-1">
          {chronographWatches.map((item, i) => (
            <article key={i} className="bg-white p-3 rounded-3xl shadow-md hover:shadow-xl duration-300">
              <Link to={"/product/" + item._id}>
              <div>
                <img
                  className="h-[200px] w-full object-contain"
                  src={item.img_url}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center h-[115px]">
                <p className="text-center font-semibold leading-[24px] tracking-[1px]">
                  {item.name}
                  
                </p>
              </div></Link>
            </article>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Chronograph