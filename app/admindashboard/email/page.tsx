import React from 'react'
import SideNavBar from '../components/SideNavBar'
import { TopNavigation } from '../components/TopNavigation'

const page = () => {
  return (
    <div className='w-full flex '>
               <SideNavBar current={"email"}/>
               <div className='w-[82%] h-full'>
                              <TopNavigation/>

                            <div className='w-full  flex items-center h-[80vh] p-4  gap-5 justify-start  flex-wrap'>
                              {[1,2,3,4,5,6,7,4,5,6,7,1,].map((e,i)=>(

                                          <div key={i} className='flex-col p-2 border-[1px] border-black rounded-xl h-[30%] w-[20%] '>
                                            <div className='w-full flex gap-2 items-center '>
                                              <div className='w-8 h-8 overflow-hidden object-cover rounded-full'>
                                                <img src="https://pbs.twimg.com/profile_images/1823258081062428673/5uXY9oAC_400x400.jpg" alt="not showing" />
                                              </div>

                                              <h1>ayush kansal</h1>

                                            </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illo fugiat nisi placeat culpa.</p>

                                          </div>

                              )

                              )}
                                        
                            </div>

               </div>
    </div>
  )
}

export default page