import React from 'react'

const Test = () => {
  return (
    <div className='flex justify-between h-[300px] px-2 md:px-8 w-[360px] bg-[#858d1d]'>
        <div className="flex flex-col justify-around">
            <div className='text-xl font-semibold'>Watches</div>
            <div className='h-[40%] flex-col justify-between flex'>
                <div>Conographs</div>
                <div>Hyper</div>
                <div>Metal</div>
                <div>Warrent</div>
            </div>
            <div className='text-xs'>All watches</div>
            
        </div>
        <div className="">
            <div className='text-xl font-semibold'>Bands</div>
                <div>
                    <div>Conographs</div>
                    <div>Hyper</div>
                    <div>Metal</div>
                    <div>Warrent</div>
                </div>
            <div>All watches</div></div>
            
        <div className="">
            <div className='text-xl font-semibold'>Cufflinks</div>
                <div>
                    <div>Conographs</div>
                    <div>Hyper</div>
                    <div>Metal</div>
                <div>Warrent</div>
            </div>
            <div>All watches</div></div>
    </div>
  )
}

export default Test