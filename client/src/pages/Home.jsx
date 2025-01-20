import React, { useState } from 'react'
import TodaysTasks from '../components/TodaysTasks'
import OpenTasks from '../components/OpenTasks'
import OverdueTasks from '../components/OverdueTasks'
import CompletedTasks from '../components/CompletedTasks'

const Home = () => {
    const [activeTab,setActiveTab] = useState("today")
  return (
    <div>
        <h1 className='text-4xl font-bold text-center mb-8'>To Do App</h1>
        <div className='w-[800px] mx-auto border flex rounded-lg overflow-hidden shadow-sm'>
            <button onClick={()=>setActiveTab("today")} className={`flex-1 text-lg font-semibold ${activeTab == "today" ? "bg-zinc-950 text-zinc-50" :"bg-zinc-200 text-zinc-950"} p-4`}>Today's Tasks</button>
            <button onClick={()=>setActiveTab("pending")} className={`flex-1 text-lg font-semibold ${activeTab == "pending"? "bg-zinc-950 text-zinc-50" :"bg-zinc-200 text-zinc-950"} p-4 border-x border-zinc-600/10`}>Pending Tasks</button>
            <button onClick={()=>setActiveTab("overdue")} className={`flex-1 text-lg font-semibold ${activeTab == "overdue"? "bg-zinc-950 text-zinc-50" :"bg-zinc-200 text-zinc-950"} p-4`}>Overdue Tasks</button>
            <button onClick={()=>setActiveTab("completed")} className={`flex-1 text-lg font-semibold ${activeTab == "completed"? "bg-zinc-950 text-zinc-50" :"bg-zinc-200 text-zinc-950"} p-4`}>Completed</button>


        </div>
        <div className='mt-12'>
        { activeTab == "today" && <TodaysTasks/>}
        { activeTab == "pending" && <OpenTasks/>}
        { activeTab == "overdue" && <OverdueTasks/>}
        { activeTab == "completed" && <CompletedTasks/>}
        </div>
        
    </div>
  )
}

export default Home