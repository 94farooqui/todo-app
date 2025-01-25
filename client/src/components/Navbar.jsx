import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
  return (
    <div className=''>
    <div className="max-w-sm md:max-w-full sm:p-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md rounded-[6px] sm:rounded-[12px]">
      <div className="w-full sm:max-w-[1200px] sm:mx-auto p-2 sm:p-4 flex items-center justify-between">
        <h1 className="text-lg sm:text-2xl font-bold text-cyan-50">ToDo App</h1>
        <div>
          <button
            onClick={() => logout()}
            className="hidden sm:block bg-cyan-50 px-8 py-2 rounded-md text-cyan-950 font-semibold"
          >
            Logout
          </button>
          <button
            onClick={() => logout()}
            className=" sm:hidden bg-cyan-50/30 px-2 py-2 rounded-md text-cyan-50 font-semibold"
          >
            <MdOutlineLogout/>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar