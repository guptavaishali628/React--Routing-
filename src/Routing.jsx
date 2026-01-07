import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        {/* bydefault isko dikhane k liye on layout */}
            <Route index element={<Home/>}></Route> 
            <Route path='about' element={<About/>}></Route> 
            <Route  path='contact' element={<Contact/>}></Route> 
            {/* if page not found */}
            <Route  path='*' element={<h1>This is error page</h1>}></Route> 
        </Route>
      </Routes>
    </>
  )
}

export default Routing
