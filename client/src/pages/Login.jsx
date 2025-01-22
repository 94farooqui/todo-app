import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const defaultUser = {
    email:"",
    password:""
}

const Login = () => {
    const navigate = useNavigate()
    const {login} = useAuth()
    const [loginUser, setLoginUser] = useState(defaultUser)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        login(loginUser)
        navigate("/")


        const handleChange = (e) => {

        }
    }
//   return (
//     <div>
//       <form onSubmit={handleLoginSubmit}>
//         <input
//         type='text'
//           onChange={(e) =>
//             setLoginUser({ ...loginUser, email: e.target.value })
//           }
//           placeholder="Email"
//         />
//         <input
//         type="password"
//           onChange={(e) =>
//             setLoginUser({ ...loginUser, password: e.target.value })
//           }
//           placeholder="Password"
//         />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   );
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginUser.email}
              onChange={(e) =>
                setLoginUser({ ...loginUser, email: e.target.value })
              }
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginUser.password}
              onChange={(e) =>
                setLoginUser({ ...loginUser, password: e.target.value })
              }
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login