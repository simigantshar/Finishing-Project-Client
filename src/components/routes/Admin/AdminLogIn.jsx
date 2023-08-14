import React from 'react'
import {Link} from 'react-router-dom'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { useState } from 'react'

const AdminLogIn = () => {

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  return (
    <div className='bg-[#775151] w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className="h-40 flex flex-col justify-between">
        <div><h1 className='text-5xl font-thin'>Log In as:</h1></div>
        <div className='text-2xl h-[5rem] flex flex-col justify-between'>
          <Link to={"/"} className='flex items-center'><MdOutlineKeyboardArrowRight className={show? "text-stone-400" : 'invisible'}/><p onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className='hover:text-stone-400'>User</p></Link>
          <Link to={"/"} className='flex items-center'><MdOutlineKeyboardArrowRight className={show2? "text-stone-400" : 'invisible'}/><p onMouseOver={() => setShow2(true)} onMouseLeave={() => setShow2(false)} className='hover:text-stone-400'>Administrator</p></Link>
        </div>
      </div>
    </div>
  )
}

export default AdminLogIn