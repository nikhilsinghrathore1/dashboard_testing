"use client"
import React, { useEffect } from 'react'
import GraphComp from './components/GraphComp'
import {useState} from "react"
import axios from "axios"
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import StatsOverview from './components/StatsOverview';
import FilterComp from './components/FilterComp'
import SideNavBar from './components/SideNavBar';
import { TopNavigation } from './components/TopNavigation';
import { LineChartHero } from './components/LineChartHero';
import { BarChartHero } from './components/BarChartHero';
import { DonutChartHero } from './components/DonutChartHero';
import { BarChartProfitLossExample } from './components/BarChartProfitLossExample';


const Page = () => {
  const [filterOpen, setfilterOpen] = useState(false)

  const filterClose = () =>{
    setfilterOpen(false)
  }

  
  useEffect(() => {
    const callData = async () => {
      try {
        const res = await axios.post('/api/news');
        console.log(res.data);

      } catch (error) {
        console.error('Error fetching crypto news:', error);
      }
    };
    callData();
    console.log("the sasdfsdfl asdfd asfd")
  }, []);
  

  return (
    
    <div className='w-full h-screen bg-[#f0f5fc] flex relative'>

      <SideNavBar current={"AdminDashboard"}/>
      <div className='w-[82%]  h-full'>
        <TopNavigation/>
        {/* outer div */}
        <div className='w-full h-[90%]  overflow-y-auto  px-3'>
          {/* this is the graph section  */}
          <div className='w-full h-[85%] overflow-hidden mt-4 justify-center flex  gap-2'>

            {/* left graph section  */}

            <div className='w-[40%] h-full flex flex-col gap-2'>
                        <div className='w-full h-[55%] bg-white rounded-xl '>
                                    <GraphComp padding={5} Comp={LineChartHero} text='Market Trends' width='100'/>
                        </div>
                        <div className='w-full h-[45%] bg-white rounded-xl '>
                                    <GraphComp padding={2} Comp={DonutChartHero} text='Budget Allocation' width='100'/>
                        </div>
                        
            </div>

            {/* right graph section  */}

            <div className='w-[59%] h-full flex-col gap-2 flex '>
            <div className='w-full h-[50%] bg-white rounded-xl '>
                                    <GraphComp padding={10} Comp={BarChartHero} text='Savings vs. Expenses' width='100'/>
                        </div>
            <div className='w-full h-[50%] flex gap-2  rounded-xl '>
              <div className='w-[45%] h-full'>

                                    <GraphComp padding={2} Comp={BarChartProfitLossExample} text='Investment Growth' width='100'/>
              </div>
              <div className='w-[55%] h-full'>

                                    <GraphComp padding={2} Comp={LineChartHero} text='Expense Breakdown' width='100'/>
              </div>
                        </div>
            </div>
            

          </div>

          {/* this is the company stats page */}

          <div className='w-full bg-white  pt-5 mt-3 rounded-xl'>
            {/* this is the same as the payment thingy not making in component though kyu ki bhai time ni hai  */}
          <div className='w-full px-4 flex justify-between items-center'>
                                                                           {/* this is the main heading */}
                                                                           <div className='text-[1.5rem] font-bold tracking-tight'>Market Leaders</div>

                                                                           <div className='flex gap-4 text-[1.2rem] opacity-70 '>
                                                                           <IoIosSearch/>
                                                                           <FiRefreshCw/>
                                                                           <FaArrowDown/>
                                                                           <div onClick={()=>setfilterOpen(prev=>!prev)}>

                                                                           <CiFilter/>
                                                                           </div>
                                                                           </div>


          </div>

          {/* the stats contaier */}

          <div className=' px-3 flex flex-col w-full gap-3 pt-5'>
            {[{Cname : "TATA" , date: "2/12/23" , empName : "NikoChan" , assignee : "jhon smith" , imgUrl : "https://images.pexels.com/photos/12918397/pexels-photo-12918397.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" , plan:"87%"},{Cname : "Tesla" , date: "3/04/43" , empName : "Arima" , assignee : "Futaro kun" , imgUrl : "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600" , plan:"90%"},{Cname : "Mahindra" , date: "5/07/13" , empName : "Soju" , assignee : "Aisha san" , imgUrl : "https://images.pexels.com/photos/2061302/pexels-photo-2061302.jpeg?auto=compress&cs=tinysrgb&w=600" , plan:"88%"},{Cname : "Google" , date: "1/02/14" , empName : "Horiyima" , assignee : "Kaede san" , imgUrl : "https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?auto=compress&cs=tinysrgb&w=600" , plan:"79%"},{Cname : "Microsoft" , date: "17/12/14" , empName : "Nanao" , assignee : "Miku san" , imgUrl : "https://images.pexels.com/photos/4884417/pexels-photo-4884417.jpeg?auto=compress&cs=tinysrgb&w=600" , plan:"84%"},{Cname : "Obys Agency" , date: "24/12/04" , empName : "NIkoChan" , assignee : "Nehal san" , imgUrl : "https://images.pexels.com/photos/5477855/pexels-photo-5477855.jpeg?auto=compress&cs=tinysrgb&w=600" , plan:"98%"},{Cname : "Apple" , date: "12/12/04" , empName : "Sachin" , assignee : "Siddhi" , imgUrl : "https://images.pexels.com/photos/5014213/pexels-photo-5014213.jpeg?auto=compress&cs=tinysrgb&w=600" , plan:"79%"}].map((e,i)=>(

              <StatsOverview Cname={e.Cname} date ={e.date} empName ={e.empName} assignee ={e.assignee} imgUrl={e.imgUrl} plan ={e.plan} key={i}/>
            ))}
          </div>

          </div>

        </div>

      </div>

    {filterOpen?(
      <FilterComp close={filterClose}/>
    ):<></>}


    </div>
  )
}

export default Page