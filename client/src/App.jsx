import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import { tasks } from './data/tasksData'

function App() {

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
