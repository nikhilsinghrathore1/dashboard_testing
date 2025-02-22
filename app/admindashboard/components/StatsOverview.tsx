import React from 'react'
import { FaArrowUp } from "react-icons/fa";

interface val { 
  Cname : string , 
  plan : string , 
  date : string , 
  assignee : string , 
  imgUrl : string , 
  empName : string 
}

const StatsOverview:React.FC<val> = ({Cname , plan , date , assignee , imgUrl , empName}) => {
  return (
<div className='w-full  flex items-center justify-between py-1 bg-[#f5f5f5] rounded-xl '>
                        <div className='text-center w-[20%] flex flex-col gap-1 items-center  leading-[1.3rem]'>
                          <h1 className='opacity-70 text-[12px]'>Total Profit/Loss</h1>
                          <div className='flex gap-[6px] w-[60%] text-center justify-start pl-6  text-green-600 items-center'>
                            <FaArrowUp/>
                          <h1 className='text-[0.85rem]  font-semibold'>{empName}</h1>
                          </div>
                        </div>

                        <div className='text-center  w-[20%] leading-[1.3rem]'>
                          <h1 className='opacity-70 mb-1 text-[12px]'>Win Rate</h1>
                          <h1 className='text-[0.85rem] font-semibold  opacity-70'>{plan}</h1>
                        </div>

                        <div className='text-center w-[20%] leading-[1.3rem]'>
                          <h1 className='opacity-70 mb-1 text-[12px]'>Best Trade on</h1>
                          <h1 className='text-[0.85rem]  font-semibold  opacity-70'>{date}</h1>
                        </div>

                        <div className='text-center w-[20%] flex justify-center   flex-col items-center leading-[1.3rem]'>
                          <h1 className='opacity-70 text-[12px] pl-5 '>Trader Name</h1>
                          <div className='flex gap-2  items-center  w-[50%]'>
                            <div className='w-8 h-8 rounded-full  overflow-hidden'>
                              <img className='w-full h-full object-cover' src={imgUrl} alt="not showing" />
                            </div>
                          <h1 className='text-[0.85rem] font-semibold  opacity-70'>{assignee}</h1>
                          </div>
                        </div>

                        <div className='text-center w-[20%] flex gap-1  flex-col items-center leading-[1.3rem]'>
                          <h1 className='opacity-70 text-[12px]'>Risk Level</h1>
                          <div className='flex gap-[6px] w-[60%] text-center justify-start pl-10  text-orange-400 items-center'>
                            <FaArrowUp/>
                          <h1 className='text-[0.85rem]  font-semibold'>High</h1>
                          </div>
                        </div>
            </div>
  )
}

export default StatsOverview