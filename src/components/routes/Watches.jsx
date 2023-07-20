import React from 'react'
import classic from './img/classic.webp'
import banner from './img/banner.webp'

const Watches = () => {
  return (
    <div className='bg-[#FEF8F1] -z-20 relative'>
        <div className=''>
            <img className='object-cover w-[100vw] h-[350px] -z-10 absolute' src={banner} alt="" />
            <div className='h-[350px] w-[30%] text-white flex flex-col items-center justify-center'>
                <div className='text-center rounded-2xl max-lg:hidden'>
                    <p className='text-3xl'>Rolex</p>
                    <p className='text-4xl hover:underline underline-offset-[5px] '>Day-Date</p>
                    <p className='mt-5 tracking-[4px]'>Every dial a discovery</p>
                </div>
            </div>
            {/*  */}
            <div className='text-center rounded-2xl pt-5 lg:hidden'>
                    <p className='text-3xl'>Rolex</p>
                    <p className='text-4xl hover:underline underline-offset-[4px] '>Day-Date</p>
                    <p className='mt-5 tracking-[4px]'>Every dial a discovery</p>
                </div>
        </div>
        {/*  */}
        <div className='px-24 pt-12'>
            <div className='pb-5'>
                <h4 className='text-3xl'>Explore Our Refined Timepieces</h4>
            </div>
            <div className="min-h-[350px] w-full flex max-lg:flex-wrap justify-between">
                <article className='bg-white my-5 p-3 w-[23.5%] max-lg:w-[47%] max-sm:w-full rounded-3xl shadow-md hover:shadow-xl duration-300'>
                    <div><img className='h-[200px] w-full object-contain' src="https://images.secondmovement.com/pub/media/catalog/product/cache/740f07c2874873cb81dfd99f3cb159d1/r/o/rolex-day-date-228206-iceblueromind_1.jpg" alt="" /></div>
                    <div className='flex flex-col items-center justify-center h-[115px]'>
                    <p className='text-center font-semibold leading-[24px] tracking-[1px]'>Rolex<br/>Oyster Perpetual<br/>Day-Date</p>
                    </div>
                </article>
                <article className='bg-white my-5 p-3 w-[23.5%] max-lg:w-[47%] max-sm:w-full rounded-3xl shadow-md hover:shadow-xl duration-300'>
                    <div><img className='h-[200px] w-full object-contain' src="https://images.secondmovement.com/pub/media/catalog/product/cache/740f07c2874873cb81dfd99f3cb159d1/r/o/rolex-day-date-228206-iceblueromind_1.jpg" alt="" /></div>
                    <div className='flex flex-col items-center justify-center h-[115px]'>
                    <p className='text-center font-semibold leading-[24px] tracking-[1px]'>Rolex<br/>Oyster Perpetual<br/>Day-Date</p>
                    </div>
                </article>
                <article className='bg-white my-5 p-3 w-[23.5%] max-lg:w-[47%] max-sm:w-full rounded-3xl shadow-md hover:shadow-xl duration-300'>
                    <div><img className='h-[200px] w-full object-contain' src="https://images.secondmovement.com/pub/media/catalog/product/cache/740f07c2874873cb81dfd99f3cb159d1/r/o/rolex-day-date-228206-iceblueromind_1.jpg" alt="" /></div>
                    <div className='flex flex-col items-center justify-center h-[115px]'>
                    <p className='text-center font-semibold leading-[24px] tracking-[1px]'>Rolex<br/>Oyster Perpetual<br/>Day-Date</p>
                    </div>
                </article>
                <article className='bg-white my-5 p-3 w-[23.5%] max-lg:w-[47%] max-sm:w-full rounded-3xl shadow-md hover:shadow-xl duration-300'>
                    <div><img className='h-[200px] w-full object-contain' src="https://images.secondmovement.com/pub/media/catalog/product/cache/740f07c2874873cb81dfd99f3cb159d1/r/o/rolex-day-date-228206-iceblueromind_1.jpg" alt="" /></div>
                    <div className='flex flex-col items-center justify-center h-[115px]'>
                    <p className='text-center font-semibold leading-[24px] tracking-[1px]'>Rolex<br/>Oyster Perpetual<br/>Day-Date</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
  )
}

export default Watches