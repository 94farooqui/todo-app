import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
  return (
    <div className='w-full bg-gradient-to-b from-white to-zinc-100 shadow-md'>
        <div className='w-[1200px] mx-auto p-4 flex justify-between'>
            <h1 className='text-2xl font-bold text-zinc-900'>ToDo App</h1>
            <div>
                <button onClick={()=>logout()} className='bg-zinc-900 px-8 py-2 rounded-md text-white'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar